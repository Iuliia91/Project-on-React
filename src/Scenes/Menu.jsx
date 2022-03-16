import React from 'react'
import styled from 'styled-components'
import { useDispatch } from 'react-redux'
import { useSelector } from 'react-redux'
import exampleOfMenueReducer from 'store/reducers/exampleOfMenueReducer'

const StyledMenu = styled.div``

const Menu = () => {
  const dispatch = useDispatch()
  const menu = useSelector((store) => store.exampleOfMenueReducer.listOFMenu)
  console.log(menu)
  return (
    <StyledMenu>
      <div>
        {menu.map((item) => {
          ;<div>
            <h1>{item.Phase}</h1>
            <p>{item.calorie}</p>
          </div>
        })}
      </div>
    </StyledMenu>
  )
}

export default Menu
