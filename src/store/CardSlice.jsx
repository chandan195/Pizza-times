import { createSlice } from "@reduxjs/toolkit";
import toast from "react-hot-toast";

const cardSlices = createSlice({
  name: "card",
  initialState: {
    cart: localStorage.getItem("cartItems")
      ? JSON.parse(localStorage.getItem("cartItems"))
      : [],
  },
  reducers: {
    addToCart: (state, action) => {
      const existingItem = state.cart.find(
        (item) => item.id === action.payload.id
      );
      if (existingItem) {
        state.cart = state.cart.map((item) =>
          item.id === action.payload.id ? { ...item, qty: item.qty + 1 } : item
        );
      } else {
        state.cart.push(action.payload);
      }
     

      localStorage.setItem("cartItems", JSON.stringify(state.cart));
    },
    removeFromCart: (state, action) => {
      state.cart = state.cart.filter((item) => item.id !== action.payload);
      localStorage.setItem("cartItems", JSON.stringify(state.cart));
    },

    clearCard: (state, action) => {
      state.cart = [];
      localStorage.setItem("cartItems", JSON.stringify(state.cart));
      toast.error("Cart cleared", { position: "top-center" });
    },

    incrementQty: (state, action) => {
      state.cart = state.cart.map((item) =>
        item.id === action.payload ? { ...item, qty: item.qty + 1 } : item
      );
      toast.success("Product qty increase from cart" ,{position:"top-center"})
      localStorage.setItem("cartItems", JSON.stringify(state.cart));
    },

    decrementQty: (state, action) => {
      //* ToDo: handle increment
      state.cart = state.cart.map((item) =>
        item.id === action.payload ? { ...item, qty: item.qty - 1 } : item
      );

      toast.error("Product qty removed from cart", {
        position: "top-left",
      });
      localStorage.setItem("cartItems", JSON.stringify(state.cart));
    },
  },
});

export const {
  addToCart,
  removeFromCart,
  incrementQty,
  decrementQty,
  clearCard,
} = cardSlices.actions;
export default cardSlices.reducer;
