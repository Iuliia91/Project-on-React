import React from 'react'
import { Routes, Route } from 'react-router-dom'
import AboutProject from 'Scenes/AboutProject'
import MainLayouts from 'Layouts/MainLayouts/MainLayouts'

const RootRouter = () => {
  return (
    <Routes>
      <Route path={'/'} element={<MainLayouts />} />
      <Route path={'/aboutproject'} element={<AboutProject />} />
    </Routes>
  )
}

export default RootRouter
