import React from 'react'
import { useField } from 'formik'
import styled from 'styled-components'

const StyledFormikInput = styled.div``
const FormikInput = (props) => {
  const [field, meta, helpers] = useField(props.name)

  return (
    <StyledFormikInput>
      <input
        onChange={field.onChange}
        onBlur={field.onBlur}
        name={props.name}
        value={field.value}
        placeholder={props.placeholder}
      />
    </StyledFormikInput>
  )
}

export default FormikInput
