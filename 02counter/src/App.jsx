import { useState } from 'react'
import './App.css'

function App() {
 
 const [counter,setCounter]=useState(15)
 const AddValue=()=>{
  setCounter((prevCounter)=>prevCounter+1)
   setCounter((prevCounter)=>prevCounter+1)
    setCounter((prevCounter)=>prevCounter+1)
 }
const RemoveValue=()=>{
  setCounter(counter-1)
}
  return (
    <>
      <h1>React course with Mamatha {counter}</h1>
      <h2>Counter Value:{counter}</h2>
      <button
      onClick={AddValue}>Add Value</button>{" "}
      <button
      onClick={RemoveValue}>Remove Values</button>
      <p>footer:{counter}</p>
    </>
  )
}

export default App
