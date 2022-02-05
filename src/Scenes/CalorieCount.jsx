import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import recipeCardList from 'store/selectors/recipeCardList'
import { useSelector, useDispatch } from 'react-redux'

const StyledCalorieCount = styled.div``

const CalorieCount = () => {
  const [textHolder, setTextHolder] = useState()

  /*const recipeList = useSelector(recipeCardList)
  const dispatch = useDispatch()*/

  const handleProductName = (Event) => {
    setTextHolder(Event.target.value)
  }
  /* <button onClick={() => {}}>Add recipe</button>*/
  console.log(setTextHolder)
  return (
    <StyledCalorieCount>
      <div>
        <form>
          <section>
            <input
              onChange={handleProductName}
              type="text"
              placeholder="write the product name"
              value={textHolder}
            />
            <input type="text" placeholder="gram" />
          </section>
        </form>
      </div>

      <div>{textHolder}</div>
    </StyledCalorieCount>
  )
}

export default CalorieCount
