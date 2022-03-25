import React from 'react'
import { createGlobalStyle } from 'styled-components'
import spartanmediumFontURL from '../assets/fonts/Spartan-Medium.ttf'
const GlobalStyled = createGlobalStyle`
body {
  margin: 0;
  padding:0;
}
@font-face{
  font-family:"spartanmedium";
  src:url(${spartanmediumFontURL})
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
