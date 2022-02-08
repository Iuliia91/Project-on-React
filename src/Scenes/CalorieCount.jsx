import React, { useEffect, useState, useContext } from 'react'
import styled from 'styled-components'
import recipeCardList from 'store/selectors/recipeCardList'
import { useSelector, useDispatch } from 'react-redux'
import Card from 'Components/Card/Card'
import { recipeCard } from 'store/actions/recipeCard'
import { ModalContext } from 'HOC/GlobalModalProvider'
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

  const handleSubmitForm = (e) => {
    e.preventDefault()
    setListOfProduct((prevetState) => [...prevetState, inputDate])
    setInputDate(listOfInputValue)
  }
  console.log(listOfProduct)
  return (
    <StyledCalorieCount>
      <div>
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
      <button onClick={() => handleAddTheCard()}>add product</button>

      <main>
        <div>
          <div>
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

              <tbody></tbody>
            </table>
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
                    Weigth: `${e.target.value} g`,
                  }))
                }
                value={inputDate.Weigth}
              />
              <div>
                <button tyte="reset">Clean</button>
                <button type="submit">Add product</button>
              </div>
            </form>
          </div>
        </div>
      </main>
    </StyledCalorieCount>
  )
}

export default CalorieCount
