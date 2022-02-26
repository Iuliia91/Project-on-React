import React, { useEffect, useState, useContext } from 'react'
import styled from 'styled-components'
import { getProductCalorie } from 'store/actions/recipeCard'
import { useSelector, useDispatch } from 'react-redux'
import Card from 'Components/Card/Card'
import { recipeCard, getCalorieCount } from 'store/actions/recipeCard'
import { ModalContext } from 'HOC/GlobalModalProvider'
import ButtonOptions from 'Components/ButtonOptions'
import TableList from 'Components/Table'
import axios from 'axios'
import FormikInput from 'Components/formikFields/FormikFields'
import { Formik, Form, Field, useFormik } from 'formik'
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

  const [calorValue, setCalorValue] = useState()
  const [editProductDate, setEditProductDate] = useState({
    isEdit: false,
    productIndex: null,
  })

  const [products, setProducts] = useState([])
  const handleRemoveClick = (index) => {
    setListOfProduct(
      listOfProduct.filter((product, productIndex) => productIndex !== index)
    )
  }

  const isFilledFields = inputDate.productName && inputDate.Weigth
  console.log()
  const handleSubmitForm = (e) => {
    e.preventDefault(listOfProduct)
    if (isFilledFields) {
      if (editProductDate.isEdit) {
        dispatch(getCalorieCount(inputDate.productName))
      }
    }

    /* if (isFilledFields) {
     
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
    }*/
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
  console.log(products)

  return (
    <StyledCalorieCount>
      <main className="main">
        <div className="main__content">
          <Formik
            initialValues={{ productName: '', Weigth: '' }}
            onSubmit={(formValues) => {
              setProducts((prevState) => [...prevState, formValues])

              console.log(formValues)
            }}
          >
            <Form>
              <FormikInput
                name="productName"
                placeholder="Write the product name"
              />
              <FormikInput
                name="Weigth"
                placeholder="Write the weigth of product"
              />
              <ButtonOptions
                type="submit"
                /* handleClick={handleSubmitForm}*/
                textInsideButton={'Add product'}
              />
            </Form>
          </Formik>

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
        <div>{calorValue}</div>
      </main>
    </StyledCalorieCount>
  )
}

export default CalorieCount
