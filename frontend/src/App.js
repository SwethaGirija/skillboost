// App.js
import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Login from './components/Login/Login';
import Signup from './components/Login/Signup'
import Position from './components/pages/Position';
import About from './components/Home/About'
import Course from './components/Course/Course'
import Python from './components/Course/Python'
import Html from './components/Course/Html'
import Css from './components/Course/Css'
import Javascript from './components/Course/Javascript'
import C from './components/Course/C'
import Reactconcept from './components/Course/Reactconcept'
import  Mysql from './components/Course/Mysql'
import  Nojs from './components/Course/Nojs'
import  Services from './components/services/Services'
// Assuming your Signup component file is in the specified path
import './App.css';

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Login/>}/>
      <Route path='/signup' element={<Signup/>}/>
      <Route path='/position' element={<Position/>}/>   
      <Route path='/about' element={<About/>}/>   
      <Route path='/course' element={<Course/>}/> 
      <Route path='/Python' element={<Python/>}/>   
      <Route path='/HTML' element={<Html/>}/>    
      <Route path='/CSS' element={<Css/>}/>  
      <Route path='/JavaScript' element={<Javascript/>}/>  
      <Route path='/C' element={<C/>}/>  
      <Route path='/react' element={<Reactconcept/>}/>  
      <Route path='/mysql' element={<Mysql/>}/>  
      <Route path='/Node' element={<Nojs/>}/>  
      <Route path='/services' element={<Services/>}/>  

      {/* <Route path='home' element={<Home/>}/> */}
      </Routes>
      </BrowserRouter>
 
  );
}

export default App;
