//import logo from './logo.svg';
import "./App.css";
import NavBar from "./Components/NavBar";
import TextForms from "./Components/TextForms";
import React, { useState } from "react";
import Alert from "./Components/Alert";
import About from "./Components/About";
import Home from "./Components/Home";
import {
  Routes,
  Route,
 BrowserRouter as Router
} from "react-router-dom";



function App() {
  const [mode, setMode] = useState("light");
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({ msg: message, type: type });
    setTimeout(() => {
      setAlert(null);
    }, 1000);
  }

  const modeToggle = () => {
    if (mode === "light") {
      setMode("dark");
      document.body.style.backgroundColor = "#03506F";
      showAlert("Dark mode is enabled", "success");
    }
    else {
      setMode("light");
      document.body.style.backgroundColor = "white";
      showAlert("Light mode is enabled", "success");
    }
  }


  return (
    <>

      <Router>

        <NavBar home="Home" about="About Developer" search="Search" modeF={modeToggle} mode={mode} />
        <Alert alert={alert} />
        <div className="container my-4">
        <Routes>
          
            <Route exact path="/Text_Analyzer" element={<TextForms setAlert={setAlert} heading="TextAnalyzer" mode={mode} />} />

            <Route exact path="/about" element={<About mode={mode} />} />
            <Route exact path="/home" element={<Home mode={mode}/>}/>
          
        </Routes>
        </div>
      
      </Router>

    </>


  );
}

export default App;
