import React from 'react';
import Button from './Button';
import "./color.css"


function Container({acceptColorInApp}) {
  
  const handelColorFromButton = (color) => {
    
    acceptColorInApp(color)
  }
  
  return (
    <div className='container'>
    <Button colorName="Red" acceptColorInContainer={handelColorFromButton}/>
    <Button colorName="Green" acceptColorInContainer={handelColorFromButton}/>
    <Button colorName="Blue" acceptColorInContainer={handelColorFromButton}/>
    <Button colorName="Olive" acceptColorInContainer={handelColorFromButton}/>
    <Button colorName="Gray" acceptColorInContainer={handelColorFromButton}/>
    <Button colorName="Yellow" acceptColorInContainer={handelColorFromButton}/>
    <Button colorName="Pink" acceptColorInContainer={handelColorFromButton}/>
    <Button colorName="Purple" acceptColorInContainer={handelColorFromButton}/>
    <Button colorName="Lavender" acceptColorInContainer={handelColorFromButton}/>
    <Button colorName="White" acceptColorInContainer={handelColorFromButton}/>
    </div>
  )
}

export default Container