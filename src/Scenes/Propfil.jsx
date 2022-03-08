import React, { useEffect, useState, useContext } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { usersWeigth } from 'store/actions/userAction'
import ButtonOptions from 'Components/ButtonOptions'
import styled from 'styled-components'
import { Formik, Form } from 'formik'
import FormikInput from 'Components/formikFields/FormikInput'
import { ModalContext } from 'HOC/GlobalModalProvider'

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
background: #ece9e0;
width:80%;
 grid-column: 3/4;
 padding:30px 50px;
 margin:auto;
  border-radius: 20px;
  }


  .user_information{
    background: #ece9e0;
 grid-column:1/2;
 padding:30px;
 border-radius: 20px;
  }

  .user_line{
    display:flex;
    
  }


`
const StyledProgressBar = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;

  width: 400px;

  margin: 0 auto;

  .bar-wrap {
    width: 60%;
    padding: 6px;
    margin-top: 50px;

    border-radius: 100px;

    background-color: white;
  }

  .bar {
    width: ${(props) => props.value};
    height: 15px;

    transition: width 0.15s ease-out;

    background-color: #38b000;
    border-radius: 100px;
    box-shadow: inset -1px -1px 10px rgb(0 0 0 / 0.5);
  }
`

const Profil = () => {
  const profil = ['Iuliia', '30age', '50k']
  const user = useSelector((store) => store.userReducer)
  const setModalContext = useContext(ModalContext)
  const [newWeigthValue, setNewWeigthValue] = useState('')
  const [listOfWeigth, setListOfWeigth] = useState([])
  const dayToda = useSelector((store) => store.userReducer)
  const getDifferenceInWeight = user.userWeigth - user.userGoaldWeigth
  const dispatch = useDispatch()
  const fillProfil = profil.map((item1, index) => (
    <li className="user-information" key={index}>
      {item1}
    </li>
  ))

  const handleAddNewWeigth = () => {
    let day = new Date()
    setListOfWeigth({ weigthValue: newWeigthValue, dayData: day })

    dispatch(usersWeigth(listOfWeigth))
    setModalContext()
  }

  const hendleAddWeigthValue = () => {
    let day = new Date()
    const dayValue = day.getDate()

    setModalContext(
      <React.Fragment>
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
            console.log(formValues)
            setListOfWeigth(formValues)
            dispatch(usersWeigth(formValues))

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
      </React.Fragment>
    )
  }

  {
    dayToda.userListOfWeifth
  }
  const ProgressBar = (props) => {
    const [value, setValue] = useState('')

    return (
      <StyledProgressBar>
        <div className="startWeigth">{user.userWeigth}</div>
        <div className="bar-wrap">
          <div className="bar"></div>
        </div>
        <div className="startWeigth">{user.userGoaldWeigth}</div>
      </StyledProgressBar>
    )
  }

  return (
    <React.Fragment>
      <ProgressBar />

      <StyledProfil>
        <div className="user_name">
          <p className="user_name_text">Hi, {user.userName}</p>
          <div>
            <p> You have overweight - {getDifferenceInWeight} kg</p>
          </div>
          <button onClick={hendleAddWeigthValue}>
            <p>+Weigth</p>
          </button>
        </div>
        <div className="user_information">{fillProfil}</div>
      </StyledProfil>
    </React.Fragment>
  )
}

export default Profil
