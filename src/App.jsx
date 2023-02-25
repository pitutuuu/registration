import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Sign from './pages/Sign';
import Login from './pages/Login';
import Layout from './pages/Layout';

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />} >
          <Route path="login" element={<Login />} />
          <Route path="sign" element={<Sign />} />
        </Route>        
      </Routes>
    </>
  );
}

export default App;
