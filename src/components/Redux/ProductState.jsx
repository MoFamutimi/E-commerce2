import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    allProduct: [],
    user: [],
    addcart: [],
    signout: "",
    history: [],
    Qty: 0
}



const productState = createSlice({
    name: "Product",
    initialState,
    reducers:{
        allApiData: (state, {payload})=>{
            state.allProduct = payload
            // console.log("this is my payload", payload)
        },

        userData: (state, {payload}) => {
          state.user = payload
        },

        signOut: (state) => {
          state.user = null
        },

        removeCart: (state, {payload})=> {
          state.addcart = state.addcart.filter((fl) => fl.id !== payload.id);
          console.log(payload)
        },

        addToCart: (state, {payload}) => {
          const check = state.addcart.findIndex((e) => e.id === payload.id)
          if (check >= 0) {
            state.addcart[check].Qty += 1
          } else {
            const addValue = {
              ...payload,
              QTY: 1,
            };
            state.addcart.push(addValue);
          }
        }

        
  
    }
})

export const {allApiData, userData, signOut, removeCart, addToCart} = productState.actions;
export default productState.reducer


// ProductState File