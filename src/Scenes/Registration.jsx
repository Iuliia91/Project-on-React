import React, { useState } from 'react'
import Server from 'api/server.instance'
import styled from 'styled-components'
import ButtonOptions from 'Components/ButtonOptions'
import { useDispatch } from 'react-redux'
import { userLoggedIn, userLoggedOut } from '../store/actions/userAction'

import FormikInput from 'Components/formikFields/FormikInput'
import { Formik, Form } from 'formik'
const StyledRegistrationHolder = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  background: #f5d7bf;
  * {
    box-sizing: border-box;
  }
  .form {
    position: relative;
    max-width: 400px;
    margin: 50px auto 0;
    background: #ece9e0;
    border-radius: 30px;
    box-shadow: -40px 40px 30px rgba(0, 0, 0, 0.5);
  }

  .form-text {
    padding: 15px 50px;
    border-bottom: 1px solid #f69a73;
    font-size: 40px;
  }

  .button {
    text-align: center;
  }

  .input {
    display: block;
    width: 100%;
    padding: 0 20px;
    margin-bottom: 10px;
    //background: #e9eff6;
    line-height: 40px;
    border-bottom: 2px solid #e9eff6;
    border-width: 0;
    border-radius: 20px;
    font-family: 'Roboto', sans-serif;
  }

  .form-text p {
    margin-top: 0;
    font-family: 'Roboto', sans-serif;
    font-weight: 500;
    font-size: 24px;
    color: #707981;
  }
