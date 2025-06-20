import { useState } from 'react'
import './App.css'
import { useSelector , useDispatch } from 'react-redux'
import { increment,decrement } from './redux/slice/counterReducer'
function App() {
    const count=useSelector((state)=>state.count.value)
    const dispatch=useDispatch();
  return (
    <>
     <button onClick={()=>dispatch(increment())}> + </button>
     <h2>{count}</h2>
     <button onClick={()=>dispatch(decrement())}> - </button>
    </>
  )
}

export default App;
