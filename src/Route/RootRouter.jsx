import React from 'react'
import { Routes, Route } from 'react-router-dom'
import AboutProject from 'Scenes/AboutProject'
import MainLayouts from 'Layouts/MainLayouts/MainLayouts'
import InitialScenes from 'Scenes/InitialScenes'

const RootRouter = () => {
  return (
    <Routes>
      <Route path={'/main'} element={<MainLayouts />} />

      <Route path={'/main/initialscenes'} element={<InitialScenes />} />
      <Route
        path={'/main/initialscenes/aboutproj'}
        element={<AboutProject />}
      />
    </Routes>
  )
}

export default RootRouter
