import React, { useEffect, useState, useContext } from 'react'
import styled from 'styled-components'

import { useSelector, useDispatch } from 'react-redux'
import Arrow from 'Helpers/arrow/Arrow'
import { addProduct, typeOfDish } from 'store/actions/recipeCard'
import ButtonOptions from 'Components/ButtonOptions'
import TableList from 'Components/Table'
import GroupOfImiges from 'Helpers/groupOfImiges/GroupOfImiges'
import FormikInput from 'Components/formikFields/FormikInput'
import { Formik, Form } from 'formik'
const StyledCalorieCount = styled.div`
  // max-width: 1400px;
  background: #ffffff;
  margin: auto;
  .main {
    margin: 0;

    text-align: center;
    margin: auto;
    width: 80%;
  }

  .block_form {
    display: flex;
    margin: auto;
  }
  .main__content {
    display: flex;
    flex-direction: column;

    margin: auto;
  }
  .formik_button {
    display: flex;

    justify-content: center;
    margin: auto;
    padding-top: 20px;
  }
  .form_block {
    margin: auto;
    background: linear-gradient(158.25deg, #e1ecdc 27.9%, #ffffff 90.49%);
    box-shadow: 0px 15px 50px rgba(51, 114, 25, 0.2);
    border-radius: 10px;
  }
  .form {
    padding: 50px;
    //
  }
  button {
    padding: 10px;
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

  return (
    <StyledCalorieCount>
      <Arrow />
      <main className="main">
        <div className="block_form">
          {' '}
          <GroupOfImiges />
          <div className="form_block">
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
          </div>
        </div>

        <div className="main__content">
          <TableList typeOfDish={isChoosen} total={value} />
        </div>
      </main>
    </StyledCalorieCount>
  )
}

export default CalorieCount
