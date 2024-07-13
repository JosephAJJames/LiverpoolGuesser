import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Homepage from './homepage';
import startButton from './start_button';


function App() {
  return (
    <>
      <Homepage/>
      <startButton/>
    </>
  )
}

export default App;
