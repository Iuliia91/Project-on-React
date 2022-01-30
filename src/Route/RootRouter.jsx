import React from 'react'
import { Routes, Route } from 'react-router-dom'
import AboutProject from 'Scenes/AboutProject'
import MainLayouts from 'Layouts/MainLayouts/MainLayouts'
import InitialScenes from 'Scenes/InitialScenes'
import Navigation from 'Components/Navigation'

const RootRouter = () => {
  return (
    <Routes>
      <Route path={'/'} element={<MainLayouts />} />
      <Route path={'/fgghh'} element={<AboutProject />} />
    </Routes>
  )
}

export default RootRouter
