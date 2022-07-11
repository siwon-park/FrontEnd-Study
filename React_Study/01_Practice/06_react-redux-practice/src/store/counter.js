// counterSlice
import { createSlice } from "@reduxjs/toolkit";
const initialCounterState = { counter: 0, showCounter: true }

const counterSlice = createSlice({
  name: 'counter',
  initialState: initialCounterState,
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

export const counterActions = counterSlice.actions

export default counterSlice.reducer;