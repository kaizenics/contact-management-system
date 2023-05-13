import { Route, Routes } from 'react-router-dom';
import React from 'react';
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Home from "./pages/Home";
import Manager from "./pages/Manager";
import Form from "./pages/Form";
import About from "./pages/About";
import Update from "./pages/Update";
import './index.css';

function App() {
  return (
   <>
    <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/Signup" element={<Signup />} />
        <Route path="/Home" element={<Home />} />
        <Route path="/Manager" element={<Manager />} />
        <Route path="/Form" element={<Form />} />
        <Route path="/About" element={<About />} />
        <Route path="/Update" element={<Update />}/>
    </Routes>
   </>
  );
}

export default App;
