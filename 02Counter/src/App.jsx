
import { useState } from 'react'
import './App.css'

function App() {
  const [counter, setCounter] = useState(0);

  const incCounter = () => {
    if (counter < 20) setCounter(counter + 1);
    
  }

  const decCounter = () => {
    if (counter > 0) setCounter(counter - 1);
  }

  return (
    <>
      <h1>Chai Aur Code</h1>
      <h5>Counter Value: {counter}</h5>
      <button onClick={incCounter}>+1</button>
      <br /><br />
      <button onClick={decCounter}>-1</button>
    </>
  )
}

export default App
