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

  .sidenav {
    height: 100%;
    width: 170px;
    position: fixed;
    z-index: 1;
    top: 0;
    left: 0;
    background: rgba(134, 180, 114, 0.25);

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
    background-color: #569F3;
  }
  .active {
    background: linear-gradient(180.61deg, #98d67d 0.45%, #569f36 99.39%);
    box-shadow: 0px 19px 42px rgba(134, 180, 114, 0.4);
    border-radius: 10px;
  }
  .main {
    width: calc(80% -170px);
    margin-left: 170px;
    //height: 100%;
  }
  @media (max-width: 1150px) {
    .sidenav {
      width: 120px;
    }
    .main {
      margin-left: 120px;
    }
  }
  @media (max-width: 850px) {
    .sidenav {
      width: 80px;
    }
    .main {
      // width: calc(80% -80px);
      margin-left: 80px;
    }
    .sidenav a {
      padding: 10px 5px 7px 8px;
      text-decoration: none;
      font-size: 18px;
      color: black;
      display: block;
      text-align: center;
    }
  }
  @media (max-width: 427px) {
    .sidenav {
      width: 50px;
    }
    .main {
      margin-left: 50px;
    }
    .sidenav a {
      padding: 10px 2px;
      text-decoration: none;
      font-size: 18px;
      color: black;
      display: block;
      text-align: center;
    }
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
          {' '}
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
      </nav>
      <div className="main">
        <Outlet />
      </div>
    </StyledNavigation>
  )
}

export default SecondMainLayouts
