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
import Registration from 'Scenes/Registration'
import { useSelector } from 'react-redux'

const RootRouter = () => {
  const user = useSelector((state) => state.userReducer)

  const getUserStartPage = () => {
    if (user.isLoggedIn) {
      console.log(user.isLoggedIn)
      return <Navigate to={'/profil/information'} />
    } else {
      return <Navigate to={'/login'} />
    }
  }

  const renderForLoggedInUser = (component) => {
    if (user.isLoggedIn) {
      return component
    } else {
      return <Navigate to={'/login'} />
    }
  }
  const getLoginpge = () => {
    if (user.isLoggedIn) {
      return getUserStartPage()
    } else {
      return <LogIn />
    }
  }

  const getRegistrationpge = () => {
    if (user.isLoggedIn) {
      return getUserStartPage()
    } else {
      return <Registration />
    }
  }

  return (
    <Routes>
      <Route index element={<MainLayouts />} />

      <Route path={'aboutproject'} element={<AboutProject />} />
      <Route path={'login'} element={getLoginpge()} />
      <Route path={'registration'} element={getRegistrationpge()} />
      <Route
        path={'/profil'}
        element={renderForLoggedInUser(<SecondMainLayouts />)}
      >
        <Route path={'information'} element={<Profil />} />
        <Route path={'menu'} element={<Menu />} />
        <Route path={'listofproducts'} element={<ListOfProducts />} />
        <Route path={'caloriecount'} element={<CalorieCount />} />
      </Route>
    </Routes>
  )
}

export default RootRouter
