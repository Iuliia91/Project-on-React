import React, { useState, useContext } from 'react'
import { ModalContext } from 'HOC/GlobalModalProvider'
import styled from 'styled-components'

const StyledButtonOptions = styled.div`
text-align: center;
  .button {
    border: none;
    padding:10px;
    background: linear-gradient(180.61deg, #98d67d 0.45%, #569f36 99.39%);
    opacity: 0.6;
border-radius: 10px;;
  }

  .button:hover {
    background:#eadc7e;

    border-radius: 120px;
  }

  p{
    margin:0;
   color:black;
  }

 
  .button_reset,
  .button_add {
    background: linear-gradient(180.61deg, #98D67D 0.45%, #569F36 99.39%);
box-shadow: 0px 19px 42px rgba(134, 180, 114, 0.4);
border-radius: 10px;
  }
  .button__singIn,
  .button__registration,
  {
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
        <p>
          {props.iconOptions}
          {props.textInsideButton}
        </p>
      </button>
    </StyledButtonOptions>
  )
}

export default ButtonOptions
