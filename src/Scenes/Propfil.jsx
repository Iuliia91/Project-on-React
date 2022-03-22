import React, { useContext, useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { usersWeigth, amountOfLosedWeigth } from 'store/actions/userAction'
import MenuExample from 'Helpers/menuExample/MenuExample'
import DropDownMenu from 'Components/dropDownMenu/DropDownMenu'
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

width:90%;
margin:auto;
aling-item:center;
 
  font-family: 'Lucida Sans Unicode', 'Lucida Grande', 
  border: 16px solid #ece9e0;
  padding-top:20px;

main{
   display: flex;
   flex-direction:column;
}
  .block1{
    display:flex;
    flex-direction:row;
    justify-content:space-between;
    margin-bottom:30px;
    width:100%;
  }
  .user_name{
    porition:absplute;
    box-shadow: inset 100px 100px 30px;
    box-shadow: -5px 5px 40px rgba(0, 0, 0, 0.5);
    margin: 0 auto;
    background:rgb(239,235,235);
      margin-right:20px;
     width:60%;
     padding:30px 50px;
     margin:auto;
    margin-bottom:20px;
     border-radius: 20px;
  }
  
  .block2{
    display:flex;
    justify-content:space-between;
    margin-bottom:30px;

  }

  .block3{
    display:flex;
    justify-content:space-between;
  }
  .user_name_text{
  text-align: center;
  }

  .user_weigth_data{
  text-align: center;
  }

  .user_information{
  
    box-shadow: inset 100px 100px 30px;
    box-shadow: -5px 5px 40px rgba(0, 0, 0, 0.5);
    
    background:rgb(239,235,235);

    width:40%;
    padding:20px 40px;
   text-alingh:center;
     margin:auto;
  border-radius: 20px;
  }
  .user_menu{
 
    width:40%;
    box-shadow: inset 100px 100px 30px;
    box-shadow: -5px 5px 40px rgba(0, 0, 0, 0.5);
  padding-top:64px;
    background:rgb(239,235,235);
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

    width:300px;
    border-radius: 30px;
    background:rgb(239,235,235);
  }

  .user_sport{
   
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
      <main>
        <div className="block1">
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
                <ButtonOptions
                  handleClick={hendleAddWeigthValue}
                  className="button button_add"
                  textInsideButton={'+Weigth'}
                />
              </div>
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
          <div className="user_schedule">
            {' '}
            <Schedule weigthToday={user.userWeigthToday} />
          </div>
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
