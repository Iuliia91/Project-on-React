import React from 'react'
import Navigation from 'Components/Navigation'
import styled from 'styled-components'

const StyledSecondMainLayouts = styled.div`
  background-color: rgb(199, 211, 222);

  .main {
    margin-left: 150px;
    padding: 0px 10px;
    height: 100%;
    width: 160px;
  }
`

const SecondMainLayouts = () => {
  const profil = ['Iuliia', '30age', '70kg']
  const fillProfil = profil.map((item1, index) => (
    <li className="user-information" key={index}>
      {item1}
    </li>
  ))
  return (
    <StyledSecondMainLayouts>
      <div>
        <Navigation />
      </div>
      <div className="main">
        <div>{fillProfil}</div>
      </div>
    </StyledSecondMainLayouts>
  )
}

export default SecondMainLayouts
