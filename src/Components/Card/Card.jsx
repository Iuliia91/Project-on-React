import React, { useContext, useState, useEffect } from 'react'
import { recipesSelector } from 'store/selectors/recipesSelector'
import ButtonOptions from '../ButtonOptions'
import styled from 'styled-components'
import axios from 'axios'
import { userLoggedIn } from 'store/actions/userAction'
import { useSelector } from 'react-redux'
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
  const isEdit = useSelector((state) => state.productCardReducer.isEdited)
  const userID = useSelector((state) => state.userReducer)

  const [lest, setList] = useState(props.cardText)

  console.log(lest)
  console.log(userID.id)

  useEffect(() => {
    return () => {
      if (isEdit) {
        axios
          .post(
            `http://localhost:3000/recipes?id=${userID.id}`,

            [...lest]
          )
          .then(function (response) {})
          .catch(function (error) {})
      }
    }
  })

  const handleSaveOnServer = () => {
    {
      props.setModal(false)
    }
  }

  return (
    <StyledCard>
      {/* <div className={'cardHeader'}>
        {lest.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </div>*/}

      <div className={'cardFooter'}>
        <ButtonOptions
          type="button"
          handleClick={handleSaveOnServer}
          textInsideButton="Save"
        />
      </div>
    </StyledCard>
  )
}

export default Card
