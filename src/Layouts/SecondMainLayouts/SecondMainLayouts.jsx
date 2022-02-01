import React from 'react'
import Navigation from 'Components/Navigation'
import styled from 'styled-components'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUserCircle, faCalendarAlt } from '@fortawesome/free-solid-svg-icons'
import { Link, NavLink } from 'react-router-dom'
const StyledNavigation = styled.div`
  background-repeat: no-repeat;
  position: absolute;
  height: 100%;
  width: 100%;

  .sidenav {
    height: 100%;
    width: 170px;
    position: fixed;
    z-index: 1;
    top: 0;
    left: 0;
    background-color: rgb(223, 230, 236);
    overflow-x: hidden;
  }

  .sidenav a {
    padding: 20px 10px 15px 16px;
    text-decoration: none;
    font-size: 25px;
    color: black;
    display: block;
    text-align: center;
  }

  .sidenav a:hover {
    background-color: rgb(199, 211, 222);
  }

  .main {
    height: 100%;
    width: 100%;
    background-color: rgb(199, 211, 222);
    margin-left: 160px;
    padding: 0px 10px;
  }
`

const SecondMainLayouts = (props) => {
  return (
    <StyledNavigation>
      <nav className="sidenav">
        <Link to={'/profil/informstion'}>
          <FontAwesomeIcon icon={faUserCircle} />
          Профиль
        </Link>

        <Link to={'menu'}>Меню</Link>
        <Link to={'listofproducts'}>Список продуктов</Link>
        <Link to={'caloriecount'}>Подсчет калорийности блюда</Link>
        <a href="#">
          <FontAwesomeIcon icon={faCalendarAlt} />
        </a>
      </nav>
      <div className="main"></div>
    </StyledNavigation>
  )
  /* return (
    <StyledNavigation>
      <div>
        <Navigation />
      </div>
      <div className="main"> {props.children} </div>
    </StyledNavigation>
  )*/
}

export default SecondMainLayouts
