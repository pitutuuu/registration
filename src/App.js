import React from 'react'
import { Routes, Route } from 'react-router-dom'
function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Login />} >
          <Route path="sign" element={<Sign />} />
        </Route>        
      </Routes>
    </div>
  );
}

export default App;
