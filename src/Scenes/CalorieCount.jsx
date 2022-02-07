import React, { useEffect, useState, useContext } from 'react'
import styled from 'styled-components'
import recipeCardList from 'store/selectors/recipeCardList'
import { useSelector, useDispatch } from 'react-redux'
import Card from 'Components/Card/Card'
import { recipeCard } from 'store/actions/recipeCard'
import { ModalContext } from 'HOC/GlobalModalProvider'
const StyledCalorieCount = styled.div``

const CalorieCount = () => {
  const setModalContext = useContext(ModalContext)
  const [textHolder1, setTextHolder1] = useState('')
  const [numberHolder1, setNumberHolder1] = useState('')
  const listOfCasrd = useSelector((store) => store.cardList.cardList)

  const dispatch = useDispatch()
  console.log(listOfCasrd)
  const handleProductName = (Event) => {
    setTextHolder1(Event.target.value)
  }
  const product = { textHolder1, numberHolder1 }
  const handleAddTheCard = () => {
    /* setModalContext(<div>{textHolder1}</div>)
     { id: Date.now(), product: textHolder1 }*/
    dispatch(recipeCard(product))
    setTextHolder1('')
  }

  const sortProduct = (listOfCasrd) => {
    listOfCasrd.map((item) => {
      item.textHolder1
    })
  }
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
      <div>{textHolder1}</div>
      <main>
        {listOfCasrd.map((item) => {
          ;<div>{item.textHolder1}</div>
        })}
      </main>
    </StyledCalorieCount>
  )
}

export default CalorieCount
