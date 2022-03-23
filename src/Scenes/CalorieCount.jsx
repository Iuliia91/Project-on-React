import React, { useEffect, useState, useContext } from 'react'
import styled from 'styled-components'

import { useSelector, useDispatch } from 'react-redux'

import { addProduct, typeOfDish } from 'store/actions/recipeCard'
import ButtonOptions from 'Components/ButtonOptions'
import TableList from 'Components/Table'

import FormikInput from 'Components/formikFields/FormikInput'
import { Formik, Form } from 'formik'
const StyledCalorieCount = styled.div`
  max-width: 1400px;
  margin: auto;
  .main {
    margin: 0;

    text-align: center;
    margin: auto;
    width: 80%;
  }
  .main__content {
    display: flex;
    flex-direction: column;

    margin: auto;
  }
  .formik_button {
    display: flex;
    position: absolute;
    justify-content: center;
    left: 50%;
  }
  .form {
    padding-bottmo: 30px;
    margin: auto;
  }
  button {
    padding: 12px;
    margin-right: 20px;
  }

  select {
    border: none;
  }

  option:hover {
    color: red;
  }

  .active {
    background: pink;
  }
  .button {
    border: none;
    background: white;
  }
`

const CalorieCount = (props) => {
  const dispatch = useDispatch()
  const [areae, setarea] = useState()
  const [isChoosen, setIsChoosen] = useState('button')
  const typeOfDishes = ['breakfast', 'snack', 'lunch', 'dinner']
  const [value, setValue] = useState(0)

  /* const options = {
    method: 'GET',
    url: 'http://localhost:3000/recipes?userid=3',
  }*/

  const handleChoosenType = (index) => {
    setarea(index)
    //setDisable(true)
  }

  console.log(value)
  return (
    <StyledCalorieCount>
      <main className="main">
        <div className="main__content">
          <div className="form">
            <Formik
              initialValues={{
                productName: '',
                Weigth: '',
                calorie: '',
              }}
              validate={(formValues) => {
                const errorObj = {}
                let isValid = true

                if (!formValues.productName) {
                  isValid = false
                  errorObj.productName = 'Fill the fields'
                } else if (!formValues.Weigth) {
                  errorObj.Weigth = 'Fill the fields'
                } else if (!formValues.Weigth.replace(/\D+/g, '')) {
                  errorObj.Weigth = 'Write the number'
                }

                return errorObj
              }}
              onSubmit={(formValues, { resetForm }) => {
                const obj = { ...formValues, types: isChoosen }

                setValue(value + Number(formValues.Weigth))

                dispatch(addProduct(obj)).then((response) => {
                  resetForm()
                })
              }}
            >
              <Form>
                <FormikInput
                  name="productName"
                  type="text"
                  placeholder="Write the product name"
                />
                <FormikInput
                  name="Weigth"
                  placeholder="Write the weigth of product"
                />
                <div className="formik_button">
                  <ButtonOptions
                    type="reset"
                    className="button button_reset"
                    textInsideButton="Reset"
                  />

                  <ButtonOptions
                    type="submit"
                    className="button button_add"
                    textInsideButton={'Add product'}
                  />
                </div>
              </Form>
            </Formik>
          </div>

          <TableList typeOfDish={isChoosen} total={value} />
        </div>
      </main>
    </StyledCalorieCount>
  )
}

export default CalorieCount
