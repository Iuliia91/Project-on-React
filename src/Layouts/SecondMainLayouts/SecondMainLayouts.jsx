import React, { useState } from 'react'

import styled from 'styled-components'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faUserCircle,
  faCalendarAlt,
  faDumbbell,
} from '@fortawesome/free-solid-svg-icons'
import { Link, NavLink, Outlet } from 'react-router-dom'
import svg from 'assets/svg/Vector.svg'
const StyledNavigation = styled.div`
  background-repeat: no-repeat;
  position: absolute;
  height: 100%;
  width: 100%;

  // max-width: 1420px;
  //height: 1123px;

  .sidenav {
    height: 100%;
    width: 170px;
    position: fixed;
    z-index: 1;
    top: 0;
    left: 0;
    background: rgb(239, 235, 235);

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
    //background-color: rgb(199, 211, 222);
  }
  .active {
    background-color: rgb(248, 192, 132, 0.4);
    //background-color: rgb(199, 211, 222);
  }
  .main {
    width: calc(80% -170px);
    margin-left: 170px;
    //height: 100%;
  }
`

const SecondMainLayouts = (props) => {
  const [click, setClick] = useState()

  const g = (Event) => {
    if (Event.target.className('gt ')) {
      setClick('gt active')
    }
  }

  return (
    <StyledNavigation>
      <nav className="sidenav">
        <NavLink
          to={'/profil/information'}
          className={'dscf'}
          activeclassname={'active'}
        >
          <FontAwesomeIcon icon={faUserCircle} />
          Me
        </NavLink>
        <NavLink
          to={'caloriecount'}
          className={'dscf'}
          activeclassname={'active'}
        >
          Create your recipe
        </NavLink>
        <NavLink to={'menu'} className={'dscf'} activeclassname={'active'}>
          Menu
        </NavLink>
        <NavLink
          to={'listofproducts'}
          className={'dscf'}
          activeclassname={'active'}
        >
          Список продуктов
        </NavLink>

        <a href="#">
          <FontAwesomeIcon icon={faCalendarAlt} />
        </a>
      </nav>
      <div className="main">
        <Outlet />
      </div>
    </StyledNavigation>
  )
}

export default SecondMainLayouts
