import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Pagecomp from './Page1/Pagecomp/Pagecomp';
import DisplayFilter from './DisplayFilter/DisplayFilter';
import User from './Page2/User';
import Priority from './Page3/Priority';

function App() {
  return (
    <Router>
      <div className='mainpage'>
        <DisplayFilter />
        <Routes>
          <Route path="/status" element={<Pagecomp />} />
          <Route path="/user" element={<User />} />
          <Route path="/priority" element={<Priority />} />
         
           
        </Routes>
      </div>
    </Router>
  );
}

export default App;






