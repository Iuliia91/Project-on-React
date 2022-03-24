import React, { useContext, useEffect, useState } from 'react'
import styled from 'styled-components'
import { useDispatch, useSelector } from 'react-redux'
import { typeOfDish } from 'store/actions/recipeCard'
import {
  deleteItem,
  editItem,
  cleanState,
  userMenu,
} from 'store/actions/recipeCard'
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

export default InputNewValueWeigth
