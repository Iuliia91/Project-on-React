import React, { useContext, useRef, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import styled from 'styled-components'
import { useState } from 'react'
import Spinner from '../../../Components/Spinner/Spinner'
import { ModalContext } from 'HOC/GlobalModalProvider'
import { deleteItem, cleanState, userMenu } from 'store/actions/recipeCard'
import TableElements from './TableElements'
import NewElement from '../componentsCalorieCount/NewElement'
import cucumber from 'assets/images/Cucumber.png'
import olive from 'assets/images/OlivePict.png'
import onion from 'assets/images/Onion.png'
import tomato from 'assets/images/TomatosPict.png'
const StyledTable = styled.div`
  margin-top: 30px;
  padding-top: 20px;
  table {
    width: 100%;
    font-family: 'Lucida Sans Unicode', 'Lucida Grande', Sans-Serif;
    text-align: left;
    border-collapse: separate;
    border-spacing: 5px;
    //background: #ece9e0;
    color: #656665;
    border: 16px solid #e1ecdc;
    border-radius: 20px;
    margin: auto;
    background: linear-gradient(158.25deg, #e1ecdc 27.9%, #ffffff 90.49%);
    box-shadow: 0px 15px 50px rgba(51, 114, 25, 0.2);
    border-radius: 10px;
  }
  th {
    font-size: 18px;
    padding: 15px;
    text-align: center;
  }
  td {
    position: relavite;
    background: #f5d7bf;
    background: rgba(134, 180, 114, 0.25);
    // background: transparete;
    border: 1px solid #98d67d;
    padding: 10px;
    text-align: center;
  }
  .pending {
    background-color: pink;
    width: 100%;
    heigth: 100%;
  }

  .table_data {
    border: none;
    font-size: 18px;
    color: #656665;
    width: 100%;
    heigth: 100%;
    background: #f5d7bf;
  }

  .button_weigth {
    margin: 0;
  }
  .inform {
    position: absolute;
    top: 0;
    right: 0;
    padding: 20px;
    background: #f1eb6f;
  }
  .inform p {
    margin: 0;
    font-size: 20px;
    font-family: 'spartanmedium';
    color: red;
  }
  .element {
    display: block;
    width: 70%;
    heigth: 30%;
    top: 50%;
    left: 50%;
  }
  td button {
    width: 100%;
    border: none;
    background-color: transparent;
  }

  td button:hover {
    transform: scale(1.5);
    color: red;
  }
`

const StyledModalInformOfRecipe = styled.div`
  overflow: hidden;

  .button {
    position: absolute;
    background: transparent;
    border: none;
    font-size: 20px;
    top: 10px;
    right: 20px;
  }
  .button:hover {
    transform: scale(1.5);
  }
  .cucumber {
    position: absolute;
    top: -5%;
    left: 90px;
    opacity: 0.7;
  }
  .olive {
    width: 150px;
    position: absolute;
    top: 73%;
    left: 250px;
    z-index: 99999;
    opacity: 0.7;
  }

  .onion {
    width: 100px;
    position: absolute;
    top: 79%;
    left: 0;
    z-index: 99999;
    opacity: 0.7;
  }
  .tomato {
    width: 120px;
    position: absolute;
    top: 79%;
    left: 140px;
    z-index: 99999;
    opacity: 0.7;
  }
  p {
    position: relative;
    font-size: 20px;
    font-family: 'spartanmedium';
    margin: 0;
    color: red;
    border-top: 2px solid red;
    border-bottom: 2px solid red;
    padding: 114px 46px;
    background: linear-gradient(158.25deg, #e1ecdc 27.9%, #ffffff 90.49%);
    box-shadow: 0px 15px 50px rgba(51, 114, 25, 0.2);
    border-radius: 15px;
  }
`
const StyledApiFaild = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  width: 30%;
  background: #f1eb6f;
  border: 1px solid red;

  div {
    padding: 18px;

    text-aling: center;
  }
  p {
    margin: 0;
    font-size: 16px;
    font-family: 'spartanmedium';
    color: red;
  }
`

const TableElement = (props) => {
  const openModal = useContext(ModalContext)
  const dispatch = useDispatch()
  const [inform, setInform] = useState(false)
  const [check, setCheck] = useState(false)
  const isChoosen = useSelector((state) => state.productCardReducer.isChoosen)
  const typeOfDish = useSelector((state) => state.productCardReducer.typeOfDish)
  const listOfProduct = useSelector(
    (state) => state.productCardReducer.listOfProduct
  )

  const handleSavetheDish = () => {
    let totalWeigth = listOfProduct.reduce((a, b) => a + Number(b.Weigth), 0)
    let totalCalories = listOfProduct.reduce((a, b) => a + Number(b.calorie), 0)
    let totalCalorie = Math.round((totalCalories * 100) / totalWeigth)
    if (isChoosen) {
      dispatch(
        userMenu({
          dish: listOfProduct,
          calorie: totalCalorie,
          type: typeOfDish,
        })
      )

      console.log(listOfProduct)
      setCheck(false)
      setInform(false)
    } else {
      setInform(true)
    }
  }

  const handleCancel = () => {
    dispatch(cleanState(false))
    console.log('privet')
    setCheck(false)
  }
  const handleSaveRecipies = (props) => {
    let totalWeigth = listOfProduct.reduce((a, b) => a + Number(b.Weigth), 0)
    let totalCalories = listOfProduct.reduce((a, b) => a + Number(b.calorie), 0)
    let totalCalorie = (totalCalories * 100) / totalWeigth

    if (listOfProduct.length === 0) {
      return openModal(
        <StyledModalInformOfRecipe>
          <button
            className="button"
            onClick={() => {
              openModal()
            }}
          >
            X
          </button>
          <img src={cucumber} className="cucumber" />
          <img src={olive} className="olive" />
          <img src={onion} className="onion" />
          <img src={tomato} className="tomato" />
          <div className="context">
            <p>You didnt add any product!!</p>
          </div>
        </StyledModalInformOfRecipe>
      )
    } else {
      setCheck(true)
      
    }
  }

  return (
    <div>
      <TableElements handleSaverecipe={handleSaveRecipies} />
      {check && (
        <NewElement function={handleSavetheDish} handleCancel={handleCancel} />
      )}
      {inform && (
        <div className="inform">
          <p>Choose the type of dish</p>
        </div>
      )}
    </div>
  )
}

const RequestFaild = () => {
  return (
    <StyledApiFaild>
      {' '}
      <div>
        {' '}
        <p>Ups...Something went wrong.Try again!!!</p>
      </div>
    </StyledApiFaild>
  )
}

const TableList = () => {
  const loading = useSelector((state) => state.productCardReducer.loading)
  const getSmtWrong = useSelector(
    (state) => state.productCardReducer.getSomethingWrong
  )

  return (
    <StyledTable>
      <div>{loading === 'pending' && <Spinner />}</div>
      <div>{loading === 'fulfilled' && <TableElement />}</div>
      <div>{getSmtWrong === true && <RequestFaild />}</div>
    </StyledTable>
  )
}
export default TableList
