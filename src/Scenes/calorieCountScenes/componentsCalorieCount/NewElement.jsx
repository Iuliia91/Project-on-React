import React, { useContext, useEffect, useState } from 'react'

import styled from 'styled-components'
import { useDispatch, useSelector } from 'react-redux'
import { cleanState } from 'store/actions/recipeCard'
import DropDownMenu from 'Components/dropDownMenu/DropDownMenu'
const StyledNewElement = styled.div`
  position: absolute;

  width: 500px;
  top: 30%;
  left: 40%;

  .block {
    width: 80%;
    background: linear-gradient(158.25deg, #e1ecdc 27.9%, #ffffff 90.49%);
    box-shadow: 0px 15px 50px rgba(51, 114, 25, 0.2);
    border-radius: 10px;
    // background-color: rgb(241, 177, 108, 0.4);
    // border-radius: 8px;
    margin: auto;
  }
  .new_button {
    background-color: transparent;
    border: none;
    padding-bottom: 20px;
    font-family: 'spartanmedium';
    font-weight: 600;
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
    font-family: 'spartanmedium';
    color: red;
  }

  snap {
    font-size: 20px;
    color: green;
    font-weight: bold;
    font-family: 'spartanmedium';
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
