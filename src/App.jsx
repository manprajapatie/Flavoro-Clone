import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './pages/Home' 
import Success from './pages/Success'

function App() {
  return (
    <>
        <BrowserRouter>

        //Outlet add nahi kiya he isliye Routes ke sath handle kar rhe he / Outlet handle kiya hota to Route ke sath hi handle karna padta
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='success' element={<Success/>}/>
          <Route path='success' element={<Success/>}/>
        </Routes>
        </BrowserRouter>
    </>
  )
}

export default App
