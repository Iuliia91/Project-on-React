import React, { useEffect, useState, useContext } from 'react'
import styled from 'styled-components'
import recipeCardList from 'store/selectors/recipeCardList'
import { useSelector, useDispatch } from 'react-redux'
import Card from 'Components/Card/Card'
import recipeCard from 'store/actions/recipeCard'
import { ModalContext } from 'HOC/GlobalModalProvider'
import ButtonOptions from 'Components/ButtonOptions'
import TableList from 'Components/Table'
import axios from 'axios'
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
  calorie: '',
}

const CalorieCount = (props) => {
  const setModalContext = useContext(ModalContext)
  const dispatch = useDispatch()
  const [inputDate, setInputDate] = useState(listOfInputValue)
  const [listOfProduct, setListOfProduct] = useState([])
  const [calorCalue, setCalorValue] = useState()
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

  const options = {
    method: 'GET',
    url: 'https://food-nutrition-information.p.rapidapi.com/foods/search',
    params: {
      query: `${inputDate.productName}`,
    },
    headers: {
      'x-rapidapi-host': 'food-nutrition-information.p.rapidapi.com',
      'x-rapidapi-key': 'd891d3ad3cmshd44c450c381af3fp14e2fcjsn300b575d9d12',
    },
  }
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

      axios
        .request(options)
        .then(function (response) {
          console.log(response.data.foods[0].foodNutrients[3].value)
          setCalorValue(response.data.foods[0].foodNutrients[3].value)

          console.log(response)
        })
        .catch(function (error) {
          console.log(error)
        })

      setTimeout(setInputDate(listOfInputValue), 1000)
      /* */
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

  /* const options = {
    method: 'GET',
    url: 'http://localhost:3000/recipes?userid=3',
  }*/
  const handleCalorieValue = () => {
    /*listOfProduct.map((product) => list.push(product))*/
  }

  const handleSaveRecipe = () => {
    dispatch(recipeCard(listOfProduct))
    console.log(listOfProduct)
    setListOfProduct([])
    setModalContext(
      <Card cardText={listOfProduct} setModal={setModalContext} />
    )
  }
  console.log(inputDate)
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
                  handleClick={handleSubmitForm}
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
            handleEditClick={handleCalorieValue}
          />
        </div>
        <button onClick={handleSaveRecipe}>Save</button>
        <div>{calorCalue}</div>
      </main>
    </StyledCalorieCount>
  )
}

export default CalorieCount
