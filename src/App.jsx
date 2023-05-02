import React from 'react'
import { Route, Routes } from 'react-router-dom'
import NavBar from './components/Nav'
import VisaCard1 from './Pages/VisaCard1'
import VisaCard2 from './Pages/VisaCard2'
import RobotWalk from './Pages/RobotWalk'

function App() {
  return (
    <>
      <NavBar />
      <Routes>
        <Route path='/' element={<VisaCard1 />} />
        <Route path='/VisaCard2' element={<VisaCard2 />} />
        <Route path='/RobotWalk' element={<RobotWalk />} />
      </Routes>
    </>
  )
}

export default App