import React, { useContext, useRef, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import styled from 'styled-components'
import { useState } from 'react'
import Spinner from './Spinner/Spinner'

import { ModalContext } from 'HOC/GlobalModalProvider'
import { deleteItem, cleanState, userMenu } from 'store/actions/recipeCard'
import TableElements from 'Components/TableElements'
import NewElement from 'Components/Card/NewElement'
const StyledTable = styled.div`
  margin-top: 30px;
  padding-top: 20px;
  table {
    width: 100%;
    font-family: 'Lucida Sans Unicode', 'Lucida Grande', Sans-Serif;
    text-align: left;
    border-collapse: separate;
    border-spacing: 5px;
    background: #ece9e0;
    color: #656665;
    border: 16px solid #ece9e0;
    border-radius: 20px;
    margin: auto;
  }
  th {
    font-size: 18px;
    padding: 20px;
  }
  td {
    position: relavite;
    background: #f5d7bf;
    padding: 10px;
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
  margin: 0;
  width: 1000px;
  height: 100%;
  display: block;
  z-index: 99999;
  .context {
    text-aling: center;
    position: absolute;
    top: 0;
    right: 83px;
    margin-top: 50px;
  }

  button {
    background: transparent;
    border: none;
  }
  button:hover {
    transform: scale(1.5);
  }
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
  header {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    border-bottom: 2px solid black;
    top: 100px;
  }
  header p {
    font-size: 25px;
  }
`

const TableElement = (props) => {
  const openModal = useContext(ModalContext)
  const dispatch = useDispatch()
  const [check, setCheck] = useState(false)
  const isChoosen = useSelector((state) => state.productCardReducer.isChoosen)
  const typeOfDish = useSelector((state) => state.productCardReducer.typeOfDish)
  const listOfProduct = useSelector(
    (state) => state.productCardReducer.listOfProduct
  )

  const handleSavetheDish = () => {
    let totalWeigth = listOfProduct.reduce((a, b) => a + Number(b.Weigth), 0)
    let totalCalories = listOfProduct.reduce((a, b) => a + Number(b.calorie), 0)
    let totalCalorie = (totalCalories * 100) / totalWeigth
    if (!isChoosen) {
      dispatch(
        userMenu({
          dish: listOfProduct,
          calorie: totalCalorie,
          type: typeOfDish,
        })
      )
      dispatch(cleanState(false))
      console.log(check)
      setCheck(false)
    }
  }

  const handleCancel = () => {
    dispatch(cleanState(false))

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
          <div className="context">You dont add any product </div>
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
    </div>
  )
}

const TableList = () => {
  const loading = useSelector((state) => state.productCardReducer.loading)

  return (
    <StyledTable>
      <div>{loading === 'pending' && <Spinner />}</div>
      <div>{loading === 'fulfilled' && <TableElement />}</div>
    </StyledTable>
  )
}
export default TableList
