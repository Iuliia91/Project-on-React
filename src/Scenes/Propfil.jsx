import React, { useContext, useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { usersWeigth, amountOfLosedWeigth } from 'store/actions/userAction'
import MenuExample from 'Components/menuExample/MenuExample'
import ButtonOptions from 'Components/ButtonOptions'
import styled from 'styled-components'
import { Formik, Form } from 'formik'
import FormikInput from 'Components/formikFields/FormikInput'
import { amountCaloriesPerDay } from 'store/actions/exampleOfMenu'
import { ModalContext } from 'HOC/GlobalModalProvider'
import ProgressBar from 'Components/ProgressBar/ProgressBar'
import Schedule from 'Components/Schedule/Schedule'
import Server from 'api/server.instance'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faDumbbell } from '@fortawesome/free-solid-svg-icons'
import CirculProgressBar from 'Components/ProgressBar/circularProgressBar/CirculProgressBar'
import svg from 'assets/svg/Vector.svg'

import ImigAvocado from 'Helpers/Avacado/ImigAvocado'
import svg2 from 'assets/svg/sheet.svg'
import ImigCarrot from 'Helpers/Carrot/Carroy'
const StyledProfil = styled.div`
  background-color: rgb(134, 189, 114, 0.2);
  background-repeat: no-repeat;
  position: relative;
  height: 100%;

  // width: 90%;

  /* width:90%;
margin:auto;
aling-item:center;
 
  font-family: 'Lucida Sans Unicode', 'Lucida Grande', 
  border: 16px solid #ece9e0;
  padding-top:20px;*/

  .block {
    opasiti: 0.33;
  }
  .image {
    position: absolute;
    color: #85b472;
    z-index: -1;
    opacity: 0.3;
    right: 0;
    top: -0.15%;
    bottom: 0.06%;
    //background: #85b472;

    mix-blend-mode: soft-light;
    transform: matrix(-1, 0, 0, 1, 0, 0);
  }
  main {
    display: flex;
    flex-direction: row;
  }
  .block1 {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    margin-bottom: 10px;
    padding-bottom: 28px;
    width: 100%;
  }
  /* .user_name {
    porition: absplute;
    box-shadow: inset 100px 100px 30px;
    box-shadow: -5px 5px 40px rgba(0, 0, 0, 0.5);
    margin: 0 auto;
    background: rgb(239, 235, 235);
    margin-right: 20px;
    width: 60%;

    margin: auto;
    margin-bottom: 20px;
    border-radius: 20px;
  }*/

  /*
  @media (max-width: 1457px) {
    .block3 {
      display: flex;
      justify-content: center;
      flex-direction: column;
      margin: auto;
    }
    .block3 > div {
      margin-bottom: 20px;
    }
  }*/

  /*.user__information-data {
    display: flex;
    flex-direction: column;
  }*/

  .user__information-data {
    text-aling: center;

    //background-image: url(${svgAvacado});
    background-repeat: no-repeat;
    z-index: -1;
    //background: rgba(134, 180, 114, 25%);
  }
  .user_name_text {
    font-family: 'spartanmedium';
    font-weight: 600;
    font-size: 55px;
    color: #86b472;
    margin: 0;
    line-height: 85px;
    text-align: center;
  }
  .user_weigth_today {
    font-family: 'spartanmedium';
    font-weight: 300;
    font-size: 35px;
    color: #86b472;
    margin: 0;
    line-height: 85px;
    text-align: center;
  }
  .user_weigth_today snap {
    font-weight: 500;
  }
  .user_weigth-differance {
    font-family: 'spartanmedium';
    font-weight: 300;
    font-size: 20px;
    color: #86b472;
    margin: 0 0 10px 0;
    text-align: center;
  }
  .user_schedule {
    position: relative;
    background: #ffffff;
    // z-index: 8000;
    width: 470px;
    border-radius: 20px;
    margin: 30px 100px;
  }

  .user_schedule img:nth-of-type(1) {
    position: absolute;
    left: -90px;
    right: ;
    top: -100px;
    bottom: -0.04%;
    transform: rotate(20deg);
    z-index: -1;
    opacity: 0.7;
  }

  /*   .user_schedule div {
    position: absolute;
    top: 0;
    left: 0;
  }

  .user_schedule img:nth-of-type(2) {
    position: absolute;
    left: -90px;
    // right: -200px;
    top: -180px;
    bottom: -0.04%;
    transform: matrix(-0.59, 0.81, 0.81, 0.59, 0, 0);
    z-index: -1;

     z-index: -1;
  }
  .elips {
    position: absolute;
    width: 200px;
    height: 200px;
    left: 100px;
    top: 100px;
    background: #86b472;
    opacity: 0.6;
    filter: blur(130px);
    z-index: 9000;
  }
`

