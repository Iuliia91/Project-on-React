import React, { useContext, useState } from 'react'
import styled from 'styled-components'
import { faUser, faHome } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import ButtonOptions from 'Components/ButtonOptions'
import { ModalContext } from 'HOC/GlobalModalProvider'
import { Link, Outlet } from 'react-router-dom'
import img from 'assets/images/gfb.jpg'
import { exsampl } from 'store/actions/cardList'
import { CARD_LIST_ACTIONS } from 'store/actionTypes'
import { useDispatch, useSelector } from 'react-redux'
import { ApiRequest } from '../../api/ApiInstance'
import { textSelector } from 'store/selectors/textReducer'
import axios from 'axios'
const StyledInitialScenes = styled.div`
  background-repeat: no-repeat;
  position: absolute;
  height: 100%;
  width: 100%;
  background-color: rgb(223, 230, 236);
  background-image: url(${img});
  overflow-x: hidden;
  .main {
    max-width: 1200px;
    position: fixed;
    display: block;
    right: 0;
    width: 60%;
  }

  .main_content {
    width: 100%;
    position: absolute;
    padding-top: 250px;
    text-align: center;
  }

  .main_header {
    display: flex;
    position: absolute;
    top: 0;
    right: 0;
    justify-content: space-around;
    align-items: center;
  }
`

const InitialLayouts = (props) => {
  const [nameP, setNameP] = useState('')

  const hendleName = (Event) => {
    setNameP(Event.target.value)
  }
  const getName = () => {
    return dispatch({ type: CARD_LIST_ACTIONS.add, payload: nameP })
  }

  return (
    <StyledInitialScenes>
      <div className="main">
        <div className="main_content">
          <div className="main_header">
            <Link to={'/login'}>
              <ButtonOptions
                className="button button__singIn"
                textInsideButton={'LogIn'}
                iconOptions={<FontAwesomeIcon icon={faHome} />}
              />
            </Link>
            <Link to={'/registration'}>
              <ButtonOptions
                className="button button__registration"
                textInsideButton={'Registr'}
                modalText={
                  <div>
                    Privet iz tenei
                    <button>Yes</button>
                  </div>
                }
                iconOptions={<FontAwesomeIcon icon={faUser} />}
              />
            </Link>
          </div>
          <p>Помоги своему телу обрести легкость. </p>
          <p>
            Мы разработали крутую программу питания. Ты не будешь чувствовать
            голод, а вес будет снижаться.
          </p>

          <p>Ты можешь, мы тебе поможем!</p>

          <Link to={'/aboutproject'}>
            <ButtonOptions
              className="button button__read-more"
              textInsideButton={'Read more'}
            />
          </Link>
        </div>
      </div>
    </StyledInitialScenes>
  )
}

export default InitialLayouts
