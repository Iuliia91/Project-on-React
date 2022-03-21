import React, { useState } from 'react'

import styled from 'styled-components'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faUserCircle,
  faCalendarAlt,
  faDumbbell,
} from '@fortawesome/free-solid-svg-icons'
import { Link, NavLink, Outlet } from 'react-router-dom'
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
    height: 100%;
    background: linear-gradient(
      to top left,
      powderblue,
      rgb(245, 215, 191, 0.9)
    );

    margin-left: 160px;
    padding: 0px 10px;
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
          Профиль
        </NavLink>

        <NavLink to={'menu'} className={'dscf'} activeclassname={'active'}>
          Меню
        </NavLink>
        <NavLink
          to={'listofproducts'}
          className={'dscf'}
          activeclassname={'active'}
        >
          Список продуктов
        </NavLink>
        <NavLink
          to={'caloriecount'}
          className={'dscf'}
          activeclassname={'active'}
        >
          Подсчет калорийности блюда
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
