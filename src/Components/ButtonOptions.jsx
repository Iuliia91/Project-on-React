import React, { useState, useContext } from 'react'
import { ModalContext } from 'HOC/GlobalModalProvider'
const ButtonOptions = (props) => {
  const [textInsideButton, setTextInsideButton] = useState()
  const [iconOptions, setIconOptions] = useState()
  const [className, setClassName] = useState()
  const setModalContext = useContext(ModalContext)
  const [modalText, setModalText] = useState()

  return (
    <button
      className={props.className}
      onClick={() => {
        setModalContext(props.modalText)
      }}
    >
      {props.iconOptions}
      {props.textInsideButton}
    </button>
  )
}

export default ButtonOptions