`
const initialData = {
  userName: '',
  userWeigth: '',
  userGoaldWeigth: '',
  email: '',
  password: '',
}

const Registration = () => {
  const dispatch = useDispatch()

  function validateEmail(email) {
    const re =
      /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/
    return re.test(String(email).toLowerCase())
  }
  return (
    <StyledRegistrationHolder>
      <div className="form">
        <p className="form-text">Registration</p>
        <Formik
          initialValues={initialData}
          validate={(formValues) => {
            const errorObj = {}
            let isValid = true

            if (!formValues.userName) {
              isValid = false
              errorObj.userName = 'Fill the fields'
            } else if (!formValues.userWeigth) {
              errorObj.userWeigth = 'Fill the fields'
            } else if (!formValues.userWeigth.replace(/\D+/g, '')) {
              errorObj.userWeigth = 'Write the number'
            } else if (!formValues.userGoaldWeigth) {
              errorObj.userGoaldWeigth = 'Fill the fields'
            } else if (!formValues.userGoaldWeigth.replace(/\D+/g, '')) {
              errorObj.userGoaldWeigth = 'Write the number'
            } else if (!validateEmail(formValues.email)) {
              errorObj.email = 'Write the correct email'
            }

            return errorObj
          }}
          onSubmit={(formValues, { resetForm }) => {
            console.log(formValues)
            Server.post('/register', {
              email: formValues.email,
              password: formValues.password,
              userName: formValues.userName,
              userGrowth: formValues.userGrowth,
              userWeigth: formValues.userWeigth,
              userGoaldWeigth: formValues.userGoaldWeigth,
            })
              .then((response) => {
                console.log(response)
                dispatch(
                  userLoggedIn({
                    userName: response.data.user.userName,
                    Gender: response.data.user.Gender,
                    userGrowth: response.data.user.userGrowth,
                    userWeigth: response.data.user.userWeigth,
                    userGoaldWeigth: response.data.user.userGoaldWeigth,
                    id: response.data.user.id,
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
            <div className="input">
              <FormikInput
                name="userName"
                type="text"
                placeholder="Write your name"
              />
            </div>
            <div className="input">
              <FormikInput
                name="userGrowth"
                type="text"
                placeholder="Write your growth"
              />
            </div>
            <div className="input">
              <FormikInput
                name="userWeigth"
                type="text"
                placeholder="Your weigth"
              />
            </div>
            <div className="input">
              {' '}
              <FormikInput
                name="userGoaldWeigth"
                type="text"
                placeholder="Your weight goal"
              />
            </div>
            <div className="input">
              <FormikInput name="password" type="text" placeholder="password" />
            </div>

            <div className="input">
              <FormikInput name="email" type="text" placeholder="Your email" />
            </div>

            <div className="button">
              <ButtonOptions
                type="submit"
                className="button button__registration"
                textInsideButton={'Registrated'}
              />
            </div>
          </Form>
        </Formik>
      </div>
    </StyledRegistrationHolder>
  )
}

/*const Registration = () => {
  const [userInfromation, setUserInformation] = useState(initialData)
  const [isLogin, setIsLogin] = useState(false)
  const dispatch = useDispatch()

  const isFilledFields =
    userInfromation.userName &&
    userInfromation.Gender &&
    userInfromation.userHeigth &&
    userInfromation.userWeigth &&
    userInfromation.userGoaldWeigth
  const handleRadioValu = (e) => {
    if (e.target) {
      setUserInformation((prevState) => ({
        ...prevState,
        Gender: e.target.value,
      }))
    }
  }
  const handleSubmitForm = (e) => {
    e.preventDefault()
  }
  return (
    <StyledRegistrationHolder>
      <form onSubmit={handleSubmitForm}>
        <section>
         // <input
            onChange={(e) =>
              setUserInformation((prevState) => ({
                ...prevState,
                userName: e.target.value,
              }))
            }
            placeholder={'Write your name'}
            value={userInfromation.userName}
          />
        </section>

        <section>
          <label>
            Female
            <input
              value="Female"
              name="gender"
              type="radio"
              onClick={handleRadioValu}
            />
          </label>
          <label>
            Male
            <input
              value="Male"
              name="gender"
              type="radio"
              onClick={handleRadioValu}
            />
          </label>
        </section>
        <section>
          //<input
            onChange={(e) => {
              setUserInformation((prevState) => ({
                ...prevState,
                userHeigth: e.target.value,
              }))
            }}
            placeholder={'Write your height'}
            value={userInfromation.userHeigth}
          />
        </section>
        <section>
         // <input
            onChange={(e) => {
              setUserInformation((prevState) => ({
                ...prevState,
                userWeigth: e.target.value,
              }))
            }}
            placeholder={'Your weigth'}
            value={userInfromation.userWeigth}
          />
        </section>
        <section>
          <input
            onChange={(e) => {
              setUserInformation((prevState) => ({
                ...prevState,
                userGoaldWeigth: e.target.value,
              }))
            }}
            placeholder={'Your weight goal'}
            value={userInfromation.userGoaldWeigth}
          />
        </section>
        <section>
          <input
            onChange={(e) => {
              setUserInformation((prevState) => ({
                ...prevState,
                password: e.target.value,
              }))
            }}
            placeholder={'password'}
            value={userInfromation.password}
          />
        </section>
        <section>
          <input
            onChange={(e) => {
              setUserInformation((prevState) => ({
                ...prevState,
                email: e.target.value,
              }))
            }}
            placeholder={'email'}
            value={userInfromation.email}
          />
        </section>
        <button
          type="submit"
          disabled={!isFilledFields}
          onClick={() =>
            Server.post('/register', {
              email: userInfromation.email,
              password: userInfromation.password,
              userName: userInfromation.userName,
              Gender: userInfromation.Gender,
              userHeigth: userInfromation.userHeigth,
              userWeigth: userInfromation.userWeigth,
              userGoaldWeigth: userInfromation.userGoaldWeigth,
            })
              .then((response) => {
                dispatch(
                  userLoggedIn({
                    userName: userInfromation.userName,
                    Gender: userInfromation.Gender,
                    userHeigth: userInfromation.userHeigth,
                    userWeigth: userInfromation.userWeigth,
                    userGoaldWeigth: userInfromation.userGoaldWeigth,
                    id: response.data.user.id,
                    isLoggedIn: response.data.accessToken,
                  })
                )
              })
              .catch((error) => {
                console.log('appi call catch', error)
              })
          }
        >
          Registration
        </button>
      </form>
    </StyledRegistrationHolder>
  )
}*/

export default Registration
