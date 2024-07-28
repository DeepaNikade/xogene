import React from 'react';
import './App.css'
import { BrowserRouter, Router,Route, Routes, Navigate } from 'react-router-dom'
import DrugSearch from './pages/DrugSearch'
import DrugInfo from './pages/DrugInfo'

function App() {
  

  return (
   
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Navigate to="/drugs/search"/>}/>
     
      <Route path='/drugs/search' element={<DrugSearch/>}/>
      <Route path='/drugs/:drug_name' element={<DrugInfo/>}/>
      <Route path='*' element={<div>404 Not found</div>}/>

    </Routes>
    </BrowserRouter>
  )
}

export default App;
