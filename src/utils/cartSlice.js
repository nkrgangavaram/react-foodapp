import { createSlice, current } from "@reduxjs/toolkit";

const cartSlice = createSlice({
    name: 'cart',
    initialState:{
        items:[]
    },
    reducers:{
        addItem: (state,action)=>{
            state.items.push(action.payload);
        },
        removeitem: (state,action)=>{
            state.items.pop();
        },
        clearcart: (state,action)=>{
            //RTK -- either mutate the state or return a new  state
            //console.log(current(state));  to get the state value we need to use currnt
            state.items.length = 0;

            //return {items:[]}; returning a new state..
        },
    }
})

export const {addItem,removeitem,clearcart} = cartSlice.actions;
export default cartSlice.reducer;