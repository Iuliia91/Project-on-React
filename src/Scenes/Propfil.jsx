import React, { useEffect } from 'react'
import axios from 'axios'
import Server from 'api/server.instance'

const Profil = () => {
  const axios = require('axios').default
  const profil = ['Iuliia', '30age', '50k']

  useEffect(() => {
    axios.get('http://localhost:3000/users').then((response) => {
      console.log(response)
    })
  })
  const fillProfil = profil.map((item1, index) => (
    <li className="user-information" key={index}>
      {item1}
    </li>
  ))
  return (
    <div>
      {fillProfil}
      jnhjunhui
    </div>
  )
}

export default Profil
