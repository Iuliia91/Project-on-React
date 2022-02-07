import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import recipeCardList from 'store/selectors/recipeCardList'
import { useSelector, useDispatch } from 'react-redux'
import Card from 'Components/Card/Card'
import { recipeCard } from 'store/actions/recipeCard'
const StyledCalorieCount = styled.div``

const CalorieCount = () => {
  const [textHolder1, setTextHolder1] = useState('')
  const listOfCasrd = useSelector((store) => store.cardList.cardList)

  const dispatch = useDispatch()
  console.log(listOfCasrd)
  const handleProductName = (Event) => {
    setTextHolder1(Event.target.value)
  }
  const handleAddTheCard = () => {
    dispatch(recipeCard({ id: Date.now(), product: textHolder1 }))
    setTextHolder1('')
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
            <input type="text" placeholder="gram" />
          </section>
        </form>
      </div>
      <button onClick={() => handleAddTheCard()}>add product</button>
      <div>{textHolder1}</div>
      <main></main>
    </StyledCalorieCount>
  )
}

export default CalorieCount
