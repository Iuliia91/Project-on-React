import React from 'react'
import styled from 'styled-components'

import arrow from 'assets/svg/arrowCurve.svg'
import arrowItem from 'assets/svg/arrowCurveItem.svg'

const StyledArroe = styled.div`
  // position: absolute;
  // width: 100px;
  .arrow {
    position: relative;
  }

  .arrowItem {
    display: block;
    position: absolute;
    // right: 88.51%;
    // top: 31.4%;
    // bottom: 44.74%;
    transform: rotate(180deg);
  }
`

const Arrow = () => {
  return (
    <StyledArroe>
      <div>
        {/* <img src={arrow} className={arrow} />*/}
        <img src={arrowItem} className="arrowItem" />
      </div>
    </StyledArroe>
  )
}

export default Arrow
