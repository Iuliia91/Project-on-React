import React from 'react'
import { useSelector } from 'react-redux'
import styled from 'styled-components'

const StyledProgressBar = styled.div`
  .weigth_Informstion {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
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
    max-width: 90%;
    height: 15px;

    transition: width 0.15s ease-out;

    background-color: #e0c412;
    border-radius: 100px;
    box-shadow: inset -1px -1px 10px rgb(0 0 0 / 0.5);
  }
  .startWeigth {
    font-family: 'spartanmedium';
    font-size: 20px;
    color: #86b472;
    padding-top: 10px;
    margin-top: 10px;
    background: linear-gradient(90deg, #dff0c6 0%, #ffffff 77.6%);
    border: 2px solid rgba(255, 255, 255, 0.5);
    box-shadow: 0px 10px 32px rgba(131, 209, 96, 0.26);
    border-radius: 56px;
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
