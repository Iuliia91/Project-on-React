import React, { useContext, useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import styled from 'styled-components'
import svg from 'assets/svg/Vector.svg'
const StyeldExampleMenu = styled.div`
  position: absolute;
  background-color: rgb(134, 189, 114, 25%);
  /*max-width: 1920px;
  //height: 1123px;
  left: 0px;
  top: 0px;
  background-image: url(${svg});*/
`
const StyledMenuBlock = styled.div`
  width: 90%;
  // background-color: rgb(134, 189, 114, 25%);
  .user_menu {
    padding: 50px;
    text-align: center;
  }
  .user_menu button {
    padding: 8px;
    text-align: center;
    background: linear-gradient(90deg, #dff0c6 0%, #ffffff 77.6%);
    border: 2px solid rgba(255, 255, 255, 0.9);
    box-shadow: 0px 10px 32px rgba(131, 209, 96, 0.26);
    border-radius: 56px;
  }
`

const MenuExample = (props) => {
  const [isVisible, seIsVisible] = useState(false)
  const data = useSelector((state) => state.exampleOfMenueReducer)
  const listOfMenu = data.listOFMenu

  const items = listOfMenu.find((item) => {
    if (item.calorie.min == data.caloriesAmountPerDay) {
      return item
    }
    return
  })
  const handleOpenExampleOfMenu = () => {
    seIsVisible(true)
  }

  const Menu = () => {
    return (
      <StyeldExampleMenu>
        <div className="menu_button">
          {' '}
          <button className="button" onClick={() => seIsVisible(false)}>
            X
          </button>
        </div>

        <div className="main">
          <header>
            <p className="titel">Menu</p>
            <p>
              {items.calorie.min} - {items.calorie.max}
            </p>
          </header>

          <ul className="menu">
            <li>
              <span>Breakfast</span>
              <span>{items.breakfast}cal</span>
            </li>
            <li>
              <span>Snack</span>
              <span>{items.snack}cal</span>
            </li>
            <li>
              <span>Lunch</span>
              <span>{items.lunch}cal</span>
            </li>
            <li>
              <span>Snack</span>
              <span>{items.snack}cal</span>
            </li>
            <li>
              <span>Dinner</span>
              <span>{items.dinner}cal</span>
            </li>
          </ul>
        </div>
      </StyeldExampleMenu>
    )
  }
  return (
    <StyledMenuBlock>
      <div className="user_menu">
        <button onClick={handleOpenExampleOfMenu}>Example of menu</button>
      </div>
      {isVisible && <Menu />}
    </StyledMenuBlock>
  )
}

export default MenuExample
