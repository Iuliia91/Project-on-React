import React, { useContext, useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import styled from 'styled-components'
import svg from 'assets/svg/Vector.svg'
import fruts from 'assets/svg/fruts.svg'
import ImigPear from 'Helpers/Pear/PearImg'
import branch from 'assets/svg/Branch.svg'
import lemon from 'assets/svg/lemon.svg'
import carrot from 'assets/svg/carrot.svg'
import onion from 'assets/images/Onion.png'
import cucumber from 'assets/images/Cucumber.png'
import OliverPict from 'assets/images/Onion.png'
const StyeldExampleMenu = styled.div`
  position: fixed;
  left: 0;
  bottom: 0;
  background: linear-gradient(158.25deg, #e1ecdc 27.9%, #ffffff 69.49%);
  box-shadow: 0px 15px 50px rgba(51, 114, 25, 0.2);
  border-radius: 15px;
  // background-color: #ffffff;
  transition: 0.5s;
  transform: translateX(${(props) => props.activ});
  z-index: 99999;
  width: 50%;
  margin-bottom: 20px;
  border-radius: 30px;
  padding-bottom: 40px;
  animation: move 1s linear alternate;
  overflow: hidden;
  @keyframes move {
    0% {
      bottom: 0;
      left: -100%;
    }
    100% {
      bottom: 0;
      left: 0;
    }
  }

  .titel {
    font-family: 'spartanmedium';
    font-size: 40px;
    padding-top: 30px;
    color: #569f36;
    font-weight: 600;
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
  .elips1 {
    position: absolute;
    width: 100px;
    height: 100px;
    left: 0px;
    top: 0px;
    background: linear-gradient(180.61deg, #98d67d 0.45%, #569f36 99.39%);
    //opacity: 0.7;
    filter: blur(100px);
    z-index: 9000;
  }
  .elips2 {
    position: absolute;
    width: 100px;
    height: 100px;
    right: 0px;
    bottom: 0px;
    background: linear-gradient(180.61deg, #98d67d 0.45%, #569f36 99.39%);
    //opacity: 0.7;
    filter: blur(100px);
    z-index: 9000;
  }
  .branch {
    opacity: 0.3;
    position: absolute;
    bottom: 50%;
    left: 0;
    width: 300px;
    z-index: -1;
  }

  .fruts {
    width: 300px;
    position: absolute;
    opacity: 0.2;
    right: -15%;
    bottom: 0;
    z-index: -1;
  }

  .lemon {
    position: absolute;
    opacity: 0.1;
    bottom: 30px;
    top: 50%;
    left: 50%;
    width: 100px;
  }
  .carrot {
    position: absolute;
    opacity: 0.2;
    // bottom: 30px;
    top: 72%;
    left: 35%;
    width: 200px;
  }
  @media (max-width: 1120px) {
    width: 45%;
    ul {
      padding: 0;
    }
  }
  @media (max-width: 860px) {
    width: 50%;
  }
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
        <div className="elips1"></div>
        <div className="elips2"></div>
        <img src={branch} className="branch" />
        <img src={fruts} className="fruts" />
        <img src={lemon} className="lemon" />
        <img src={carrot} className="carrot" />
        <img src={onion} className="onion" />
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
