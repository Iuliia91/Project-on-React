import React, { useContext, useState } from 'react'
import { ModalContext } from 'HOC/GlobalModalProvider'
import ButtonOptions from '../ButtonOptions'
import styled from 'styled-components'

const StyledCard = styled.div`
  width: 70%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: auto;

  .cardHeader {
    width: 70%;
    padding: 10px 20px;
    background-color: #f5d7bf;
    font-size: 16px;
    color: black;
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

      <div className={'cardFooter'}>
        <ButtonOptions
          type="button"
          handleClick={() => {
            props.setModal(false)
          }}
          textInsideButton="Save"
        />
      </div>
    </StyledCard>
  )
}

export default Card
