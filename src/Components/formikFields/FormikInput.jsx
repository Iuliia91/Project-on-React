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
    color: grey;
  }

  .errorMessagerHolder {
    color: red;
  }
`
const FormikInput = (props) => {
  const [field, meta, helpers] = useField(props.name)

  return (
    <StyledFormikInput error={meta.error && meta.touched}>
      <input
        onChange={field.onChange}
        onBlur={field.onBlur}
        name={props.name}
        type={props.type}
        value={field.value}
        inputcolor="blue"
        placeholder={props.placeholder}
      />
      {meta.error && meta.touched && (
        <div className="errorMessagerHolder">{meta.error}</div>
      )}
    </StyledFormikInput>
  )
}

export default FormikInput
