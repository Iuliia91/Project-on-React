import React from 'react'
import { createGlobalStyle } from 'styled-components'

const GlobalStyled = createGlobalStyle`
body {
  margin: 0;
  padding:0;
}

`
const GlobalStyledProvide = () => {
  return (
    <React.Fragment>
      <GlobalStyled />
    </React.Fragment>
  )
}

export default GlobalStyledProvide
