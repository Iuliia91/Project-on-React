import React from 'react'
import { Routes, Route } from 'react-router-dom'
import AboutProject from 'Scenes/AboutProject'
import MainLayouts from 'Layouts/MainLayouts/MainLayouts'
import InitialScenes from 'Scenes/InitialScenes'
import Navigation from '../Components/Navigation'

const RootRouter = () => {
  return (
    <Routes>
      <Route path={'/'} element={<MainLayouts />}>
        <Route path={'/fgghhfvbvf'} element={<InitialScenes />} />
        <Route path={'/fgghhfvbvf/fgghh'} element={<AboutProject />} />
      </Route>
    </Routes>
  )
}

export default RootRouter
