import React, { useState } from 'react'
import styled from 'styled-components'
import { useDispatch, useSelector } from 'react-redux'
import exampleOfMenueReducer from 'store/reducers/exampleOfMenueReducer'
import { TYPE_OF_RECIPE } from '../scenesTypes'
import { userMenu } from 'store/actions/exampleOfMenu'
import Slider from 'react-slick'
import ListRecipes from './menuComponent/ListRecipes'
import { deletRecipeFromSnackList } from 'store/actions/recipeCard'
const StyledMenu = styled.div`
  background-color: rgb(234, 220, 126, 0.3);
  position: relative;
  height: 100%;
  width: 100%;

  header {
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
    padding: 30px 0;
    // background: #b0a0cf;
    background: linear-gradient(158.25deg, #e1ecdc 27.9%, #ffffff 90.49%);
    box-shadow: 0px 15px 50px rgba(51, 114, 25, 0.2);
    h1:hover {
      color: red;
    }

    & h1 {
      margin: 0;
      color: 561C64;
    }
  }

  main {
    text-align: center;
    margin: auto;
    width: 80%;
  }
`

const Menu = () => {
  const [snackOpen, setSnackOpen] = useState(false)
  const [breakfastOpen, setBreakfastOpen] = useState(true)
  const [lunchOpen, setLuchOpen] = useState(false)
  const [dinnerOpen, setDinnerOpen] = useState(false)
  const recipes = useSelector(
    (store) => store.productCardReducer.userMenuOfList
  )
  const dispatch = useDispatch()
  const snackListOdRecipes = useSelector(
    (store) => store.productCardReducer.snack
  )
  const breakfastListOdRecipes = useSelector(
    (store) => store.productCardReducer.breakfast
  )

  const lunchListOdRecipes = useSelector(
    (store) => store.productCardReducer.lunch
  )
  const dinnerListOdRecipes = useSelector(
    (store) => store.productCardReducer.dinner
  )
  console.log(dinnerListOdRecipes)
  return (
    <StyledMenu>
      <div container>
        <header>
          {' '}
          <h1
            onClick={() => {
              setBreakfastOpen(!breakfastOpen)
              setSnackOpen(false)
              setLuchOpen(false)
              setDinnerOpen(false)
            }}
          >
            Breactfast
          </h1>
          <h1
            onClick={() => {
              setSnackOpen(!snackOpen)
              setLuchOpen(false)
              setDinnerOpen(false)
              setBreakfastOpen(false)
            }}
          >
            Snack
          </h1>
          <h1
            onClick={() => {
              setLuchOpen(!lunchOpen)
              setDinnerOpen(false)
              setBreakfastOpen(false)
              setSnackOpen(false)
            }}
          >
            Lunch
          </h1>
          <h1
            onClick={() => {
              setDinnerOpen(!dinnerOpen)
              setBreakfastOpen(false)
              setSnackOpen(false)
              setLuchOpen(false)
            }}
          >
            Dinner
          </h1>
        </header>

        <main>
          {snackOpen && (
            <ListRecipes text={'Snack'} list={snackListOdRecipes} />
          )}
          {breakfastOpen && (
            <ListRecipes text={'Breakfast'} list={breakfastListOdRecipes} />
          )}
          {lunchOpen && (
            <ListRecipes text={'Lunch'} list={lunchListOdRecipes} />
          )}
          {dinnerOpen && (
            <ListRecipes text={'Dinner'} list={dinnerListOdRecipes} />
          )}
        </main>
      </div>
    </StyledMenu>
  )
}

export default Menu
