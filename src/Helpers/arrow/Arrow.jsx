import React from 'react'
import styled from 'styled-components'

import arrow from 'assets/svg/arrowCurve.svg'
import arrowItem from 'assets/svg/arrowCurveItem.svg'

const StyledArroe = styled.div`
  position: absolute;
  width: 100px;
  .arrow {
    position: absolute;
    width: 100px;
    left: 30px;
  }

  .arrowItem {
    width: 20px;
    display: block;
    position: absolute;
    left: 15%;

    top: 6%;
    bottom: 76.15%;
  }
`

const Arrow = () => {
  return (
    <StyledArroe>
      <div>
        <img src={arrow} className="arrow" />
        <img src={arrowItem} className="arrowItem" />
      </div>
    </StyledArroe>
  )
}

export default Arrow
