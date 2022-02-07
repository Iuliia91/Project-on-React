import React, { useContext, useState } from 'react'
import { ModalContext } from 'HOC/GlobalModalProvider'

import styled from 'styled-components'

const StyledCard = styled.div`
  width: 200px;
  height: 200px;
  background-color: blue;
  margin: 20px;
  border-radius: 5px;

  .cardHeader {
    width: 100%;
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
      <div className={'cardHeader'}>{props.cardName}</div>
      <div className={'cardBody'}>{props.cardText}</div>
      <div className={'cardFooter'}></div>
    </StyledCard>
  )
}

export default Card
