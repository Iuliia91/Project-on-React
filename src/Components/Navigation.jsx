import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUserCircle, faCalendarAlt } from '@fortawesome/free-solid-svg-icons'
import styled from 'styled-components'

const StyledNavigation = styled.div`
  .sidenav {
    height: 100%;
    width: 160px;
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

  @media screen and (max-height: 450px) {
    .sidenav {
      padding-top: 15px;
    }
    .sidenav a {
      font-size: 18px;
    }
  }
`

const Navigation = () => {
  return (
    <StyledNavigation>
      <div className="sidenav">
        <a href="#">
          <FontAwesomeIcon icon={faUserCircle} />
          Профиль
        </a>

        <a href="#">Меню</a>
        <a href="#">Список продуктов</a>
        <a href="#">Подсчет калорийности блюда</a>
        <a href="#">
          <FontAwesomeIcon icon={faCalendarAlt} />
        </a>
      </div>
    </StyledNavigation>
  )
}

export default Navigation
