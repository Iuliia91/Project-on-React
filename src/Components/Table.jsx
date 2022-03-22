import React, { useContext, useRef, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import ButtonOptions from 'Components/ButtonOptions'
import styled from 'styled-components'
import { useState } from 'react'
import Spinner from './Spinner/Spinner'
import Tooltip from './Tooltip/Tooltip'
import { ModalContext } from 'HOC/GlobalModalProvider'
import { deleteItem, editItem } from 'store/actions/recipeCard'
import DropDownMenu from 'Components/dropDownMenu/DropDownMenu'

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
  button {
    width: 100%;
    border: none;
    background-color: transparent;
  }

  button:hover {
    transform: scale(1.5);
    color: red;
  }
`

const StyledModalTableElement = styled.div`
  margin-bottom: 50px;
  .close_element {
    position: absolute;
    top: 20px;
    right: 20px;
  }

  .button_close {
    border: none;
    background-color: rgb(236, 233, 224);
  }

  header {
    margin: 30px;
    font-size: 30px;
    text-align: center;
    color: black;
  }
  .formik_button {
    margin-top: 20px;
    text-align: center;
  }
  input {
    outline: none;
    border: none;
    padding: 15px 60px;
    margin: 5px;
    border-radius: 20px;
  }
`

const StyledModalInformOfRecipe = styled.div`
  margin: 0;

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

const InputNewValueWeigth = (props) => {
  const [newWeigth, setNewWeigth] = useState('')

  const dispatch = useDispatch()
  const handleEditNewWeigth = (index) => {
    dispatch(editItem({ index: props.indexValue, weigth: newWeigth }))
    props.setModal(false)
  }

  return (
    <StyledModalTableElement>
      <div className="close_element">
        <button
          className="button_close"
          onClick={() => {
            props.setModal(false)
          }}
        >
          X
        </button>
      </div>
      <header>Change the weigth</header>
      <input
        onChange={(e) => {
          setNewWeigth(e.target.value)
        }}
        value={newWeigth}
        placeholder="new weigth"
      />
      <button className="formik_button " onClick={handleEditNewWeigth}>
        Change
      </button>
    </StyledModalTableElement>
  )
}

const TableElement = (props) => {
  const [coordinataX, setcoordinataX] = useState(0)
  const [coordinataY, setcoordinataY] = useState(0)
  const [visible, setVisible] = useState(false)
  const [value, setValue] = useState(props.total)
  const openModal = useContext(ModalContext)
  const coords = useRef('')
  const dispatch = useDispatch()
  const listOfProduct = useSelector(
    (state) => state.productCardReducer.listOfProduct
  )
  const elementForDropDownMenu = ['Breakfast', 'Snack', 'Lunch', 'Dinner']
  const handleRemoveItem = (index) => {
    console.log(index)
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
  console.log(value)
  const handleSaveRecipies = (props) => {
    openModal(
      <StyledModalInformOfRecipe>
        {' '}
        <button
          className="button"
          onClick={() => {
            openModal()
          }}
        >
          X
        </button>
        <div className="context">
          <header>
            <p>Information about dish</p>{' '}
          </header>
          <div>
            <DropDownMenu
              children={elementForDropDownMenu}
              text={'Choos the type of dish'}
            />
          </div>
          <p>There are {props.total} calories in 100 grams</p>

          <button
            onClick={() => {
              openModal()
            }}
          >
            Save
          </button>
        </div>
      </StyledModalInformOfRecipe>
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

  return (
    <div>
      {visible && (
        <Tooltip
          pageX={coordinataX}
          pageY={coordinataY}
          tooltipText="change weigth"
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
          <tr>{props.typeOfDish}</tr>
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
              <button onClick={handleSaveRecipies}>Save</button>
              There are {listOfProduct.length} calories in 100 grams
            </td>
          </tr>
        </tfoot>
      </table>
    </div>
  )
}

const TableList = (props) => {
  const v = props.total
  const loading = useSelector((state) => state.productCardReducer.loading)
  console.log
  return (
    <StyledTable>
      <div>{loading === 'pending' && <Spinner />}</div>
      <div>{loading === 'fulfilled' && <TableElement />}</div>
    </StyledTable>
  )
}
export default TableList
