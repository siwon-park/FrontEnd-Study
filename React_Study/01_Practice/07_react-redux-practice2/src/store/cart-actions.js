import { cartActions } from "./cart-slice";
import { uiActions } from "./ui-slice";

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


// 데이터 보내기
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
          body: JSON.stringify({
            items: cart.items,
            totalQuantity: cart.totalQuantity,
          })
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