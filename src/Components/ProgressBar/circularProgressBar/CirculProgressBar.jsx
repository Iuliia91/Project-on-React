import React, { useState } from 'react'
import styled from 'styled-components'
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar'
import 'react-circular-progressbar/dist/styles.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const StyledCirculProgressBar = styled.div`
margin :0 20px;
background:rgb(239,235,235);
  display: flex;
  width:200px;
  height:350px;
  flex-direction: column;
 padding:10px //;
  justify-content: center;
  text-align: center;
  border-radius: 30px;
  padding-left:25px;

  button {
    font-size: 50px;
    padding-top:5px;
    padding-left:20px;
  }
  .circle{
    margin:auto;
    text-align: center;
    color:green;
    //padding-left:25px;
  }
  p {
    font-size: 25px;
    font-weight: bold;
    text-align: center;
  }
  button {
    
    color:green;
 margin-bottom:10px;
    
  }
  .CircularProgressbar-path {
    stroke: red;
  }
`

const CirculProgressBar = (props) => {
  const [value, setValue] = useState(0)
  const goal = 2.4
  const initial = 0

  const proportion = (goal - initial) / 100
  const item = Math.round((goal - value) / proportion)

  const percentage = 100 - item

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
        You need dring water
        <p className="titel">Goal:2.2L</p>
      </div>{' '}
      <div className="circle">
        {' '}
        <div style={{ width: 200, height: 200 }}>
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
        <button onClick={handleAIncriseValue}>+</button>
        <button onClick={handleDecriseValue}>-</button>
      </div>
    </StyledCirculProgressBar>
  )
}

export default CirculProgressBar
