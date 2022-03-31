import React from 'react'
import styled from 'styled-components'
import pear from 'assets/svg/pear.svg'
import pearItamBig from 'assets/svg/pearItemBig.svg'
import pearItamSma from 'assets/svg/pearItemSma.svg'
import peanItam from 'assets/svg/peanItem.svg'
const StyledImigPear = styled.div`
  position: absolute;
  .image_pear {
    // position: absolute;
    top: 10px;
    // opacity: 0.3;
  }
  .image_pear_item {
    position: absolute;
    top: 20%;
    left: 5%;
  }
  .image_pear_item2 {
    position: absolute;
    bottom: 10%;
    right: 18%;
  }
  .image_pear_item3 {
    position: absolute;
    left: 75;
    right: -1%;
    bottom: -10%;
  }
`

const ImigPear = (props) => {
  return (
    <StyledImigPear>
      <img className="image_pear" src={pear}></img>
      <img className="image_pear_item" src={pearItamBig}></img>
      <img className="image_pear_item2" src={pearItamSma}></img>
      <img className="image_pear_item3" src={peanItam}></img>
    </StyledImigPear>
  )
}

export default ImigPear
