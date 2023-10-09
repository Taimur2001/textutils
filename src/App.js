import React, { useState } from 'react';
import About from './components/About'; 
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import Alert from './components/Alert';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App() {
  const [mode, setMode] = useState('light');
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type,
    });
    setTimeout(() => {
      setAlert(null);
    }, 2200);
  };

  const toggleMode = () => {
    if (mode === 'dark') {
      setMode('light');
      document.body.style.backgroundColor = 'white';
      showAlert('Dark mode has been disabled', 'success');
    } else {
      setMode('dark');
      document.body.style.backgroundColor = '#051725';
      showAlert('Dark mode has been enabled', 'success');
    }
  };

  return (
    <>
      <BrowserRouter>
        <Navbar title="TextUtils" mode={mode} toggleMode={toggleMode} />
        <Alert alert={alert} />
        <div className="container my-3">

          <Routes>
          {/* {exact means exact path if we dont use exact then react uses partial matching. } */}
            { <Route exact path="/about" 
                element={<About mode={mode}/>} /> 
            }

            {<Route exact path="/"
                element={<TextForm showAlert={showAlert} heading="TextUtils - Word Counter, Character Counter, Remove Extra Spaces" mode={mode} />} />
            }
            

          </Routes> 
         
        </div>
      </BrowserRouter>
    </>
  );
}

export default App;

