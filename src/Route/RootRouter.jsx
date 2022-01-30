import React from 'react'
import { Routes, Route } from 'react-router-dom'
import AboutProject from 'Scenes/AboutProject'
import MainLayouts from 'Layouts/MainLayouts/MainLayouts'
import SecondMainLayouts from 'Layouts/SecondMainLayouts/SecondMainLayouts'

const RootRouter = () => {
  return (
    <Routes>
      <Route path={'/profil'} element={<SecondMainLayouts />}>
        <Route />
      </Route>
      <Route path={'/'} element={<MainLayouts />} />
      <Route path={'/aboutproject'} element={<AboutProject />} />
    </Routes>
  )
}

export default RootRouter
