// 리덕스 로직을 저장하는 index.js
import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "./counter";
import authReducer from "./auth";


const store = configureStore({
  reducer: {
    counter: counterReducer,
    auth: authReducer,
  }
})

export default store

