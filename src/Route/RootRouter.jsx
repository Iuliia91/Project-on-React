import React from 'react'
import { Routes, Route, Navigate } from 'react-router-dom'
import AboutProject from 'Scenes/AboutProject'
import MainLayouts from 'Layouts/MainLayouts/MainLayouts'
import SecondMainLayouts from 'Layouts/SecondMainLayouts/SecondMainLayouts'
import Profil from 'Scenes/Propfil'
import Menu from 'Scenes/Menu'
import ListOfProducts from 'Scenes/ListOfProducts'
import CalorieCount from 'Scenes/CalorieCount'
import LogIn from 'Scenes/LogIn'
import { useSelector } from 'react-redux'

const RootRouter = () => {
  const user = useSelector((state) => state.textReducer)
  const renderForLoggedInUser = (conponent) => {
    if (user.isLoggedIn) {
      return component
    } else {
      return <Navigate to={'/login'} />
    }
  }

  const getUserStartPage = () => {
    if (user.isLoggedIn) {
      return <Navigate to={<Profil />} />
    } else {
      return <Navigate to={<MainLayouts />} />
    }
  }
  return (
    <Routes>
      <Route path={'/'} element={<MainLayouts />} />
      <Route path={'aboutproject'} element={<AboutProject />} />
      <Route path={'login'} element={<LogIn />} />

      <Route
        path={'/profil'}
        element={renderForLoggedInUser(<SecondMainLayouts />)}
      >
        <Route path={'informstion'} element={getUserStartPage(<Profil />)} />
        <Route path={'menu'} element={<Menu />} />
        <Route path={'listofproducts'} element={<ListOfProducts />} />
        <Route path={'caloriecount'} element={<CalorieCount />} />
      </Route>
    </Routes>
  )
}

export default RootRouter
