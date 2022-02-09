import React, { useEffect, useState, useContext } from 'react'
import styled from 'styled-components'
import recipeCardList from 'store/selectors/recipeCardList'
import { useSelector, useDispatch } from 'react-redux'
import Card from 'Components/Card/Card'
import { recipeCard } from 'store/actions/recipeCard'
import { ModalContext } from 'HOC/GlobalModalProvider'
import ButtonOptions from 'Components/ButtonOptions'
import TableList from 'Components/Table'
const StyledCalorieCount = styled.div``

const listOfInputValue = {
  productName: '',
  Weigth: '',
}

const CalorieCount = () => {
  const setModalContext = useContext(ModalContext)
  const [textHolder1, setTextHolder1] = useState('')
  const [numberHolder1, setNumberHolder1] = useState('')
  const listOfCasrd = useSelector((store) => store.cardList.cardList)

  const dispatch = useDispatch()

  const [inputDate, setInputDate] = useState(listOfInputValue)
  const [listOfProduct, setListOfProduct] = useState([])

  const isFilledFields = inputDate.productName && inputDate.Weigth
  console.log(inputDate)
  const handleProductName = (Event) => {
    setTextHolder1(Event.target.value)
  }
  const product = { textHolder1, numberHolder1, id: Date.now() }

  const handleAddTheCard = () => {
    console.log(product)
    dispatch(recipeCard(product))
    setTextHolder1('')
    setNumberHolder1('')
  }

  const handleRemoveClick = (index) => {
    setListOfProduct(
      listOfProduct.filter((product, productIndex) => productIndex !== index)
    )
  }

  const handleSubmitForm = (e) => {
    e.preventDefault()
    if (isFilledFields) {
      setListOfProduct((prevetState) => [...prevetState, inputDate])
      setInputDate(listOfInputValue)
    }
  }
  const handle = () => {
    return setInputDate(listOfInputValue)
  }

  console.log(listOfProduct)
  return (
    <StyledCalorieCount>
      {/* <div>
        <form>
          <section>
            <input
              onChange={handleProductName}
              type="text"
              placeholder="write the product name"
              value={textHolder1}
            />
            <input
              onChange={(Event) => {
                setNumberHolder1(Event.target.value)
              }}
              type="text"
              placeholder="g"
              value={numberHolder1}
            />
          </section>
        </form>
      </div>

      <button onClick={() => handleAddTheCard()}>add product</button>*/}

      <main>
        <div>
          <div>
            <TableList
              listOfProduct={listOfProduct}
              handleRemoveClick={handleRemoveClick}
            />
          </div>
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
              <div>
                <ButtonOptions
                  type="button"
                  textInsideButton="Clean"
                  handleClick={handle}
                />

                <ButtonOptions
                  type="submit"
                  textInsideButton="Add product"
                  disabled={!isFilledFields}
                />
              </div>
            </form>
          </div>
        </div>
      </main>
    </StyledCalorieCount>
  )
}

export default CalorieCount
