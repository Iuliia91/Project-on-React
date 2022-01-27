import React, { useState } from 'react'

const OpenWindowSingIn = (props) => {
  return (
    <div className="wrapped">
      <h1>Working with Forms</h1>
      <button onClick={() => props.changeName('Privet')}>Click me</button>
    </div>
  )
}

export default OpenWindowSingIn
