import './App.css';
// import About from './components/About';
import Navbar from './components/Navbar';
import React, { useState } from 'react'
import TextForm from './components/TextForm';
import Alert from './components/Alert';

// import {
//   BrowserRouter as Router,
//   Switch,
//   Route
// } from "react-router-dom";

function App() {
  const [mode, setMode] = useState('light');
  const [alert, setMyAlert] = useState(null)

  const showAlert = (message, type)=>{
    setMyAlert({
      msg: message,
      type: type
    })
    setTimeout(() => {
      setMyAlert(null);
    },1500);
  }

  const removeBodyClasses = ()=>{
    document.body.classList.remove('bg-light')
    document.body.classList.remove('bg-dark')
    document.body.classList.remove('bg-primary')
    document.body.classList.remove('bg-danger')
    document.body.classList.remove('bg-success');
    document.body.classList.remove('bg-warning');
  }
  
  const toggleMode = (cls)=>{
    removeBodyClasses();
    setMode(cls);
    document.body.classList.add('bg-'+cls)
    showAlert(cls+" mode has been enable","success")
    document.title = 'TextUtils - '+cls;
  }    

  return (
    <>
    {/* <Router> */}
      <Navbar title="MyTextUtils" aboutText="About TextUtils" mode={mode} toggleMode={toggleMode}/><hr/>
      <Alert alert={alert}/>
      <div className="container my-3">
        {/* <Switch>
          <Route exact path="/about">
            <About mode={mode}/>
          </Route>
          <Route exact path="/"> */}
            <TextForm heading="TextUtils - Word Counter, Charecter Counter" mode={mode} showAlert={showAlert}/>
          {/* </Route>
        </Switch> */}
      </div>
      {/* </Router> */}
    </>
  );
}

export default App;
