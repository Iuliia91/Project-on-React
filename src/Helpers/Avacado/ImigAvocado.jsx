import React from 'react'
import styled from 'styled-components'
import svgAvacado from 'assets/svg/avacado.svg'
import itemAvacado from 'assets/svg/itemAvocado.svg'

import LineAvocado from 'assets/svg/line.svg'
const StyledImigAvocado = styled.div`
  position: fixt;

  .image_avocado {
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

const ImigAvocado = (props) => {
  return (
    <StyledImigAvocado>
      <img className="image_avocado" src={svgAvacado}></img>
      <img className="image_avocado_item" src={itemAvacado}></img>
      <img className="image_avocado_item2" src={LineAvocado}></img>
    </StyledImigAvocado>
  )
}

export default ImigAvocado
