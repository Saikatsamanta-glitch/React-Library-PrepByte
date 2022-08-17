import React from 'react';
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import NavScrollExample from './Components/Navbar1';
import Home from './Pages/Home';
import './index.css';
function App() {
  return (
    <BrowserRouter>
    <NavScrollExample/>
        <Routes>
          <Route path='/' element={<Home/>} /> 
        </Routes>
    </BrowserRouter>
  );
}
export default App;
