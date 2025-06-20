import { createSlice } from "@reduxjs/toolkit"; 
const cartSlice=createSlice({
    name:"cart",
    initialState:{
        data:[]
    },
    reducers:{
        addToCart:(state,action)=>{
            // Items will get add in the Array State
            state.data.push(action.payload);
        }
    }
});
export const{addToCart}=cartSlice.actions;
export default cartSlice.reducer;