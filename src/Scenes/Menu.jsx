import React from 'react'
import styled from 'styled-components'
import { useDispatch } from 'react-redux'
import { useSelector } from 'react-redux'
import exampleOfMenueReducer from 'store/reducers/exampleOfMenueReducer'
import { TYPE_OF_RECIPE } from './scenesTypes'
const StyledMenu = styled.div`
  max-width: 1200px;
  margin: auto;
  padding-top: 20px;
  /* table {
    width: 90%;
    font-family: 'Lucida Sans Unicode', 'Lucida Grande', Sans-Serif;
    text-align: left;
    border-collapse: separate;
    border-spacing: 5px;
    background: #ece9e0;
    color: #656665;
    border: 16px solid #ece9e0;
    border-radius: 20px;
    margin-bottom: 20px;

    margin-left: 30px;
  }
  tr {
    display: flex;
    justify-content: space-around;
  }*/
`
{
  /* <div>
      {menu.map((item, index) => (
          <React.Fragment>
            <table>
              <thead>
                <tr>
                  <h2>{item.Phase} </h2>
                  <h3>
                    {item.calorie.min}cal {item.calorie.max}
                  </h3>
                  <h3></h3>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>breakfast</td>

                  <td>{item.breakfast}</td>
                </tr>
                <tr>
                  <td>snack</td>

                  <td>{item.snack}</td>
                </tr>
                <tr>
                  <td>lunch</td>
                  <td>{item.lunch}</td>
                </tr>
                <tr>
                  <td>snack</td>
                  <td>{item.snack}</td>
                </tr>
                <tr>
                  <td>dinner</td>
                  <td>{item.dinner}</td>
                </tr>
              </tbody>
            </table>
          </React.Fragment>
        ))}
      </div>*/
}

const TypeOfMenuRecipe = () => {
  const recipes = useSelector(
    (store) => store.productCardReducer.userMenuOfList
  )

  const b = recipes
  const itemOfRecipeBreakfast = recipes.map((item) => {
    const arr = []
    if (item.type.items === TYPE_OF_RECIPE.breakfast) {
      arr.push(item)
    }

    return arr
  })

  const itemOfRecipeSnack = recipes.map((item) => {
    const arr = []
    if (item.type.items === TYPE_OF_RECIPE.snack) {
      arr.push(item)
    }

    return arr
  })

  const itemOfRecipeLunch = recipes.map((item) => {
    const arr = []
    if (item.type.items == TYPE_OF_RECIPE.lunch) {
      console.log(item)
      arr.push(item)
    } else if (item.lenght === 0) {
      return
    }

    return arr
  })

  const itemOfRecipeDinner = recipes.map((item) => {
    const arr = []
    if (item.type.items === TYPE_OF_RECIPE.dinner) {
      arr.push(item)
    }

    return arr
  })

  console.log(b)
  return <div>hi</div>
}
const Menu = () => {
  const dispatch = useDispatch()
  const recipes = useSelector((store) => store.productCardReducer.listOFMenu)

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
