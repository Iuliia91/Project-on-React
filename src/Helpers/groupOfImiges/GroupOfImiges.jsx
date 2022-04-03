import React from 'react'
import styled from 'styled-components'
import dish from 'assets/svg/Layer 0.png'
import Arrow from 'Helpers/arrow/Arrow'
const StyledGroupImeges = styled.div`
  margin-top: 30px;
  width: 400px;
  position: relative;
  img {
    width: 400px;
  }
  .item1 {
    bottom: 100px;
    left: -18%;
    position: absolute;
    transform: rotate(-40.27deg);
  }
  .item1 p {
    position: absolute;
    transform: rotate(40deg);
    top: 10px;
    left: 5%;
    paddint-top: 5px;
    font-family: 'spartanmedium';
    font-weight: bold;
    color: green;
  }

  .item2 {
    left: 100%;
    bottom: 10px;
    position: absolute;
    transform: rotate(-138.27deg);
  }
  .item2 p {
    position: absolute;

    transform: rotate(138deg);
    font-family: 'spartanmedium';
    font-weight: bold;
    color: green;
  }
  .item3 {
    left: 115%;
    top: 90px;
    position: absolute;
    // transform: rotate(140.27deg);
  }

  .item3 div {
    transform: matrix(-1, 0, 0, 1, 0, 0);
  }
  .item3 p {
    position: absolute;

    // transform: rotate(138deg);
    font-family: 'spartanmedium';
    font-weight: bold;
    color: green;
  }
  @media (max-width: 1411px) {
    .item3 {
      display: none;
      // width: 300px;
    }
  }
`

const GroupOfImiges = () => {
  return (
    <StyledGroupImeges>
      <img src={dish} />
      <div className="item1">
        <div>
          <Arrow />
        </div>
        <p>22 cal</p>
      </div>
      <div className="item2">
        <div>
          <Arrow />
        </div>
        <p>23 cal</p>
      </div>
      <div className="item3">
        <div>
          <Arrow />
        </div>
        <p>43 cal</p>
      </div>
    </StyledGroupImeges>
  )
}

export default GroupOfImiges
