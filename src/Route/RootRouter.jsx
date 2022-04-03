import React from 'react'
import { Routes, Route, Navigate } from 'react-router-dom'
import AboutProject from 'Scenes/AboutProject'
import MainLayouts from 'Layouts/MainLayouts/MainLayouts'
import SecondMainLayouts from 'Layouts/SecondMainLayouts/SecondMainLayouts'
import Profil from 'Scenes/Propfil'
import Menu from 'Scenes/menu/Menu'
import ListOfProducts from 'Scenes/ListOfProducts'
import CalorieCount from 'Scenes/calorieCountScenes/CalorieCount'
import LogIn from 'Scenes/LogIn'
import Registration from 'Scenes/Registration'
import { DIRECTION_TYPE } from './directionTypes'
import { useSelector } from 'react-redux'

const RootRouter = () => {
  const user = useSelector((state) => state.userReducer)

  const getUserStartPage = () => {
    if (user.isLoggedIn) {
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

      <Route path={DIRECTION_TYPE.about} element={<AboutProject />} />
      <Route path={DIRECTION_TYPE.login} element={getLoginpge()} />
      <Route
        path={DIRECTION_TYPE.registration}
        element={getRegistrationpge()}
      />
      <Route
        path={DIRECTION_TYPE.profile}
        element={renderForLoggedInUser(<SecondMainLayouts />)}
      >
        <Route path={DIRECTION_TYPE.information} element={<Profil />}></Route>

        <Route path={DIRECTION_TYPE.menu} element={<Menu />} />
        <Route
          path={DIRECTION_TYPE.listofproducts}
          element={<ListOfProducts />}
        />
        <Route path={DIRECTION_TYPE.caloriecount} element={<CalorieCount />} />
      </Route>
    </Routes>
  )
}

export default RootRouter
