import React, { useContext, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { usersWeigth } from 'store/actions/userAction'
import ButtonOptions from 'Components/ButtonOptions'
import styled from 'styled-components'
import { Formik, Form } from 'formik'
import FormikInput from 'Components/formikFields/FormikInput'
import { ModalContext } from 'HOC/GlobalModalProvider'
import ProgressBar from 'Components/ProgressBar/ProgressBar'
const StyledProfil = styled.div`
width:80%;
margin:auto;
aling-item:center;
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  
 grid-gap:20px;
  font-family: 'Lucida Sans Unicode', 'Lucida Grande', 
  border: 16px solid #ece9e0;
  padding:10px;
 
  .user_name{
   
   
    margin: 0 auto;

background: #ece9e0;
width:80%;
 grid-column: 3/4;
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
    background: #ece9e0;
 grid-column:1/2;
 padding:30px;
 border-radius: 20px;
  }

  .button{
  text-align: center;
    margin-top:20px;
    
  }

  button{
    border: none;  
  }

  button:hover{
    background-color: rgb(199, 211, 222)
  }
  .user_line{
    display:flex;
    
  }


`
const Profil = () => {
  const user = useSelector((store) => store.userReducer)
  const setModalContext = useContext(ModalContext)
  const getDifferenceInWeight = user.userWeigth - user.userGoaldWeigth
  const [valueOfLoseweigth, setValueOfLoseweigth] = useState(
    getDifferenceInWeight
  )

  const dispatch = useDispatch()

  const hendleAddWeigthValue = () => {
    let day = new Date()
    const dayValue = day.getDate()

    setModalContext(
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
        onSubmit={(formValues) => {
          dispatch(usersWeigth(formValues))
          const howManyLost = setValueOfLoseweigth(
            user.userWeigthToday - user.userGoaldWeigth
          )
          setTimeout(console.log(user.userWeigthToday, user.userGoaldWeigth), 0)

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
    )
  }

  return (
    <StyledProfil>
      <div className="user_name">
        <div className="user__information-data">
          {' '}
          <p className="user_name_text">Hi, {user.userName}</p>
          <div>
            <p className="user_weigth_data">
              {' '}
              You have overweight - {valueOfLoseweigth} kg
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

      <div className="user_information">fdgvbbftbhfg</div>
    </StyledProfil>
  )
}

export default Profil
