import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Saidbar from './Components/Saidbar'
import CountryPage from './pages/CountryPage'
import CitisPage from './pages/CitisPage'
import LoginPage from './pages/LoginPage'
import DestinatiyonPage from './pages/DestinatiyonPage'
import HotelsPage from './pages/HotelsPage'
import ToursPage from './pages/ToursPage'

const App = () => {
  return (
  <BrowserRouter>
      <Routes>
        <Route path='/' element={<LoginPage />} />
        <Route element={ <Saidbar /> }  >
          <Route path='admin/country' element={<CountryPage />} />
          <Route path='admin/citis' element={<CitisPage />} /> 
          <Route path='admin/destinatiyon'element={<DestinatiyonPage />} />
           <Route path='admin/hotels' element={<HotelsPage />} />
           <Route path='admin/tours' element={<ToursPage />} />
        </Route>
      </Routes>
  </BrowserRouter>
  )
}

export default App
