import React, { useState, useContext } from 'react'
import { ModalContext } from 'HOC/GlobalModalProvider'
import styled from 'styled-components'

const StyledButtonOptions = styled.div`
  .button {
    border: none;
    border-radius: 120px;
    box-shadow: -2px 2px 7px rgba(0, 0, 0, 0.5);
  }

  .button:hover {
    background-color: rgb(199, 211, 222);

    border-radius: 120px;
  }

  .button__singIn,
  .button__registration,
  .button_reset,
  .button_add {
    padding: 12px;
    margin-right: 20px;
  }

  .button__read-more {
    padding: 12px;
    margin-right: 20px;
  }
`

const ButtonOptions = (props, { disabled = false }) => {
  return (
    <StyledButtonOptions>
      <button
        type={props.type}
        className={props.className}
        onClick={props.handleClick}
        disabled={props.disabled}
      >
        {props.iconOptions}
        {props.textInsideButton}
      </button>
    </StyledButtonOptions>
  )
}

export default ButtonOptions
