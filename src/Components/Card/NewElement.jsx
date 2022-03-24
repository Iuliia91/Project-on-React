import React, { useContext, useEffect, useState } from 'react'

import styled from 'styled-components'
import { useDispatch, useSelector } from 'react-redux'
import { cleanState } from 'store/actions/recipeCard'
import DropDownMenu from 'Components/dropDownMenu/DropDownMenu'
const StyledNewElement = styled.div`
  position: absolute;
  background-color: #ece9e0;
  width: 400px;
  top: 30%;
  left: 40%;
  border-radius: 30px;

  .block {
    width: 80%;

    background-color: rgb(241, 177, 108, 0.4);
    border-radius: 8px;
    margin: auto;
  }
  .new_button {
    background-color: transparent;
    border: none;
    padding-bottom: 20px;
  }
  .new_button :hover {
    transform: scale(1.5);
    color: red;
  }
  .clost {
    margin-left: 90%;
  }
  h2 {
    width: 70%;
    margin: auto;
    color: #8d4e0b;
    border-bottom: 2px solid black;
  }

  snap {
    font-size: 20px;
    color: green;
    font-weight: bold;
  }

  snap:hover {
    transform: scale(1.5);
  }
`

const NewElement = (props) => {
  const dispatch = useDispatch()
  const listOfProduct = useSelector(
    (state) => state.productCardReducer.listOfProduct
  )
  const typeOfDish = useSelector((state) => state.productCardReducer.typeOfDish)

  let totalWeigth = listOfProduct.reduce((a, b) => a + Number(b.Weigth), 0)
  let totalCalories = listOfProduct.reduce((a, b) => a + Number(b.calorie), 0)
  let totalCalorie = (totalCalories * 100) / totalWeigth
  const elementForDropDownMenu = ['Breakfast', 'Snack', 'Lunch', 'Dinner']

  return (
    <div>
      <StyledNewElement>
        {' '}
        <div className="block">
          <div>
            <button className="new_button clost" onClick={props.handleCancel}>
              X
            </button>
          </div>
          <div className="context">
            <header>
              <h2>Information about dish</h2>{' '}
            </header>
            <div className="menu">
              {/* {isChoosen && typeOfDish}*/}

              <DropDownMenu
                children={elementForDropDownMenu}
                text={'Choos the type of dish'}
              />
            </div>
            <p>
              There are <snap>{totalCalorie}</snap> calories in 100 grams
            </p>
            <p>
              {' '}
              There are <snap>{listOfProduct.length}</snap> products
            </p>
            <p>
              Total weigth <snap>{totalWeigth}</snap>
            </p>
            <button onClick={props.function} className="new_button">
              Save
            </button>
          </div>
        </div>
      </StyledNewElement>
    </div>
  )
}

export default NewElement
