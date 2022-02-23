import { CARD_LIST_ACTIONS } from 'store/actionTypes'
import { recipeCard, getProductCalorie } from 'store/actions/recipeCard'
import { createReducer } from '@reduxjs/toolkit'

const initialState = {
  productCardReducer: null,
  isEdited: false,
}

const productCardReducer = createReducer(initialState, (builder) => {
  builder
    .addCase(recipeCard, (state, action) => {
      if (!state.productCardReducer) state.productCardReducer = []
      state.productCardReducer.push(action.payload)
    })
    .addCase(getProductCalorie, (state, action) => {
      if (isFilledFields) {
        if (editProductDate.isEdit) {
          const editedproduct = listOfProduct
          editedproduct.splice(editProductDate.productIndex, 1, inputDate)
          setListOfProduct(editedproduct)

          setEditProductDate({
            isEdit: false,
            productIndex: null,
          })
        } else {
          setListOfProduct((prevetState) => [...prevetState, inputDate])
        }
      }
    })
    .addMatcher(
      (action) => {
        return action.payload && typeof action.payload.setListModifyed
      },
      (state) => {
        state.isEdited = true
      }
    )
})

export default productCardReducer
