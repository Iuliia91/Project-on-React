import React from 'react'

const Profil = () => {
  const profil = ['Iuliia', '30age', '50k']
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
