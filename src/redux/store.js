import {configureStore} from '@reduxjs/toolkit'
import cartReducer from '../redux/slice/cartReducer'
const store=configureStore({
    reducer:{
        addToCart:cartReducer
    }
})
export default store;