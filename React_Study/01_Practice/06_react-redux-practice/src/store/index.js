// 리덕스 로직을 저장하는 index.js
import { createStore } from "redux";
import { createSlice, configureStore } from "@reduxjs/toolkit";

const initialState = {counter: 0, showCounter: true}

const counterSlice = createSlice({
  name: 'counter',
  initialState: initialState,
  reducers: {
    // 어떤 행동을 했냐에 따라 메서드가 달리 호출됨(이전과 달리 action을 체킹할 필요 없음)
    increment(state) {
      state.counter++
    },
    decrement(state) {
      state.counter--
    },
    increase(state, action) {
      state.counter += action.payload
    },
    toggleCounter(state) {
      state.showCounter = !state.showCounter
    },
  }
})

// // 이 메서드가 실행되면 action 객체가 생성됨(액션 생성자라고도 함)
// counterSlice.actions.toggleCounter()

const store = configureStore({
  reducer: counterSlice.reducer
})

export const counterActions = counterSlice.actions

export default store