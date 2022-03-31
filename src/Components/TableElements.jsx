import React, { useContext, useEffect, useState } from 'react'
import { ModalContext } from 'HOC/GlobalModalProvider'
import Tooltip from './Tooltip/Tooltip'
import styled from 'styled-components'
import { useDispatch, useSelector } from 'react-redux'

import { deleteItem, cleanState } from 'store/actions/recipeCard'
import ButtonOptions from 'Components/ButtonOptions'
import InputNewValueWeigth from 'Components/changeWeightOfProduct/InputNewValueWeigth'
const TableElements = (props) => {
  const [coordinataX, setcoordinataX] = useState(0)
  const [coordinataY, setcoordinataY] = useState(0)
  const [visible, setVisible] = useState(false)
  const dispatch = useDispatch()
  const listOfProduct = useSelector(
    (state) => state.productCardReducer.listOfProduct
  )
  const openModal = useContext(ModalContext)
  const handleRemoveItem = (index) => {
    dispatch(deleteItem(index))
  }

  const handleChangeWeigth = (index) => {
    openModal(
      <InputNewValueWeigth
        setModal={openModal}
        setModalContext={openModal}
        indexValue={index}
      />
    )
  }

  const show = (Event) => {
    let rect = Event.target.getBoundingClientRect()

    setcoordinataX(rect.right)
    setcoordinataY(rect.y)

    setTimeout(() => setVisible(true), 0)
  }

  const hidden = () => {
    setVisible(false)
  }
  //ref={coords}
  //handleSaveRecipies
  return (
    <div>
      {visible && (
        <Tooltip
          pageX={coordinataX}
          pageY={coordinataY}
          tooltipText="change weigth"
          addClassName={'tooltip_add'}
        />
      )}{' '}
      <table>
        <thead>
          <tr>
            <th>#</th>
            <th>Product</th>
            <th>Weigth</th>
            <th>Calories</th>
            <th>Actions</th>
          </tr>
          <tr>{props.typeOfDish}</tr>
        </thead>

        <tbody>
          {listOfProduct.map((product, index) => (
            <tr key={index}>
              <td>{index + 1}</td>
              <td>{product.productName}</td>
              <td>
                <button
                  className="button_weigth"
                  onMouseEnter={(e) => {
                    show(e)
                  }}
                  onMouseLeave={hidden}
                  onClick={() => {
                    handleChangeWeigth(index)
                  }}
                >
                  {product.Weigth} g
                </button>
              </td>

              <td>{product.calorie}</td>
              <td>
                {(product.Weigth * product.calorie) / 100}
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
            <td colspan="5">
              <button onClick={props.handleSaverecipe}>Save</button>
            </td>
          </tr>
        </tfoot>
      </table>
    </div>
  )
}
export default TableElements
