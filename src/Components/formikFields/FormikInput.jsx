import React, { useContext } from 'react'
import { useField } from 'formik'
import styled from 'styled-components'

const StyledFormikInput = styled.div`
  input {
    outline: none;
    border: none;
    border: 1px solid;
    box-shadow: -4px 4px 10px rgba(199, 211, 222);
    border-color: ${(props) => (props.error ? 'red' : 'white')};
    padding: 15px 60px;
    margin: 5px;
    border-radius: 20px;
  }
  input:hover {
    box-shadow: 5px 4px 10px rgb(199, 211, 222);
  }
  input:: placeholder {
    color: grey;
  }

  .errorMessagerHolder {
    position: absolute;
    padding-top: -10px;
    color: red;
  }
`
const FormikInput = (props) => {
  const [field, meta, helpers] = useField(props.name)

  return (
    <StyledFormikInput error={meta.error && meta.touched}>
      <input
        className={props.className}
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