const StyledModalProfilForm = styled.div`
  margin-bottom: 50px;
  .close_element {
    position: absolute;
    top: 20px;
    right: 20px;
  }

  .button_close {
    border: none;
    background-color: rgb(236, 233, 224);
  }

  header {
    margin: 30px;
    font-size: 30px;
    text-align: center;
    color: black;
  }
  .formik_button {
    margin-top: 20px;
    text-align: center;
  }
`

const DataIndex = (props) => {
  const user = useSelector((store) => store.userReducer)
  const dispatch = useDispatch()
  const t = Math.pow(user.userGrowth, 2) / 10000

  const indexBody = user.userWeigth / t

  if (indexBody >= 16 && indexBody <= 18.5) {
    dispatch(amountCaloriesPerDay(3000))
    return (
      <div className="user_suggestion">
        {'Not enough body weight'}
        <p>'We recommend eating a 3000 calories peer day '</p>
      </div>
    )
  } else if (indexBody >= 18.6 && indexBody <= 25) {
    dispatch(amountCaloriesPerDay(1800, 2200))
    return (
      <div className="user_suggestion">
        <p>{'Your weigth is norma'}</p>
        <p>'We recommend eating a 1800 -2200 calories peer day '</p>
      </div>
    )
  } else if (indexBody >= 25.1 && indexBody <= 40) {
    dispatch(amountCaloriesPerDay(1200))
    return (
      <div className="user_suggestion">
        <p>{'You have overweight '}</p>
        <p>We recommend eating a 1200 calories peer day</p>
      </div>
    )
  }
}

const Profil = () => {
  const user = useSelector((store) => store.userReducer)
  const setModalContext = useContext(ModalContext)

  const data = useSelector((state) => state.exampleOfMenueReducer)
  const listOfMenu = data.listOFMenu

  const dispatch = useDispatch()

  const hendleAddWeigthValue = () => {
    let day = new Date()
    const dayValue = day.getDate()

    setModalContext(
      <StyledModalProfilForm>
        <div className="close_element">
          <button
            className="button_close"
            onClick={() => {
              setModalContext()
            }}
          >
            X
          </button>
        </div>
        <header>Add new weigth</header>
        <Formik
          initialValues={{
            weigthValue: '',
            day: dayValue,
          }}
          validate={(formValues) => {
            const errorObj = {}

            if (!formValues.weigthValue) {
              errorObj.weigthValue = 'Fill the fields'
            } else if (!formValues.weigthValue.replace(/\D+/g, '')) {
              errorObj.weigthValue = 'Write the number'
            }

            return errorObj
          }}
          onSubmit={(formValues, { resetForm }) => {
            dispatch(usersWeigth(formValues))

            dispatch(amountOfLosedWeigth(formValues.weigthValue))
            Server.post('/historyOfWeigth', {
              weigthValue: formValues.weigthValue,
              day: formValues.day,
            }).then((response) => {})
            resetForm()
            setModalContext()
          }}
        >
          <Form>
            <FormikInput
              name="weigthValue"
              type="text"
              placeholder="Weigth today"
            />
            <div className="formik_button">
              <ButtonOptions
                type="submit"
                className="button button_add"
                textInsideButton={'Add new weigth'}
              />
            </div>
          </Form>
        </Formik>
      </StyledModalProfilForm>
    )
  }

  return (
    <StyledProfil>
      <div className="block">
        <img className="image" src={svg}></img>
      </div>

      <div className="block">
        <ImigAvocado />
        <ImigCarrot />
      </div>

      <main>
        <div className="block1">
          <div className="user_name">
            <div className="user__information-data">
              <p className="user_name_text">
                Hi, <snap>{user.userName}</snap>
              </p>
              <div className="user_weigth-information">
                <p className="user_weigth_today">
                  {' '}
                  Your weigth today - <snap>{user.userWeigthToday}</snap>
                </p>
                <p className="user_weigth-differance">
                  {user.amountOfDroppedWeigth}
                </p>
              </div>
              <ProgressBar procent={user.procent} />
              <div className="button">
                <ButtonOptions
                  handleClick={hendleAddWeigthValue}
                  className="button button_add"
                  textInsideButton={'+Weigth'}
                />
              </div>
            </div>
          </div>

          <div className="user_schedule">
            <div className="elips"></div>
            <img className="svg2_1" src={svg2} />
            <img className="svg2" src={svg2} />
            <div>
              <Schedule weigthToday={user.userWeigthToday} />
            </div>
          </div>
        </div>
        <div className="block2">
          <div className="user_information">
            {' '}
            <DataIndex />
          </div>
          <MenuExample />
        </div>
        <div className="block3">
          <div className="circle_progressBar">
            <CirculProgressBar />
          </div>

          <div className="user_sport">
            <FontAwesomeIcon
              icon={faDumbbell}
              style={{ width: 150, height: 150, color: '#e0c412' }}
            />
          </div>
        </div>
      </main>
    </StyledProfil>
  )
}

export default Profil
