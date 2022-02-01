import React from 'react'
import { Routes, Route } from 'react-router-dom'
import AboutProject from 'Scenes/AboutProject'
import MainLayouts from 'Layouts/MainLayouts/MainLayouts'
import SecondMainLayouts from 'Layouts/SecondMainLayouts/SecondMainLayouts'
import Profil from 'Scenes/Propfil'
import Menu from 'Scenes/Menu'
import ListOfProducts from 'Scenes/ListOfProducts'
import CalorieCount from 'Scenes/CalorieCount'

const RootRouter = () => {
  return (
    <Routes>
      <Route path={'/'} element={<MainLayouts />} />
      <Route path={'aboutproject'} element={<AboutProject />} />

      <Route path={'/profil'} element={<SecondMainLayouts />}>
        <Route path={'informstion'} element={<Profil />} />
        <Route path={'menu'} element={<Menu />} />
        <Route path={'listofproducts'} element={<ListOfProducts />} />
        <Route path={'caloriecount'} element={<CalorieCount />} />
      </Route>
    </Routes>
  )
}

export default RootRouter
