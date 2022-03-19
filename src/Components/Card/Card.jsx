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
  const [recipeName, setRecipeName] = useState('')
  const [lest, setList] = useState(props.cardText)

  const name = recipeName

  /*const Recipes = {
    name: name,
    products: [...lest],
    userid: userID.id,
  }*/

  const handleSaveOnServer = () => {
    if (isEdit) {
      axios
        .post(
          /*`http://localhost:3000/recipes/:${userID.id}`*/
          'http://localhost:3000/recipes',
          { Recipes }
        )
        .then(function (response) {})
        .catch(function (error) {})
    }
    {
      props.setModal(false)
    }
  }

  return (
    <StyledCard>
      <input
        placeholder="Write the recipe name"
        onChange={(e) => {
          setRecipeName(e.target.value)
        }}
        value={recipeName}
      />
      <div>{props.text}</div>
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
