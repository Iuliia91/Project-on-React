import React, { useEffect, useState, useContext } from 'react'
import styled from 'styled-components'

import { useSelector, useDispatch } from 'react-redux'

import { addProduct, typeOfDish } from 'store/actions/recipeCard'
import ButtonOptions from 'Components/ButtonOptions'
import TableList from 'Components/Table'

import FormikInput from 'Components/formikFields/FormikInput'
import { Formik, Form } from 'formik'
const StyledCalorieCount = styled.div`
  .main {
    text-align: center;
    margin: auto;
    width: 50%;
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

  /* const options = {
    method: 'GET',
    url: 'http://localhost:3000/recipes?userid=3',
  }*/

  const handleChoosenType = (index) => {
    setarea(index)
    //e.target.className = 'active'
  }
  console.log(isChoosen)

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
                type: '',
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
                console.log(formValues)

                dispatch(addProduct(formValues)).then(() => {
                  resetForm()
                })
              }}
            >
              <Form>
                {typeOfDishes.map((item, index) => (
                  <button
                    type="button"
                    value={item}
                    className={areae == index ? 'active' : 'button'}
                    onClick={(e) => {
                      handleChoosenType(index)

                      setIsChoosen('button')
                      console.log(item)
                      const value = item
                      const obj = { isChoosen: true, items: item }
                      dispatch(typeOfDish(obj))
                    }}
                  >
                    {item}
                  </button>
                ))}

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

          <TableList typeOfDish={isChoosen} />
        </div>
      </main>
    </StyledCalorieCount>
  )
}

export default CalorieCount
