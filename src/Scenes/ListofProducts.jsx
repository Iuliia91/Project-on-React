import React, { useEffect } from 'react'
import styled from 'styled-components'
import recipeCard from 'store/actions/recipeCard'
import axios from 'axios'

const StyledListOfProducts = styled.div``

const ListOfProducts = (props) => {
  const options = {
    method: 'GET',
    url: 'http://localhost:3000/recipes',
  }

  return (
    <StyledListOfProducts>
      <div></div>

      <div>
        <button
          onClick={() => {
            axios
              .request(options)
              .then((response) => {
                console.log(response.data)
                /*dispatch(recipeCard(response.data))*/
              })
              .catch((error) => console.log(error))
          }}
        >
          Get App
        </button>
      </div>
    </StyledListOfProducts>
  )
}

export default ListOfProducts
