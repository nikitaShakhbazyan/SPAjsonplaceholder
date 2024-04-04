import React from 'react'
import { Route,Routes } from 'react-router-dom'
import NotFound from './pages/NotFound'
import Layout from './Layout'
import Details from './pages/Details'

const AppRoutes = () => {
  return (
    <Routes>
        <Route path='/' element={<Layout/>}/>
        <Route path='/details/:id' element={<Details/>}/>
        <Route path='*' element={<NotFound/>}/>
    </Routes>
  )
}

export default AppRoutes