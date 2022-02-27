import React, { useState } from 'react'
import Server from 'api/server.instance'
import styled from 'styled-components'
import ButtonOptions from 'Components/ButtonOptions'
import { useDispatch } from 'react-redux'
import { userLoggedIn, userLoggedOut } from '../store/actions/userAction'
import { Formik } from 'formik'
const StyledRegistrationHolder = styled.div`
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
const initialData = {
  userName: '',
  Gender: '',
  userHeigth: '',
  userWeigth: '',
  userGoaldWeigth: '',
  email: '',
  password: '',
}

const Registration = () => {
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
          <input
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
          <input
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
          <input
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
}

export default Registration
