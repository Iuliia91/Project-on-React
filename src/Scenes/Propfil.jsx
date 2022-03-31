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
import CirculProgressBar from 'Components/ProgressBar/circularProgressBar/CirculProgressBar'
import svg from 'assets/svg/Vector.svg'
import svgsecond from 'assets/svg/Vector.svg'
import imgsalat from '../assets/images/Salat.png'
import ImigAvocado from 'Helpers/Avacado/ImigAvocado'
import svg2 from 'assets/svg/sheet.svg'
import svg3 from 'assets/svg/sheet.svg'
import ImigCarrot from 'Helpers/Carrot/Carroy'
const StyledProfil = styled.div`
  background-color: rgb(134, 189, 114, 0.2);

  position: relative;
  height: 100%;
  width: 100%;

  .pict {
    position: absolute;
    opacity: 0.25;
  }
  .pict1 {
    position: absolute;
    opacity: 0.25;
    top: 480px;
    right: 50px;
    transform: matrix(-1, 0, 0, 1, 0, 0);
  }
  .content {
    display: flex;
    flex-direction: row;
    width: 92%;
    margin: auto;

    justify-content: space-between;
  }

  .block2 {
    position: relative;
    margin-top: 200px;
    width: 45%;
  }
  .block1 {
    //width: 45%;
    margin-top: 10%;
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
    color: #545454;
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
    color: #545454;
    margin: 0 0 10px 0;
    text-align: center;
  }

  .user_schedule {
    position: relative;
    // background: #ffffff;
    // z-index: 8000;
    width: 100%;
    border-radius: 20px;
    margin: 10% auto;
    text-align: center;
  }

  .user_schedule img:nth-of-type(1) {
    position: absolute;
    left: -90px;
    right: ;
    top: -100px;
    bottom: -0.04%;
    transform: rotate(20deg);
    z-index: -1;
    opacity: 0.25;
  }

  .user_schedule img:nth-of-type(2) {
    opacity: 0.25;
    position: absolute;
    //left: -90px;
    right: -87px;
    top: -100px;
    bottom: -0.04%;
    transform: matrix(-0.95, 0.97, 0.5, 0.59, 0, 0);
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

  .user_information {
    position: relative;
    background: linear-gradient(158.25deg, #e1ecdc 27.9%, #ffffff 90.49%);
    box-shadow: 0px 15px 50px rgba(51, 114, 25, 0.2);
    border-radius: 15px;
    //height: 100px;
    text-align: center;
    width: 100%;
  }
  .user_suggestion {
    padding: 40px;
    width: 90%;
  }
  .user_suggestion p {
    font-family: 'spartanmedium';
  }

  .imgSalat {
    position: absolute;
    top: -130px;
    left: -20px;
    z-index: 1000;
  }

  .block {
    position: fixed;
    left: 48%;
    top: 405;
  }
  .block3 {
    display: flex;
    flex-direction: row;
    text-align: center;
    justify-content: space-around;
  }

  .circle_progressBar {
    padding-top: 20px;
    width: 250px;
  }

  @media (max-width: 1150px) {
    .content {
      display: flex;
      flex-direction: column;
    }
    .block1 {
      display: flex;
      flex-direction: row;
      margin: 10px;
    }
    .user_name {
      margin: auto;
      margin-left: 5px;
    }
    .user_schedule {
      width: 400px;
      margin: 40px auto;
    }
    .user_schedule img {
      display: none;
    }
    .user_name_text {
      font-weight: 600;
      font-size: 35px;
      line-height: 45px;
    }
    .user_weigth_today {
      font-size: 25px;
      line-height: 45px;
    }
    .block2 {
      width: 95%;
      display: flex;
      flex-direction: row;
      margin: 20px 10px;
      justify-content: space-between;
    }
    .user_information {
      width: 35%;
    }
    .user_suggestion {
      //margin-top: 30px;
      width: 90%;
      padding: 100px 0 0;
      text-aling: center;
    }

    .block3 {
      width: 60%;
    }
    .imgSalat {
      width: 150px;
      top: -40px;
    }
  }

  @media (max-width: 850px) {
    .user_schedule {
      margin: 20px 0;
      width: 100%;
    }
    .block1 {
      display: flex;
      flex-direction: column;
      margin: 10px 50px;
    }
    .block2 {
      width: 95%;
      display: flex;
      flex-direction: row;
    }
    .user_name {
      margin: 0;
    }
    .user_suggestion {
      padding: 30px 10px 10px;
    }
    .user_information {
      // width: 50%;
    }
    .block3 {
      width: 50%;
    }
    .circle_progressBar {
      padding: 0;
    }
    .imgSalat {
      width: 80px;
    }
  }

  @media (max-width: 620px) {
    .imgSalat {
      display: none;
      width: 100px;
    }
    .user_weigth_today {
      font-size: 18px;
      line-height: 20px;
    }
    .elips {
      display: none;
    }
    .user_suggestion {
      padding: 0;
    }
    .circle_progressBar {
      width: 50%;
    }
    .block3 {
      display: flex;
      flex-direction: column;
    }
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
        <p>{'Not enough body weight'}</p>
        <p>We recommend eating a 3000 calories peer day</p>
        <p>Dring water min-2.2L </p>
      </div>
    )
  } else if (indexBody >= 18.6 && indexBody <= 25) {
    dispatch(amountCaloriesPerDay(1800, 2200))
    return (
      <div className="user_suggestion">
        <p>{'Your weigth is norma'}</p>
        <p>We recommend eating a 1800 -2200 calories peer day </p>
        <p>Dring water min-2.2L </p>
      </div>
    )
  } else if (indexBody >= 25.1 && indexBody <= 40) {
    dispatch(amountCaloriesPerDay(1200))
    return (
      <div className="user_suggestion">
        <p>{'You have overweight '}</p>
        <p>We recommend eating a 1200 calories peer day</p>
        <p>Dring water min-2.2L </p>
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
          <button className="button_close" onClick={() => setModalContext()}>
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
      <img className="pict" src={svg} />
      <img className="pict1" src={svgsecond} />
      <div className="block">
        <ImigAvocado />
        {/*
        <ImigCarrot />*/}
      </div>
      <div className="content">
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
            <img src={svg2} />
            <img src={svg3} />

            <div>
              <Schedule weigthToday={user.userWeigthToday} />
            </div>
          </div>
        </div>
        <div className="block2">
          <div className="user_information">
            <img className="imgSalat" src={imgsalat} />
            <DataIndex />
          </div>
          <div className="block3">
            <div className="circle_progressBar">
              <CirculProgressBar />
            </div>
            <MenuExample />
          </div>
        </div>
      </div>
    </StyledProfil>
  )
}

export default Profil
