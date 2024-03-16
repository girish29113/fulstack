import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Forgot from './assets/Auth/Forgot';
import Signin from './assets/Auth/Signin';
import Signup from './assets/Auth/SignUp';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Signin />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/forgot" element={<Forgot />} />
     
      </Routes>
    </Router>
  );
};

export default App;