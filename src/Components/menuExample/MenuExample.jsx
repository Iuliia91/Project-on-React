import React, { useContext, useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import styled from 'styled-components'
import svg from 'assets/svg/Vector.svg'
import fruts from 'assets/svg/fruts.svg'
import ImigPear from 'Helpers/Pear/PearImg'

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
  border-radius: 30px;

  .titel {
    font-family: 'spartanmedium';
    font-size: 40px;
  }
  li {
    list-style-type: none;
    display: flex;
    justify-content: space-around;
  }
  li span {
    line-height: 35px;
    font-family: 'spartanmedium';
    font-size: 20px;
  }
  li:first-of-type span {
    margin-left: -7px;
  }

  li span:
`
const StyledMenuBlock = styled.div`
  margin-top: 10px;
  padding: 40px 0;
  position: relative;
  .user_menu {
    width: 200px;
    padding: 30px 25px;
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

  @media (max-width: 1470px) {
    .user_menu {
      width: 70px;
    }
  }

  @media (max-width: 850px) {
    padding: 0;
  }

  @media (max-width: 650px) {
    .user_menu {
      width: 100%;
      padding: 0;
    }
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
    seIsVisible(!isVisible)
  }

  const Menu = () => {
    return (
      <StyeldExampleMenu>
        <img src={fruts} />
        <ImigPear />
        <header>
          <p className="titel">
            Menu {items.calorie.min}cal {items.calorie.max}
          </p>
          <p></p>
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
