import './App.css';
import "./components/color.css"
import Container from './components/Container';
import { useState } from 'react';

function App() {
  const [bgColor, setBgColor] = useState("black");

  const handelColorFromContainer = (color) => {
    console.log("color present in app: ", color);
    setBgColor(color);
  }
  return (
    <div 
    className='app'
    style={{
      backgroundColor: bgColor
    }}>
      <Container acceptColorInApp={handelColorFromContainer}></Container>
    </div>
  )
}

export default App
