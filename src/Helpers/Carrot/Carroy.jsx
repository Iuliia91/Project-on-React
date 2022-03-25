import React from 'react'
import styled from 'styled-components'

import itemAvacado from 'assets/svg/itemAvocado.svg'

import imgCarrot from 'assets/svg/carrot.svg'
const StyledImigCarrot = styled.div`
  position: fixt;

  .image_carrot {
    position: absolute;
    top: 10px;
    opacity: 0.3;
  }
  .image_avocado_item {
    position: absolute;
    top: 45px;
    left: 50px;
    opacity: 0.3;
  }
  .image_avocado_item2 {
    left: 10px;
    position: absolute;
    opacity: 0.3;
  }
`

const ImigCarrot = (props) => {
  return (
    <StyledImigCarrot>
      <img className="image_carrot" src={imgCarrot}></img>
      <img className="image_carrot_item"></img>
      <img className="image_carrot_item2"></img>
    </StyledImigCarrot>
  )
}

export default ImigCarrot
