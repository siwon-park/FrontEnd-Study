# 18_Redux Basic

### What is Redux?

A state management system for cross-component or app-wide state

### 상태의 구분

#### Local State

하나의 컴포넌트에 속하는 상태

- 예) 버튼을 눌렀을 때, 더보기 기능을 제공하는 토글링 변수

- useState() 또는 useReducer()를 통해 관리

<br>

#### Cross-Component State

여러 컴포넌트에 영향을 미치는 상태

- 예) 모달을 열고 닫는 변수
- props chain/drilling을 통해 관리 + Context API

<br>

#### App-Wide State

모든 컴포넌트에 영향을 미치는 상태

- 예) 로그인 상태, 인증 상태 등
- props chain/drilling을 통해 관리 + Context API

<br>

#### Redux

=> Cross-Component State와 App-Wide State를 관리하는데 도와주는 툴

![image](https://user-images.githubusercontent.com/93081720/178136500-4a2b9a15-a4dc-40da-a9f2-7ed2584b8323.png)

<br>

### Why use Redux?; React Context Vs Redux

하나의 어플리케이션에 둘 다 사용 가능하긴 함

#### React Context API의 단점(한계)

![image](https://user-images.githubusercontent.com/93081720/178136761-0f15e591-7103-4d9b-9c15-1d3198c0e511.png)

- 설정 및 셋업이 매우 복잡해짐 => 로직이 꼬이거나 복잡해질 수도 있음

![image](https://user-images.githubusercontent.com/93081720/178136608-09b3a23d-705d-46bd-b27a-5664b63ee809.png)

- 컨텍스트 자체가 비대해져서 컨텍스트를 관리하기도 복잡, 힘들 수도 있음
- 성능적으로 데이터가 너무 자주 변하면 컨텍스트 사용이 적합하지 않음

<br>

#### Redux

**유동적 상태관리 라이브러리**로 React Context에 있는 단점을 갖고 있지 않음

<br>

### Redux Core Concept

리덕스의 작동 방식

정확히 한개의 저장소(store)에서 어플리케이션에서 사용하는 모든 state를 관리함

항상 저장소를 매번 직접 관리할 필요 없음

컴포넌트는 저장된 데이터를 직접 조작하지 않음

컴포넌트는 데이터를 구독(subscription)할 뿐, 직접적은 데이터 조작은 Reducer Function(리듀서 함수)가 조작하며, 리듀서 함수는 Action을 통해서 전달되어 수행됨

![image](https://user-images.githubusercontent.com/93081720/178137005-3f03a29b-6ff2-4faa-a52d-bc5cb23afe3d.png)

<br>

### Using Redux

```
npm install redux // 기본 설치
npm install react-redux // 리액트 앱에서 리덕스 스토어와 리듀서에 간단히 접속 가능하게 해줌
```

```javascript
const redux = require('redux')

// 리듀서 함수(순수함수; 매번 동일한 값을 넣으면 항상 동일한 값을 반환해야함)
const counterReducer = (state = { counter: 0 }, action) => {
    if (action.type === 'increment') {
        return {
        	counter: state.counter + 1
    	}
    }
    
    if (action.type === 'decrement') {
        return {
            count: state.counter - 1
        }
    }
    
    return state
}

// 저장소에 리듀서함수를 연결
const store = redux.createStore(counterReducer)

// 구독
const counterSubscriber = () => {
    const latestState = store.getState()
}

store.subscribe(counterSubscribe)

// action dispatch
store.dispatch({ type: 'increment' })
store.dispatch({ type: 'decrement' })
```

<br>

### Store 등록하기

![image](https://user-images.githubusercontent.com/93081720/178149130-0c293781-73d7-4a77-bcfc-49fafefd27be.png)

<br>

### Redux 사용 시 절대 하지 말아야 하는 것

state를 변경하는 방법으로 동작하게 해도 앱 기능이 올바로 작동할 수도 있겠지만,

state를 변경하는 행위는 절대 하면 안 됨 => 새로운 state를 만들어서 기존 state에 override하는 방식으로 사용

- 절대로 이와 같이 직접 state를 변경하는 행동을 하지 말 것!!

![image](https://user-images.githubusercontent.com/93081720/178151235-69ae1ae4-04e2-472a-b475-f827916b3f01.png)

<br>

- 새로운 객체를 만들어서 기존 state에 override하는 것은 됨(권장)

![image](https://user-images.githubusercontent.com/93081720/178151087-b6812bc0-4fe9-4bc6-87e8-f59150b8cbbb.png)

<br>

### Redux Toolkit

```
npm install @reduxjs/toolkit
```

### createSlice({})

Redux toolkit은 기존 상태를 함부로 바꾸지 못하게 해준다 => 왜냐하면 Redux toolkit은 내부적으로 immer라는 패키지를 사용하는데, counter++와 같이 값을 변경하는 코드를 감지해서 자동으로 원래 있는 상태를 복제함. 그리고 변화된 새로운 상태 객체를 생성하고 이후 모든 상태를 변경할 수 없게 유지함

따라서 다음과 같이 쓰는 것이 가능해진다

![image](https://user-images.githubusercontent.com/93081720/178152182-c97ba770-e9b2-45f9-a2bf-37259a184927.png)

<br>

### configureStore

여러 개의 reducer를 하나의 reducer로 합칠 수 있게 해줌 => 기존의 createStore는 불가능한 기능

![image](https://user-images.githubusercontent.com/93081720/178152289-649b4dbc-ca83-496a-9cd1-f2413c6fa296.png)

<br>

#### 등록하기

createSlice안에는 reducers라는 속성으로 지정해줬지만, reducer로 (개별적으로) 등록한다

여러 개의 reducer를 등록할 때는 다음과 같이 reducer: {객체} 행태로 코드를 작성한다

![image](https://user-images.githubusercontent.com/93081720/178152454-5e56f40a-af2b-4718-9502-2ed029caa2f1.png)

<br>

등록하려는 reducer가 한 개라면 아래와 같이 써도 된다.

![image](https://user-images.githubusercontent.com/93081720/178152499-2440a876-e55e-471a-8dbb-c403277e410b.png)

<br>

#### 함수 호출

![image](https://user-images.githubusercontent.com/93081720/178152843-c618aeaa-581d-4231-9248-579f096b9069.png)

#### 내보내기

![image](https://user-images.githubusercontent.com/93081720/178152858-51a27537-2ad1-47ac-877f-f069d35da4ba.png)

<br>

- 이렇게 사용되던 것을

![image](https://user-images.githubusercontent.com/93081720/178152898-1700d748-9cfa-4c33-996a-7d5d8e265445.png)

<br>

- 다음과 같이 수정할 수 있음

![image](https://user-images.githubusercontent.com/93081720/178152963-e1933d12-9a1e-45ba-a0e6-a3da65f424cd.png)

- increase함수에서 action.payload로 수정

![image](https://user-images.githubusercontent.com/93081720/178152991-0cdc404d-763f-496b-8d1f-609bb33b6308.png)

<br>

※ store에 여러 개의 리듀서를 등록했다면 실제 스토어에 있는 데이터를 접근할 때도 이전과 달리 조금 수정이 필요함

![image](https://user-images.githubusercontent.com/93081720/178313487-ffb27a78-855a-458a-bf0f-adc48bf6b525.png)

![image](https://user-images.githubusercontent.com/93081720/178313640-b9c0621a-0fa1-49e5-977c-41ef73787e62.png)

<br>

### 코드 분할하기

각 Slice별로 파일을 분할하여 사용가능함

이 때, export default oooSlice.reducer로 export했다면 import할 때는 oooReducer로 import함

![image](https://user-images.githubusercontent.com/93081720/178318236-b6293315-a13b-4366-82bc-bb378f064c24.png)

![image](https://user-images.githubusercontent.com/93081720/178318272-91c90922-9e3c-4056-a1a7-5f4edd6eb797.png)

![image](https://user-images.githubusercontent.com/93081720/178318336-65345fa8-d537-4d4f-a2e3-85bf68dd7db2.png)