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

  }
`

const CalorieCount = (props) => {
  const dispatch = useDispatch()

  /* const options = {
    method: 'GET',
    url: 'http://localhost:3000/recipes?userid=3',
  }*/

  return (
    <StyledCalorieCount>
      <main className="main">
        <div className="main__content">
          <div className="form">
            {' '}
            <Formik
              initialValues={{
                productName: '',
                Weigth: '',
                calorie: '',
              }}
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
                console.log(formValues)
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

          <TableList />
        </div>
      </main>
    </StyledCalorieCount>
  )
}

export default CalorieCount
