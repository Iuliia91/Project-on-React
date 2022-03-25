import React, { useState, useContext } from 'react'
import { ModalContext } from 'HOC/GlobalModalProvider'
import styled from 'styled-components'

const StyledButtonOptions = styled.div`
text-align: center;
  .button {
    border: none;
    background: linear-gradient(180.61deg, #98D67D 0.45%, #569F36 99.39%);
box-shadow: 0px 19px 42px rgba(134, 180, 114, 0.3);
border-radius: 10px;;
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

  .
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
