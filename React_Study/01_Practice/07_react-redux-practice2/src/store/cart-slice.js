import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: 'cart',
  initialState: {
    items: [],
    totalQuantity:0,
    totalAmount: 0,
    changed: false, // 바뀌었을 때만 fetch하도록하는 플래그 변수
  },
  reducers: {
    replaceCart(state, action) {
      state.totalQuantity = action.payload.totalQuantity
      state.items = action.payload.items
    },

    addItemToCart(state, action) {
      const newItem = action.payload
      // items가 undefined면 find를 할 수 없으니 에러가 발생함
      const existingItem = state.items.find(item => item.id === newItem.id)

      state.totalQuantity += 1
      state.changed = true
      if (!existingItem) {
        state.items.push({
          id: newItem.id, 
          price: newItem.price, 
          quantity: 1, 
          totalPrice: newItem.price, 
          name: newItem.title})
      } else {
        existingItem.quantity += 1
        existingItem.totalPrice += newItem.price
      }
    },

    removeItemFromCart(state, action) {
      const id = action.payload
      const existingItem = state.items.find(item => item.id === id)
      state.totalQuantity -= 1
      state.changed = true
      if (existingItem.quantity === 1) {
        state.items = state.items.filter(item => item.id !== id)

      } else {
        existingItem.quantity -= 1
        existingItem.totalPrice -= existingItem.price
      }
    },
  }
})

export const cartActions = cartSlice.actions

export default cartSlice;