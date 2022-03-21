import React, { useContext, useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { usersWeigth, amountOfLosedWeigth } from 'store/actions/userAction'
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
const StyledProfil = styled.div`
width:92%;
margin:auto;
aling-item:center;
  display: grid;
  
  grid-template-columns: repeat(7, 1fr);
  
 grid-row-gap:50px;
  font-family: 'Lucida Sans Unicode', 'Lucida Grande', 
  border: 16px solid #ece9e0;
  padding-top:40px;
 
  .user_name{
    box-shadow: inset 100px 100px 30px;
    box-shadow: -5px 5px 40px rgba(0, 0, 0, 0.5);
    margin: 0 auto;
    background:rgb(239,235,235);

width:100%;

 grid-column: 1/4;
 grid-row:1/2;
 padding:30px 50px;
 margin:auto;
  border-radius: 20px;
  }
  
  .user_name_text{
  text-align: center;
  }

  .user_weigth_data{
  text-align: center;
  }

  .user_information{
   
    grid-column: 4/6;
 grid-row:1/2;
    box-shadow: inset 100px 100px 30px;
    box-shadow: -5px 5px 40px rgba(0, 0, 0, 0.5);
    margin: 0 auto;
    background:rgb(239,235,235);

width:100%;

 
 padding:30px 50px;
 margin:auto;
  border-radius: 20px;
  }
  
  .user_name_text{
  text-align: center;
  }
  
  .button{
  text-align: center;
    margin-top:20px;
  
  }

  
  button{
    border: none;  
    background: transparent;
  }

  button:hover{
    transform: scale(1.2);
    background: rgb(199, 211, 222)
  }
  .user_line{
    display:flex;
    
  }

  .ProgressBar{
    display:flex;
    flex-direction:column;
    justify-content: center;
  }
  .user_weigth_data{
    display:flex;
    flex-direction:column;
    justify-content: center;
  }

  .user_weigth_today,.user_weigth-differance{
    text-align: center;
  }

  .user_weigth_today snap{
    font-size:30px;
    color : blue;
    font-weight:bold;
  }

  .user_schedule{
    width:500px;
    grid-column:4/5;
    grid-row:3;
    background: rgb(239, 235, 235);
    border-radius: 20px;
  }

  .circle_progressBar{
   grid-column:1/3;
   
   grid-row:3 ;
   
   
    
    width:300px;
    border-radius: 30px;
    background:rgb(239,235,235);
  }

  .user_sport{
    grid-column:6/7;
    grid-row:3;
   
  
    padding:100px 90px;
   
    border-radius: 30px;
    background:rgb(239,235,235);
  }
  .user_suggestion{
    display:flex;
    flex-direction:column;
    justify-content: center;
    text-align: center;
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
const StyeldExampleMenu = styled.div`
  margin: 0;

  button {
    position: absolute;
    background: transparent;
    border: none;
    font-size: 20px;
    top: 10px;
    right: 20px;
  }
  button:hover {
    transform: scale(1.5);
  }
  header {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    border-bottom: 3px solid black;
  }
  p {
    margin: 0;
    margin-top: 30px;
    text-align: cente;
    font-size: 26px;
    line-height: 1.5;
  }
  .titel {
    margin-bottom: 5px;
    text-align: cente;
    font-size: 26px;
    line-height: 1.5;
  }
  .menu {
    list-style: none;
    font-family: ;
    padding: 0;
  }

  .menu ul {
    padding: 0;
  }
  .menu li {
    margin-bottom: 5px;
    border-bottom: 2px #404b51 dotted;
    font-size: 26px;
    line-height: 1.5;
  }

  .menu li span:nth-child(odd) {
    padding-right: 100px;
  }
  .menu li span:nth-child(even) {
    float: right;
    padding-left: 6px;
    color: black;
  }
  .menu span {
    position: relative;
    bottom: -7px;
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
  const [isVisible, seIsVisible] = useState(true)
  const data = useSelector((state) => state.exampleOfMenueReducer)
  const listOfMenu = data.listOFMenu

  const dispatch = useDispatch()

  const handleOpenExampleOfMenu = () => {
    const items = listOfMenu.find((item) => {
      if (item.calorie.min == data.caloriesAmountPerDay) {
        return item
      }
      return
    })

    setModalContext(
      <StyeldExampleMenu>
        <button className="button" onClick={() => setModalContext()}>
          X
        </button>
        <header>
          <p className="titel">Menu</p>
          <p>
            {items.calorie.min} - {items.calorie.max}
          </p>
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
            console.log(formValues.day)
            if (formValues.day % 2 != 0) {
              let arr = []
              arr.push(formValues)
              console.log(arr)
              console.log(arr[arr.length - 1])
            }
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
      <div className="user_name">
        <div className="user__information-data">
          {' '}
          <p className="user_name_text">Hi, {user.userName}</p>
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
            {' '}
            <ButtonOptions
              handleClick={hendleAddWeigthValue}
              className="button button_add"
              textInsideButton={'+Weigth'}
            />
          </div>
        </div>
      </div>
      <div className="user_schedule">
        {' '}
        <Schedule weigthToday={user.userWeigthToday} />
      </div>
      <div className="circle_progressBar">
        <CirculProgressBar />
      </div>
      <div className="user_information">
        {' '}
        <DataIndex />
        <button onClick={handleOpenExampleOfMenu}>Example of menu</button>
      </div>
      <div className="user_sport">
        <FontAwesomeIcon
          icon={faDumbbell}
          style={{ width: 150, height: 150, color: '#e0c412' }}
        />
      </div>
    </StyledProfil>
  )
}

export default Profil
