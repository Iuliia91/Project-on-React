import React, { useContext, useState } from 'react'
import { ModalContext } from 'HOC/GlobalModalProvider'

import styled from 'styled-components'

const StyledCard = styled.div`
  .cardHeader {
    width: 10%;
    height: 50px;
    padding: 10px 20px;
    box-sizing: border-box;
    background-color: grey;
    font-size: 25px;
    line-height: 30px;
    color: black;
    border-top-left-radius: 5px;
    border-top-right-radius: 5px;
    font-family: 'supermercado';
  }

  .cardBody {
    padding: 10px 20px;
    box-sizing: border-box;
    color: white;
  }

  .cardFooter {
    padding: 10px 20px;
    box-sizing: border-box;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
`
/* <button onClick={() => {props.deleteCard()}}>delete</button>*/
const Card = (props) => {
  return (
    <StyledCard>
      <div className={'cardHeader'}>
        {props.cardText.map((item) => (
          <li>{item}</li>
        ))}
      </div>

      <div className={'cardFooter'}></div>
    </StyledCard>
  )
}

export default Card
