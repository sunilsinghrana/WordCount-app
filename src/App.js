import logo from './logo.svg';
import React from 'react';
import './App.css';
import Navbar from './Components/Navbar';
import TextForm from './Components/TextForm';
import ImageSlider from './Components/ImageSlider';
import { useState } from 'react';
import Alert from './Components/Alert';
import About from './Components/About';
import { Routes, Route, Link } from "react-router-dom";
function App(props) {
  const [mode, setMode] = useState('light')
  const [alert, setAlert] = useState(null)

  const showAlert = (message, type)=> {
    setAlert({
      msg : message,
      type : type
    })
    setTimeout(() => {
      setAlert(null)
    }, 1500);
  }
  
  const toggleMode = () => {
    if (mode === 'light') {
      setMode('dark')
      document.body.style.backgroundColor = '#423F3E'
      document.body.style.color = 'white'
      showAlert("Dark Mode has been enabled", "success")
    } else {
      setMode('light')
      document.body.style.backgroundColor = 'white'
      document.body.style.color = 'black'
      showAlert("Light Mode has been enabled", "success")
    }
  }

  const bluegMode = () => {
    if (mode === 'light') {
      setMode('dark')
      document.body.style.backgroundColor = '#395B64'
      document.body.style.color = 'white'
      showAlert("BlueBlack Mode has been enabled", "success")
    } else {
      setMode('light')
      document.body.style.backgroundColor = 'white'
      document.body.style.color = 'black'
      showAlert("Light Mode has been enabled", "success")
    }
  }
  return (
    <>
      <Navbar title={"WordCount"} mode={mode} toggleMode={toggleMode} bluegMode={bluegMode}/>
      <Alert  alert={alert}/>
      <Routes>
        <Route path='/' element= {<TextForm showAlert={showAlert} toggleMode={toggleMode}  mode={mode}/>} />
        < Route path='/About' element= {<About  mode={mode}/>} />
      </Routes>
    </>
  );
}

export default App;
