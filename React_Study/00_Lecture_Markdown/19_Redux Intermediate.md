# 19_Redux Intermediate

### Redux로 비동기 호출 다루기

리듀서 함수는 순수함수이며, 사이드 이펙트 없이 동기적으로 작동되는 함수여야함

Input(Old State + Action) => OutPut(New State)

★☆ 절대 리듀서 함수 내부에서 부수효과를 내는 행동을 하지 말 것. 그것이 동기식이든, 비동기식이든 절대 내부에서 수행하지 말 것!!☆★

![image](https://user-images.githubusercontent.com/93081720/178477436-48ddda30-606c-4051-82b0-565950b79118.png)

#### 그럼 비동기 코드는 어디서 실행해야하는가?

- 컴포넌트 안에서 실행(useEffect)
- action 생성자 안에서 실행

<br>

### 컴포넌트 안에서 비동기 코드 실행하기

- App.js

```js
import Cart from './components/Cart/Cart';
import Layout from './components/Layout/Layout';
import Products from './components/Shop/Products';

import { useSelector, useDispatch } from 'react-redux'
import React, { useEffect } from 'react';
import { uiActions } from './store/ui-slice';
import Notification from './components/UI/Notification';

let isInitial = true

function App() {
  const dispatch = useDispatch()
  const showCart = useSelector(state => state.ui.cartIsVisible)
  const cart = useSelector((state) => state.cart)
  const notification = useSelector((state) => state.ui.notification)

  useEffect(() => {
    const sendCartData = async() => {
      // 아직 데이터를 보내기 전
      dispatch(
        uiActions.showNotification({
          status: 'pending',
          title: 'Sending...',
          message: 'Sending cart data',
        })
      )
      // 데이터 수정을 요청함
      const response = await fetch("https://react-http-8e436-default-rtdb.firebaseio.com/cart.json", 
      {method: 'PUT', 
      body:JSON.stringify(cart)
      })

      if (!response.ok) {
        dispatch(
          uiActions.showNotification({
            status: 'error',
            title: 'Error!',
            message: 'Sending cart data failed!'
          })
        )
      }

      // 요청 성공 시
      dispatch(
        uiActions.showNotification({
          status: 'success',
          title: 'Success!',
          message: 'Sent cart data successfully',
        })
      ) 
    }
    
    // 제일 처음 sendCartData가 동작하지 않게 flag변수를 선언해줌
    if (isInitial) {
      isInitial = false
      return
    }

    sendCartData().catch(error => {
      dispatch(
        uiActions.showNotification({
          status: 'error',
          title: 'Error!',
          message: 'Sending cart data failed!'
        })
      )
    })
  }, [cart, dispatch])

  return (
    <React.Fragment>
      {notification && <Notification 
      status={notification.status}
      title={notification.title}
      message={notification.message}
      ></Notification>}
      <Layout>
        {showCart && <Cart />}
        <Products />
      </Layout>
    </React.Fragment>
  );
}

export default App;
```

<br>

### Thunk

다른 작업이 완료될 때까지 작업을 지연시키는 함수 => action creator

![image](https://user-images.githubusercontent.com/93081720/180610488-b35329cf-f5dc-4290-831f-17674a8b85fb.png)

- 장점
  - 컴포넌트를 lean하게 만들 수 있음 => 컴포넌트 내부에서 useEffect를 통해 비동기를 실행할 경우 컴포넌트가 fat해지게 됨
    - 컴포넌트에 너무 많은 로직을 넣지 않음으로써 lean하게 유지

- cart-slice.js

  - redux 스토어에 함수를 생성하는 방식으로 구현함

  - dispatch함수를 실행하는 것을 반환하는 함수 => js는 함수를 실행하는 return이 가능함

  - ##### 단, reducer는 순수함수여야 하므로 reducers에 등록하는 함수가 아닌 개별 함수임

```js
// cart-slice.js
// (일부 코드 생략)
export const sendCartData = (cart) => {
  return async (dispatch) => {
    dispatch(
      uiActions.showNotification({
        status: 'pending',
        title: 'Sending...',
        message: 'Sending cart data',
      })
    )

    const sendRequest = async () => {
      const response = await fetch(
        "https://react-http-8e436-default-rtdb.firebaseio.com/cart.json",
        {
          method: 'PUT',
          body: JSON.stringify(cart)
        })

      if (!response.ok) {
        dispatch(
          uiActions.showNotification({
            status: 'error',
            title: 'Error!',
            message: 'Sending cart data failed!'
          })
        )
      }
    }
    
    try {
      await sendRequest()
      dispatch(
        uiActions.showNotification({
          status: 'success',
          title: 'Success!',
          message: 'Sent cart data successfully',
        })
      ) 
    } catch (error) {
      dispatch(
        uiActions.showNotification({
          status: 'error',
          title: 'Error!',
          message: 'Sending cart data failed!'
        })
      )
    }
  }
}

```

- 결과적으로 App.js는 lean한 컴포넌트가 됨

```js
import Cart from './components/Cart/Cart';
import Layout from './components/Layout/Layout';
import Products from './components/Shop/Products';

import { useSelector, useDispatch } from 'react-redux'
import React, { useEffect } from 'react';
import Notification from './components/UI/Notification';
import { sendCartData } from './store/cart-slice';

let isInitial = true

function App() {
  const dispatch = useDispatch()
  const showCart = useSelector(state => state.ui.cartIsVisible)
  const cart = useSelector((state) => state.cart)
  const notification = useSelector((state) => state.ui.notification)

  useEffect(() => {
    if (isInitial) {
      isInitial = false
      return
    }
    dispatch(sendCartData(cart))
  }, [cart, dispatch])

  return (
    <React.Fragment>
      {notification && <Notification 
      status={notification.status}
      title={notification.title}
      message={notification.message}
      ></Notification>}
      <Layout>
        {showCart && <Cart />}
        <Products />
      </Layout>
    </React.Fragment>
  );
}

export default App;
```

<br>

### 데이터 fetch해오기

```js
// 데이터 불러오기
export const fetchCartData = () => {
  return async (dispatch) => {
    const fetchData = async () => {
      // GET은 default이기 때문에 url뒤에 요청 파라미터가 없어도됨
      const response = await fetch("https://react-http-8e436-default-rtdb.firebaseio.com/cart.json")

      if (!response.ok) {
        throw new Error('Could not fetch cart data')
      }

      const data = await response.json()
      return data
    }

    try {
      const cartData = await fetchData()
      dispatch(cartActions.replaceCart({
        items: cartData.items || [], // 데이터가 없을 경우, fetch해올 때 items가 undefined를 방지하기 위함
        // items가 undefined이면 addItemToCart에 existingItem에서 find를 사용할 때 에러가 발생하게 됨
        totalQuantity: cartData.totalQuantity,
      }))
    } catch (error) {
      dispatch(
        uiActions.showNotification({
          status: 'error',
          title: 'Error!',
          message: 'Sending cart data failed!'
        })
      )
    }
  }
}
```

