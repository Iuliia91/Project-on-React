import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import ButtonOptions from 'Components/ButtonOptions'
import styled from 'styled-components'
import { useState } from 'react'
import { useEffect } from 'react'
import Spinner from './Spinner/Spinner'

import { deleteItem } from 'store/actions/recipeCard'
const StyledTable = styled.div`
  table {
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
    padding: 10px;
  }
  td {
    background: #f5d7bf;
    padding: 10px;
  }
  .pending {
    background-color: pink;
    width: 100%;
    heigth: 100%;
  }
`
const TableElement = (props) => {
  const dispatch = useDispatch()
  const listOfProduct = useSelector(
    (state) => state.productCardReducer.listOfProduct
  )

  const handleRemoveItem = (index) => {
    console.log(index)
    dispatch(deleteItem(index))
  }

  return (
    <table>
      <thead>
        <tr>
          <th>#</th>
          <th>Product</th>
          <th>Weigth</th>
          <th>Calories</th>
          <th>Actions</th>
        </tr>
      </thead>

      <tbody>
        {listOfProduct.map((product, index) => (
          <tr key={index}>
            <td>{index + 1}</td>
            <td>{product.productName}</td>
            <td>{product.Weigth} g</td>
            <td>{product.calorie}</td>
            <td>
              {/*  <ButtonOptions
                textInsideButton="Edit"
                type="button"
                handleClick={() => {
                  console.log(product, index)
                  props.handleEditClick(product, index)
                }}
              />*/}

              <ButtonOptions
                textInsideButton="Delete"
                type="button"
                handleClick={() => {
                  handleRemoveItem(index)
                }}
              />
            </td>
          </tr>
        ))}
      </tbody>
      <tfoot>
        <tr>
          <td>
            <div>
              <p>Total{listOfProduct.length} </p>
            </div>
          </td>
          <td>
            <ButtonOptions
              textInsideButton="Save the recipe"
              type="button"
              handleClick={() => {
                handleRemoveClick
              }}
            />
            <button> </button>
          </td>
        </tr>
      </tfoot>
    </table>
  )
}

const TableList = (props) => {
  const loading = useSelector((state) => state.productCardReducer.loading)
  return (
    <StyledTable>
      <div>{loading === 'pending' && <Spinner />}</div>
      <div>
        {loading === 'fulfilled' && (
          <TableElement
            handleEditClick={() => {
              props.handleeditClick
            }}
          />
        )}
      </div>
    </StyledTable>
  )
}

export default TableList
