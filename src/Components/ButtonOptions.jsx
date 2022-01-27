import React, { useState } from 'react'

const ButtonOptions = (props) => {
  const [textInsideButton, setTextInsideButton] = useState()
  const [iconOptions, setIconOptions] = useState()
  const [className, setClassName] = useState()

  return (
    <button className={props.className}>
      {props.iconOptions}
      {props.textInsideButton}
    </button>
  )
}

export default ButtonOptions
