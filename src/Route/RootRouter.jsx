import React from 'react'
import { Routes, Route } from 'react-router-dom'
import AboutProject from 'Scenes/AboutProject'
import MainLayouts from 'Layouts/MainLayouts/MainLayouts'
import SecondMainLayouts from 'Layouts/SecondMainLayouts/SecondMainLayouts'
import Profil from 'Scenes/Propfil'
const RootRouter = () => {
  return (
    <Routes>
      <Route path={'/'} element={<MainLayouts />} />
      <Route path={'aboutproject'} element={<AboutProject />} />

      <Route path={'profil'} element={<SecondMainLayouts />}>
        <Route path={'profil/informstion'} element={<Profil />} />
      </Route>
    </Routes>
  )
}

export default RootRouter
