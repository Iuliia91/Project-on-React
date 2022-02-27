import React, { useContext } from 'react'
import { useField } from 'formik'
import styled from 'styled-components'
import { ModalContext } from 'HOC/GlobalModalProvider'
const StyledFormikInput = styled.div`
  input {
    outline: none;
    border: none;
    border: 1px solid;
    border-color: ${(props) => (props.error ? 'red' : 'white')};

    padding: 15px 60px;
    margin: 5px;
    border-radius: 20px;
  }
  input:: placeholder {
    color: ${(props) => (props.error ? 'red' : 'grey')};
  }
`
const FormikInput = (props) => {
  const [field, meta, helpers] = useField(props.name)

  return (
    <StyledFormikInput error={meta.error}>
      <input
        onChange={field.onChange}
        onBlur={field.onBlur}
        name={props.name}
        value={field.value}
        inputcolor="blue"
        placeholder={
          meta.error && meta.touched ? meta.error : props.placeholder
        }
      />
      {meta.error && meta.touched}
    </StyledFormikInput>
  )
}

export default FormikInput
