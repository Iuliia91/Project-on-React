import React from 'react'
import styled from 'styled-components'
import { useDispatch } from 'react-redux'
import { useSelector } from 'react-redux'
import exampleOfMenueReducer from 'store/reducers/exampleOfMenueReducer'
import { TYPE_OF_RECIPE } from './scenesTypes'
import { userMenu } from 'store/actions/exampleOfMenu'
const StyledMenu = styled.div`
  max-width: 1200px;
  margin: auto;
  padding-top: 20px;
`

const TypeOfMenuRecipe = () => {
  const recipes = useSelector(
    (store) => store.productCardReducer.userMenuOfList
  )
}
console.log(TypeOfMenuRecipe())
const Menu = () => {
  const dispatch = useDispatch()

  return (
    <StyledMenu>
      <div container>
        <h1>Day1</h1>
        <main>
          <TypeOfMenuRecipe />
        </main>
      </div>
    </StyledMenu>
  )
}

export default Menu
