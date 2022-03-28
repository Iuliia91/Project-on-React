import React, { useContext, useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import styled from 'styled-components'
import svg from 'assets/svg/Vector.svg'
const StyeldExampleMenu = styled.div`
  position: fixed;
  left: 0;
  top: 0;
  background-color: #ffffff;
  transition: 0.5s;
  transform: translateX(${(props) => props.activ});
  z-index: 99999;
  width: 50%;
  height: 600px;
  border-radiuce: 30px;
  // background-image: url(${svg});
`
const StyledMenuBlock = styled.div`
  padding-top: 40px;
  .user_menu {
    width: 200px;
    padding: 40px 25px;
    text-align: center;
    background: #ffffff;
    border: 2px solid rgba(255, 255, 255, 0.9);
    box-shadow: 0px 10px 32px rgba(131, 209, 96, 0.26);
    border-radius: 15px;
  }
  .user_menu button {
    padding: 8px;
    text-align: center;
    background: transparent;
    border: none;
  }
`

const MenuExample = (props) => {
  const [isVisible, seIsVisible] = useState(false)
  const [active, setActive] = useState('-100%')
  const data = useSelector((state) => state.exampleOfMenueReducer)
  const listOfMenu = data.listOFMenu

  const items = listOfMenu.find((item) => {
    if (item.calorie.min == data.caloriesAmountPerDay) {
      return item
    }
    return
  })
  const handleOpenExampleOfMenu = () => {
    seIsVisible(!isVisible)
  }

  const Menu = () => {
    return (
      <StyeldExampleMenu activ={active}>
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
