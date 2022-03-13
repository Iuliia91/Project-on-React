import React from 'react'
import styled from 'styled-components'
import { Formik, Form } from 'formik'
import FormikInput from 'Components/formikFields/FormikInput'

const ModalContext = () => {
  return (
    <StyledModalProfilForm>
      <div className="close_element">
        <button
          className="button_close"
          onClick={() => {
            setModalContext()
          }}
        >
          X
        </button>
      </div>
      <header>Add new weigth</header>
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
        onSubmit={(formValues, { resetForm }) => {
          dispatch(usersWeigth(formValues))
          Server.post('/historyOfWeigth', {
            weigthValue: formValues.weigthValue,
            day: formValues.day,
          }).then((response) => {})
          resetForm()
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
    </StyledModalProfilForm>
  )
}

export default ModalContext
