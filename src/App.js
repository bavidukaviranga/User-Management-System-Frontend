import React from 'react';
import './App.css';
import Home from './Components/Home/Home';
import { Route, Routes } from 'react-router';


function App() {

  return (
    <div>
      <Home/>
      <React.Fragment>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/mainhome" element={<Home/>}/>
        </Routes>
      </React.Fragment>
    </div>
  );
}

export default App;
