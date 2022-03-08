import React, { useContext, useRef } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import ButtonOptions from 'Components/ButtonOptions'
import styled from 'styled-components'
import { useState } from 'react'
import { useEffect } from 'react'
import { usePopper } from 'react-popper'
import Spinner from './Spinner/Spinner'
import Card from 'Components/Card/Card'
import { ModalContext } from 'HOC/GlobalModalProvider'
import { deleteItem, editItem } from 'store/actions/recipeCard'
const StyledTable = styled.div`
  margin-top: 30px;
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
`
const StyledTooltip = styled.div`
  overflow: hidden;
  position: absolute;
  top: ${(props) => props.leftValue};
  left: ${(props) => props.topValue};
  width: 10%;
  heigth: 100%;

  .tooltip_add {
    background: white;
    padding: 20px;
    border-radius: 4px;
    color: black;
  }
`

const InputNewValueWeigth = (props) => {
  const [newWeigth, setNewWeigth] = useState('')

  const dispatch = useDispatch()
  const handleEditNewWeigth = (index) => {
    dispatch(editItem({ index: props.indexValue, weigth: newWeigth }))
    props.setModal(false)
  }

  return (
    <React.Fragment>
      <input
        onChange={(e) => {
          setNewWeigth(e.target.value)
        }}
        value={newWeigth}
        placeholder="new weigth"
      />
      <ButtonOptions
        handleClick={handleEditNewWeigth}
        textInsideButton="make a change"
      />
    </React.Fragment>
  )
}

const Tooltip = (props) => {
  let topX = props.pageX + 'px'
  let leftY = props.pageY + 15 + 'px'
  console.log(topX, leftY)
  return (
    <StyledTooltip topValue={topX} leftValue={leftY}>
      <div className={props.addClassName}>
        <p>change weigth</p>
      </div>
    </StyledTooltip>
  )
}

const TableElement = (props) => {
  const [coordinataX, setcoordinataX] = useState(0)
  const [coordinataY, setcoordinataY] = useState(0)
  const [visible, setVisible] = useState(false)
  const openModal = useContext(ModalContext)
  const coords = useRef('')
  const dispatch = useDispatch()
  const listOfProduct = useSelector(
    (state) => state.productCardReducer.listOfProduct
  )
  const rect = {}
  const handleRemoveItem = (index) => {
    console.log(index)
    dispatch(deleteItem(index))
  }

  const handleChangeWeigth = (index) => {
    openModal(<InputNewValueWeigth setModal={openModal} indexValue={index} />)
  }

  const show = (Event) => {
    const { pageX, pageY } = Event

    const rect = coords.current.getBoundingClientRect()
    setcoordinataX(rect.right)
    setcoordinataY(rect.y)
    console.log(rect)
    setVisible(true)
  }

  const hidden = () => {
    setVisible(false)
  }

  return (
    <div>
      {visible && (
        <Tooltip
          pageX={coordinataX}
          pageY={coordinataY}
          addClassName={'tooltip_add'}
        />
      )}

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
              <td ref={coords}>
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
    </div>
  )
}

const TableList = (props) => {
  const loading = useSelector((state) => state.productCardReducer.loading)

  return (
    <StyledTable>
      <div>{loading === 'pending' && <Spinner />}</div>
      <div>{loading === 'fulfilled' && <TableElement />}</div>
    </StyledTable>
  )
}
export default TableList
