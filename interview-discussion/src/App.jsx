import { useState } from 'react'
import './App.css'

function App() {
  const [value, setValue] = useState(1)
  // const [multipliedValue, setMultipliedValue] = useState(1)
  const multipliedValue = value * 5;

  const multiplybyfive = () => {
    // setMultipliedValue (value * 5)
    setValue(value + 1)
  }
  return (
    <>
      <h1>Main value: {value} </h1>
      <button
      onClick={multiplybyfive}
      >Click to multiply by 5</button>
      <h2>Multiplied value: {multipliedValue} </h2>
    </>
  )
}

//! as state changes whole component is re mount here app component is re mounted i.e all code run again 
export default App
