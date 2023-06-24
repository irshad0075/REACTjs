import React, { useState } from 'react'
import { Route, Routes ,Navigate } from 'react-router-dom'
import Home from './pages/Home'
import Login from './pages/Login'
import Page404 from './pages/Page404'
import About from './pages/About'
import Contact from './pages/Contact'
import Signup from './pages/Signup'
import OurServices from './pages/OurServices'
import NavigationBar from './components/NavigationBar'
import FooterEnd from './components/FooterEnd'
import CategoryPage from './pages/CategoryPage'

function App() {
  const [user, setUser ] =useState(false)
  return (
    <>
      <NavigationBar />
{
  user 
  ?
  ( <Routes>
    <Route path="/" element={<Home />} />
 
    <Route path='/products' element={<About />} />
    <Route path='/contact' element={<Contact />} />
    <Route path='/product/category/:categoryName' element={<CategoryPage />} />
    <Route path='*' element={<Page404 />} />
  </Routes>)
  :
  ( <Routes>
    <Route path="/" element={<Home />} />
    {/* <Route path='/login' element={<Login />} /> */}
    <Route path='/signup' element={<Signup />} />
    <Route path='*' element={<Navigate to="/Login" replace={true} />} />
 
  </Routes>)
}
      <FooterEnd />
    </>
  )
}

export default App