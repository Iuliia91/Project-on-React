import React, { useEffect, useState, useContext } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import FormikInput from 'Components/formikFields/FormikInput'
import ButtonOptions from 'Components/ButtonOptions'
import { addProduct, typeOfDish } from 'store/actions/recipeCard'
import { Formik, Form } from 'formik'
const FormInCalorieCount = () => {
  const dispatch = useDispatch()
  return (
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
        const obj = { ...formValues }
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
        <FormikInput name="Weigth" placeholder="Write the weigth of product" />
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
  )
}

export default FormInCalorieCount
