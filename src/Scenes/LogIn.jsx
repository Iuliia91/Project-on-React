import React, { useContext, useState } from 'react'
import Server from 'api/server.instance'
import styled from 'styled-components'
import { userLoggedIn, userLoggedOut } from '../store/actions/userAction'
import { useDispatch } from 'react-redux'
import { globalApiAction } from '../store/selectors/globalApiSelector'
import { useSelector } from 'react-redux'
import ButtonOptions from 'Components/ButtonOptions'
import FormikInput from 'Components/formikFields/FormikFields'
import { Formik, Form, Field, useFormik } from 'formik'
const StyledLoginHolder = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;

  .loginCard {
    width: 400px;
    height: 300px;
    background-color: ${(props) => props.theme.infoCardBackgroundColor};
    margin: 20px;
    border-radius: 5px;
    .cardHeader {
      width: 100%;
      height: 50px;
      padding: 10px 20px;
      box-sizing: border-box;
      background-color: ${(props) => props.theme.accentBackgroundColor};
      font-size: 25px;
      line-height: 30px;
      color: ${(props) => props.theme.accentTextColor};
      border-top-left-radius: 5px;
      border-top-right-radius: 5px;
    }
    .cardBody {
      padding: 10px 20px;
      box-sizing: border-box;
      color: ${(props) => props.theme.appBaseFontColor};
    }
    .cardFooter {
      padding: 10px 20px;
      box-sizing: border-box;
      display: flex;
      align-items: center;
      justify-content: space-between;
    }
  }
`

const LogIn = (props) => {
  const apiError = useSelector(
    (store) => store.globalApiStateReducer.appiError.message
  )

  const [email, setEmail] = useState('ulapru@gmail.com')
  const [password, setPassword] = useState('Zxcvbnm')
  const dispatch = useDispatch()
  const handleSubmitForm = () => {}
  return (
    <StyledLoginHolder>
      <div className={'loginCard'}>
        <div className={'cardHeader'}>Login</div>

        <Formik
          initialValues={{ email: 'ulapru@gmail.com', password: 'Zxcvbnm' }}
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
                    userHeigth: response.data.user.userHeigth,
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
            <ButtonOptions type="submit" textInsideButton={'Login'} />
          </Form>
        </Formik>
      </div>
    </StyledLoginHolder>
  )
}

export default LogIn
