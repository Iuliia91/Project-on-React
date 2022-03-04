import React, { useEffect, useState, useContext } from 'react'
import styled from 'styled-components'

import { useSelector, useDispatch } from 'react-redux'

import {
  recipeCard,
  getCalorieCount,
  addProduct,
} from 'store/actions/recipeCard'
import { ModalContext } from 'HOC/GlobalModalProvider'
import ButtonOptions from 'Components/ButtonOptions'
import TableList from 'Components/Table'
import axios from 'axios'
import FormikInput from 'Components/formikFields/FormikInput'
import { Formik, Form, Field, useFormik } from 'formik'
const StyledCalorieCount = styled.div`
  .main {
    text-align: center;
    margin: auto;
  }
  .main__content {
    display: flex;
    flex-direction: column;
    margin: auto;
  }
  .buttons {
    display: flex;

    justify-content: center;
  }
`

const listOfInputValue = {
  productName: '',
  Weigth: '',
  calorie: '',
}

const CalorieCount = (props) => {
  const dispatch = useDispatch()
  const listOfProductState = useSelector(
    (state) => state.productCardReducer.listOfProduct
  )

  /* let list = []
  const handleClean = () => {
    return setInputDate(listOfInputValue)
  }

  const handleEditClick = (product, index) => {
    setInputDate(product)
    setEditProductDate({
      isEdit: true,
      productIndex: index,
    })
  }

  /* const options = {
    method: 'GET',
    url: 'http://localhost:3000/recipes?userid=3',
  }*/

  return (
    <StyledCalorieCount>
      <main className="main">
        <div className="main__content">
          <Formik
            initialValues={{ productName: '', Weigth: '', calorie: '' }}
            validate={(formValues) => {
              const errorObj = {}
              let isValid = true
              const formFields = formValues.productName && formValues.Weigth
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
              dispatch(addProduct(formValues)).then(() => {
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
              <ButtonOptions type="reset" textInsideButton="Reset" />

              <ButtonOptions type="submit" textInsideButton={'Add product'} />
            </Form>
          </Formik>

          <TableList
          /* handleRemoveClick={handleRemoveClick}
            handleEditClick={handleEditClick}*/
          />
        </div>
      </main>
    </StyledCalorieCount>
  )
}

export default CalorieCount
