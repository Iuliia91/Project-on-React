import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import axios from 'axios'
import Server from 'api/server.instance'
import styled from 'styled-components'

const StyledProfil = styled.div`
width:80%;
margin:auto;
aling-item:center;
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  grid-auto-columns: 100px;
 grid-gap:20px;
  font-family: 'Lucida Sans Unicode', 'Lucida Grande', 
  border: 16px solid #ece9e0;
  padding:10px;
 


  .user_name{
background: #ece9e0;
 grid-column: 2/4;
 padding:30px 100px;
 margin:auto;
  border-radius: 20px;
  }
 

  .user_information{
    background: #ece9e0;
 grid-column:1/2;
 padding:30px;
 border-radius: 20px;
  }
  }
`

const Profil = () => {
  const axios = require('axios').default
  const profil = ['Iuliia', '30age', '50k']
  const user = useSelector((store) => store.userReducer)
  console.log(user)

  const fillProfil = profil.map((item1, index) => (
    <li className="user-information" key={index}>
      {item1}
    </li>
  ))
  return (
    <StyledProfil>
      <div className="user_name">
        <p className="user_name_text">Hi, {user.userName}</p>
      </div>
      <div className="user_information">{fillProfil}</div>
    </StyledProfil>
  )
}

export default Profil
