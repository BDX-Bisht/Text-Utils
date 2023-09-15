import './App.css';
// import About from './components/About';
import Alert from './components/Alert';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import React, { useState } from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  const [mode, setMode] = useState('light')
  const [alert, setAlert] = useState(null)
  const [btnSet, setbtnSet] = useState('primary')

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type,
    })
    setTimeout(() => {
      setAlert(null);
    }, 2000);
  }


  const toggleBlueMode = () => {
    if (mode === "light" || mode === 'danger' || mode === 'dark') {
      setMode("primary")
      showAlert("Blue theme has been enabled.", "success")
      setbtnSet('primary')
      document.body.style.backgroundColor = "rgb(31 29 74)"
      document.body.style.color = "white"
    } else {
      setMode("light")
      showAlert("Blue theme has been disabled.", "success")
      document.body.style.backgroundColor = "white"
      document.body.style.color = "rgb(31 29 74)"
    }
  }

  const toggleRedMode = () => {
    if (mode === "light" || mode === 'dark' || mode === 'primary') {
      setMode("danger")
      showAlert("Danger theme has been enabled.", "success")
      setbtnSet('danger')
      document.body.style.backgroundColor = "rgb(98 19 27)"
      document.body.style.color = "white"
    } else {
      setMode("light")
      setbtnSet('primary')
      showAlert("Danger theme has been disabled.", "success")
      document.body.style.backgroundColor = "white"
      document.body.style.color = "rgb(31 29 74)"
    }
  }

  const toogleGreyMode = () => {
    if (mode === "light" || mode === 'primary' || mode === 'danger') {
      setMode("dark")
      setbtnSet('dark')
      showAlert("Grey theme has been enabled.", "success")
      document.body.style.backgroundColor = "black"
      document.body.style.color = "white"
    } else {
      setMode("light")
      setbtnSet('primary')
      showAlert("Grey theme has been disabled.", "success")
      document.body.style.backgroundColor = "white"
      document.body.style.color = "rgb(31 29 74)"
    }
  }

  return (
    <>
      <BrowserRouter>
        <Navbar title="TextUtils" mode={mode} toggleBlueMode={toggleBlueMode} toggleRedMode={toggleRedMode} toogleGreyMode={toogleGreyMode} />
        <Alert alert={alert} />
        <div className="container my-4">
          <Routes>
            <Route exact path="/" element={<TextForm mode={mode} showAlert={showAlert} heading="TextUtils - Word Counter, Character Counter, Remove Extra Spaces " btnSet={btnSet} />} />
            <Route exact path="*" element={<TextForm mode={mode} showAlert={showAlert} heading="TextUtils - Word Counter, Character Counter, Remove Extra Spaces " btnSet={btnSet} />} />
          </Routes>
        </div>
      </BrowserRouter>
    </>
  );
}

export default App;
