import React, { useEffect, useState, useContext } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import axios from 'axios'
import Server from 'api/server.instance'
import styled from 'styled-components'
import Card from 'Components/Card/Card'
import { ModalContext } from 'HOC/GlobalModalProvider'
/*  input[type='range'] {
    overflow: hidden;
    width: 80px;
    -webkit-appearance: none;
    background-color: #9a905d;
  }
  
  input[type='range']::-webkit-slider-runnable-track {
    height: 10px;
    -webkit-appearance: none;
    color: #13bba4;
    margin-top: -1px;
  }
  
  input[type='range']::-webkit-slider-thumb {
    width: 10px;
    -webkit-appearance: none;
    height: 10px;
    cursor: ew-resize;
    background: #434343;
    box-shadow: -80px 0 0 80px #43e5f7;
  }
  
  input[type="range"]::-moz-range-progress {
    background-color: #43e5f7;
  }
  
  input[type="range"]::-moz-range-track {
    background-color: #9a905d;
  }
  
  input[type="range"]::-ms-fill-lower {
    background-color: #43e5f7;
  }
  
  input[type="range"]::-ms-fill-upper {
    background-color: #9a905d;*/

/* */

const StyledProfil = styled.div`
width:80%;
margin:auto;
aling-item:center;
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  
 grid-gap:20px;
  font-family: 'Lucida Sans Unicode', 'Lucida Grande', 
  border: 16px solid #ece9e0;
  padding:10px;
 


  .user_name{
background: #ece9e0;
width:80%;
 grid-column: 3/4;
 padding:30px 50px;
 margin:auto;
  border-radius: 20px;
  }


  .user_information{
    background: #ece9e0;
 grid-column:1/2;
 padding:30px;
 border-radius: 20px;
  }


  .user_line{
    display:flex;
    
  }


`

const Profil = () => {
  const axios = require('axios').default
  const profil = ['Iuliia', '30age', '50k']
  const user = useSelector((store) => store.userReducer)
  const setModalContext = useContext(ModalContext)
  const [newWeigthValue, setNewWeigthValue] = useState(user.userWeigth)
  const [listOfWeigth, setListOfWeigth] = useState([])
  const [total, setTotal] = useState(user.userWeigth + user.userGoaldWeigth)
  const getDifferenceInWeight = user.userWeigth - user.userGoaldWeigth

  const fillProfil = profil.map((item1, index) => (
    <li className="user-information" key={index}>
      {item1}
    </li>
  ))
  console.log()

  const handleAddNewWeigth = () => {
    setListOfWeigth((prevetState) => [...prevetState, newWeigthValue])
    setModalContext()
  }

  const hendleAddWeigthValue = () => {
    setModalContext(
      <React.Fragment>
        <div>
          <input
            onChange={(e) => setNewWeigthValue(e.target.value)}
            placeholder="Write the your weigth today"
          />
          <button onClick={handleAddNewWeigth}> add</button>{' '}
        </div>
      </React.Fragment>
    )
  }
  console.log(listOfWeigth)
  return (
    <StyledProfil>
      <div className="user_name">
        <p className="user_name_text">Hi, {user.userName}</p>
        <div>
          <p> You have overweight - {getDifferenceInWeight} kg</p>
        </div>

        <div className="user_line">
          <label className="flying">{user.userWeigth}</label>
          <input
            name="level"
            type="range"
            value={newWeigthValue}
            min={user.userGoaldWeigth}
            max={user.userWeigth}
            onChange={() => {}}
          />
          <label className="flying">{user.userGoaldWeigth}</label>
        </div>
        <button onClick={hendleAddWeigthValue}>
          <p>+Weigth</p>
        </button>
      </div>
      <div className="user_information">{fillProfil}</div>
    </StyledProfil>
  )
}

export default Profil
