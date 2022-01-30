import React, { useState, useContext } from 'react'
import { ModalContext } from 'HOC/GlobalModalProvider'
import styled from 'styled-components'

const StyledButtonOptions = styled.div`
  .button {
    border: none;
  }

  .button:hover {
    background-color: rgb(199, 211, 222);
  }

  .button__singIn,
  .button__registration {
    padding: 10px;
    margin-right: 20px;
  }

  .button__read-more {
    padding: 10px;
    margin-right: 20px;
  }
`

const ButtonOptions = (props) => {
  const [textInsideButton, setTextInsideButton] = useState()
  const [iconOptions, setIconOptions] = useState()
  const [className, setClassName] = useState()
  const setModalContext = useContext(ModalContext)
  const [modalText, setModalText] = useState()

  return (
    <StyledButtonOptions>
      <button
        className={props.className}
        onClick={() => {
          setModalContext(props.modalText)
        }}
      >
        {props.iconOptions}
        {props.textInsideButton}
      </button>
    </StyledButtonOptions>
  )
}

export default ButtonOptions
