import React from "react";
import Home from './components/Home'
import {Routes, Route} from 'react-router-dom'
import About from "./components/About";



function App() {
  return (
    <div>
      <Routes>
      <Route path = {'/marvel-app'} element={<Home />} />
      <Route path = {'/:id'} element={<About />} />
      </Routes>
    
      
    </div>
  );
}

export default App;
