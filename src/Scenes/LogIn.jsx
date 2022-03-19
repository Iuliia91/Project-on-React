import React, { useContext, useState } from 'react'
import Server from 'api/server.instance'
import styled from 'styled-components'
import { userLoggedIn, userLoggedOut } from '../store/actions/userAction'
import { useDispatch } from 'react-redux'
import { ExampleOfMenue } from '../store/actions/exampleOfMenu'
import { globalApiAction } from '../store/selectors/globalApiSelector'
import { useSelector } from 'react-redux'
import ButtonOptions from 'Components/ButtonOptions'
import FormikInput from 'Components/formikFields/FormikInput'
import { Formik, Form, Field, useFormik } from 'formik'
const StyledLoginHolder = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  background: linear-gradient(to top left, powderblue, rgb(245, 215, 191, 0.9));
  /*background: #f5d7bf;*/

  .loginCard {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 400px;
    height: 300px;

    background-color: #ece9e0;
    border-radius: 30px;
    margin: 20px;
    border-radius: 5px;
    box-shadow: -40px 40px 30px rgba(0, 0, 0, 0.5);

    .button {
      text-align: center;
    }
    .cardHeader {
      width: 100%;
      height: 50px;
      padding: 10px 20px;
      box-sizing: border-box;
      background-color: ;
      font-size: 25px;
      text-align: center;
      line-height: 30px;
    }
  }
`

const LogIn = (props) => {
  const apiError = useSelector(
    (store) => store.globalApiStateReducer.appiError.message
  )
  const dispatch = useDispatch()

  return (
    <StyledLoginHolder>
      <div className={'loginCard'}>
        <div className={'cardHeader'}>Login</div>

        <Formik
          initialValues={{ email: 'sdfcsd@gmail.com', password: 'Zxcvbnm' }}
          validate={(formValues) => {
            const errorObj = {}
            let isValid = true
            const formFields = formValues.email && formValues.password
            if (!formFields) {
              isValid = false
              errorObj.email = 'Field the fields'
              errorObj.password = 'Field the fields'
            }

            return errorObj
          }}
          onSubmit={(formValues) => {
            dispatch(ExampleOfMenue())
            Server.post('/login', {
              email: formValues.email,
              password: formValues.password,
            })
              .then((response) => {
                dispatch(
                  userLoggedIn({
                    userName: response.data.user.userName,
                    email: response.data.user.email,
                    Gender: response.data.user.Gender,
                    userGrowth: response.data.user.userGrowth,
                    userWeigth: response.data.user.userWeigth,
                    userGoaldWeigth: response.data.user.userGoaldWeigth,
                    id: response.data.user.id,
                    userRoles: ['regularUser'],
                    isLoggedIn: response.data.accessToken,
                  })
                )
              })
              .catch((error) => {
                console.log('appi call catch', error)
              })
          }}
        >
          <Form>
            <FormikInput name="email" placeholder="email" />
            <FormikInput name="password" placeholder="password" />
            <div className="button">
              <ButtonOptions type="submit" textInsideButton={'Login'} />
            </div>
          </Form>
        </Formik>
      </div>
    </StyledLoginHolder>
  )
}

export default LogIn
