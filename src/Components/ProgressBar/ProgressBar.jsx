import React from 'react'
import { useSelector } from 'react-redux'
import styled from 'styled-components'

const StyledProgressBar = styled.div`
  width: 400px;

  .weigth_Informstion {
    display: flex;
    flex-direction: row;
    justify-content: space-around;
  }
  .bar-wrap {
    width: 75%;
    padding: 2px;
    margin: auto;
    border-radius: 100px;
    box-shadow: inset -1px -1px 10px rgb(0 0 0 / 0.5);
    background-color: white;
  }

  .bar {
    width: ${(props) => props.value};
    height: 15px;

    transition: width 0.15s ease-out;

    background-color: #38b000;
    border-radius: 100px;
    box-shadow: inset -1px -1px 10px rgb(0 0 0 / 0.5);
  }
`

const ProgressBar = (props) => {
  const user = useSelector((store) => store.userReducer)
  const { userWeigth, userGoaldWeigth } = user
  const procentt = props.procent

  return (
    <StyledProgressBar value={procentt}>
      <div className="bar-wrap">
        <div className="bar"></div>
      </div>
      <div className="weigth_Informstion">
        <div className="startWeigth">{`${userWeigth}kg`}</div>
        <div className="startWeigth">{`Goal: ${userGoaldWeigth}kg`}</div>
      </div>
    </StyledProgressBar>
  )
}

export default ProgressBar
