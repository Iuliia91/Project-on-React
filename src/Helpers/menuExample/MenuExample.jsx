import React, { useContext, useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import styled from 'styled-components'

const StyeldExampleMenu = styled.div`
  position: absolute;
  top: 450px;
  right: 160px;
  margin: 0;
  width: 30%;
  margin: auto;

  .user_menu {
    padding: 0;
    margin: 0;
  }
  .main {
    background: yellow;
    padding: 40px;
  }
  button {
    position: absolute;
    background: transparent;
    margin: auto;
    border: none;
    font-size: 20px;
    top: 10px;
    right: 20px;
  }
  button:hover {
    transform: scale(1.5);
  }
  header {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    border-bottom: 3px solid black;
  }
  p {
    margin: 0;
    margin-top: 30px;
    text-align: cente;
    font-size: 26px;
    line-height: 1.5;
  }
  .titel {
    margin-bottom: 5px;
    text-align: cente;
    font-size: 26px;
    line-height: 1.5;
  }
  .menu {
    list-style: none;
    font-family: ;
    padding: 0;
  }

  .menu ul {
    padding: 0;
  }
  .menu li {
    margin-bottom: 5px;
    border-bottom: 2px #404b51 dotted;
    font-size: 26px;
    line-height: 1.5;
  }

  .menu li span:nth-child(odd) {
    padding-right: 100px;
  }
  .menu li span:nth-child(even) {
    float: right;
    padding-left: 6px;
    color: black;
  }
  .menu span {
    position: relative;
    bottom: -7px;
  }
`
const StyledMenuBlock = styled.div`
  width: 600px;

  .user_menu {
    padding: 50px;
    text-align: center;
  }
  .user_menu button {
    text-align: center;
  }
`

const MenuExample = (props) => {
  const [isVisible, seIsVisible] = useState(false)
  const data = useSelector((state) => state.exampleOfMenueReducer)
  const listOfMenu = data.listOFMenu
  console.log(listOfMenu)
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
        <button className="button" onClick={() => seIsVisible(false)}>
          X
        </button>
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
