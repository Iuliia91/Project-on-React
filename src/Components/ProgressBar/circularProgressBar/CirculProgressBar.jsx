import React, { useState } from 'react'
import styled from 'styled-components'
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import glass from 'assets/svg/glass.jpg'
import branch from 'assets/svg/Branch.svg'
import branch2 from 'assets/svg/Branch.svg'
const StyledCirculProgressBar = styled.div`


  border-radius: 20px;
  width: 260px;
  display: flex;
  flex-direction: column;
  text-align: center;
padding-bottom:30px;
  background: #ffffff 90.49%;
  border-radius: 15px;
  margin-top: 20px;
  box-shadow: 0px 10px 32px rgba(131, 209, 96, 0.26);

  button {
    font-size: 35px;
    margin: 0;
    padding: 0;
    border: 0;
    background: transparent;
    padding-left: 20px;
  }
  button p {
    font-size: 40px;
    font-weight: bold;
    margin: 0;
  }
  .circle {
    margin: auto;
    text-align: center;
    color: green;
    //padding-left:25px;
  }
  .titel {
    font-size: 30px;
    font-weight: bold;
    text-align: center;
    margin: 0;
    padding: 20px 0;
  }
  button {
    color: green;
    margin-bottom: 10px;
  }
  .CircularProgressbar-path {
    stroke: red;
  }
  @media (max-width: 1297px) {
    margin:0;
    padding:0;
  }
  }

  @media (max-width: 850px){
    width:200px;
    .titel{
      font-size:20px;
      padding:5px 0;
    }
    button p{
      font-size:20px;
    }
  }
  @media (max-width: 620px) {
    width:170px;
  }
`

const CirculProgressBar = (props) => {
  const [value, setValue] = useState(0)
  const [visible, setVisible] = useState(false)
  const goal = 2.4
  const initial = 0

  const proportion = (goal - initial) / 100
  const item = Math.round((goal - value) / proportion)

  const percentage = 100 - item

  const handleOpenCircularProgressBar = () => {
    setVisible(!visible)
    console.log('hi')
  }

  const handleAIncriseValue = () => {
    let item = value + 0.3
    if (item > 2.4) {
      setValue(0)
    } else {
      setValue(item)
    }
    console.log(item)
  }
  const handleDecriseValue = () => {
    let item = value - 0.3
    if (item < 0) {
      setValue(0)
    } else {
      setValue(item)
    }
    console.log(item)
  }

  return (
    <StyledCirculProgressBar>
      <div>
        <p className="titel">Goal:2.2L</p>
      </div>{' '}
      <div className="circle">
        {' '}
        <div style={{ width: 150, height: 150 }}>
          <CircularProgressbar
            value={percentage}
            text={`${percentage}%`}
            styles={buildStyles({
              rotation: 0.25,

              strokeLinecap: 'butt',

              textSize: '16px',

              pathTransitionDuration: 0.5,

              pathColor: `rgba(2, 149, 234, ${percentage / 100})`,
              textColor: '#f88',
              trailColor: '#e0c412',
              backgroundColor: 'blue',
            })}
          />
        </div>
      </div>
      <div>
        <button onClick={handleAIncriseValue}>
          <p>+</p>
        </button>
        <button onClick={handleDecriseValue}>
          <p>-</p>
        </button>
      </div>
    </StyledCirculProgressBar>
  )
}

export default CirculProgressBar
