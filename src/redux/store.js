import {configureStore} from '@reduxjs/toolkit'
import counterReducer from './slice/counterReducer'; // named Import
const store=configureStore({
    reducer:{
        count:counterReducer
    }
})
export default store;