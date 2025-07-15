
import './App.css';
import './styles/custom.css';
import './styles/theme-toggler.css';

import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import Navbar from './components/Navbar';
import {Home} from './components/Home';
import About from './components/About';
import NoteState from './context/notes/NoteState';
import ThemeState from './context/theme/ThemeState';
import Alert from './components/Alert';
import ThemeToggler from './components/ThemeToggler';

import Signup from './components/Signup';
import Login from './components/Login';
import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

function App() {
  const [alert,setAlert] = useState(null);

  const showAlert = (message,type)=>{
    setAlert({
      msg:message,
      type: type
    })
    setTimeout(() => {
      setAlert(null);
    }, 2000);
  }

  return (
    <>
      <ThemeState>
        <NoteState>
          <Router>
            <Navbar />
            <Alert alert={alert}/>
            <div className="container">
              <Routes>
                <Route exact path='/' element={<Home showAlert={showAlert}/>} />
                <Route exact path='/about' element={<About />} />
                <Route exact path='/login' element={<Login showAlert={showAlert}/>} />
                <Route exact path='/signup' element={<Signup showAlert={showAlert}/>} />
              </Routes>
            </div>
            <ThemeToggler />
          </Router>
        </NoteState>
      </ThemeState>
    </>
  );
}

export default App;
