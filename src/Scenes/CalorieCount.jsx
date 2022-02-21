import React, { useEffect, useState, useContext } from 'react'
import styled from 'styled-components'
import recipeCardList from 'store/selectors/recipeCardList'
import { useSelector, useDispatch } from 'react-redux'
import Card from 'Components/Card/Card'
import recipeCard from 'store/actions/recipeCard'
import { ModalContext } from 'HOC/GlobalModalProvider'
import ButtonOptions from 'Components/ButtonOptions'
import TableList from 'Components/Table'

const StyledCalorieCount = styled.div`
  .main {
    text-align: center;
    margin: auto;
  }
  .main__content {
    display: flex;
    flex-direction: column;
    margin: auto;
  }
  .buttons {
    display: flex;

    justify-content: center;
  }
`

const listOfInputValue = {
  productName: '',
  Weigth: '',
}

const CalorieCount = (props) => {
  const setModalContext = useContext(ModalContext)
  const dispatch = useDispatch()
  const [inputDate, setInputDate] = useState(listOfInputValue)
  const [listOfProduct, setListOfProduct] = useState([])

  const [editProductDate, setEditProductDate] = useState({
    isEdit: false,
    productIndex: null,
  })

  const handleRemoveClick = (index) => {
    setListOfProduct(
      listOfProduct.filter((product, productIndex) => productIndex !== index)
    )
  }

  const isFilledFields = inputDate.productName && inputDate.Weigth

  const handleSubmitForm = (e) => {
    e.preventDefault()
    if (isFilledFields) {
      if (editProductDate.isEdit) {
        const editedproduct = listOfProduct
        editedproduct.splice(editProductDate.productIndex, 1, inputDate)
        setListOfProduct(editedproduct)

        setEditProductDate({
          isEdit: false,
          productIndex: null,
        })
      } else {
        setListOfProduct((prevetState) => [...prevetState, inputDate])
      }

      setInputDate(listOfInputValue)
    }
  }
  let list = []
  const handleClean = () => {
    return setInputDate(listOfInputValue)
  }

  const handleEditClick = (product, index) => {
    setInputDate(product)
    setEditProductDate({
      isEdit: true,
      productIndex: index,
    })
  }

  const handleSaveRecipe = () => {
    listOfProduct.map((product) => list.push(product))
    dispatch(recipeCard(listOfProduct))
    setListOfProduct([])
    setModalContext(<Card cardText={list} setModal={setModalContext} />)
  }

  return (
    <StyledCalorieCount>
      <main className="main">
        <div className="main__content">
          <div>
            <form onSubmit={handleSubmitForm}>
              <input
                placeholder="Write the product name"
                onChange={(e) => {
                  setInputDate((prevState) => ({
                    ...prevState,
                    productName: e.target.value,
                  }))
                }}
                value={inputDate.productName}
              />

              <input
                placeholder="Write the weigth of product"
                onChange={(e) =>
                  setInputDate((prevState) => ({
                    ...prevState,
                    Weigth: e.target.value,
                  }))
                }
                value={inputDate.Weigth}
              />
              <div className="buttons">
                <ButtonOptions
                  type="button"
                  textInsideButton="Clean"
                  handleClick={handleClean}
                />

                <ButtonOptions
                  type="submit"
                  textInsideButton={
                    editProductDate.isEdit ? 'Edit' : 'Add product'
                  }
                  disabled={!isFilledFields}
                />
              </div>
            </form>
          </div>

          <TableList
            listOfProduct={listOfProduct}
            handleRemoveClick={handleRemoveClick}
            handleEditClick={handleEditClick}
          />
        </div>
        <button onClick={handleSaveRecipe}>Save</button>
      </main>
    </StyledCalorieCount>
  )
}

export default CalorieCount
