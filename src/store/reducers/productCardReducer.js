import { CARD_LIST_ACTIONS } from 'store/actionTypes'
import {
  recipeCard,
  editItem,
  addProduct,
  deleteItem,
  typeOfDish,
  cleanState,
  userMenu,
  deletRecipeFromSnackList,
  deletRecipeFromBrakfastList,
  deletRecipeFromDinnerList,
  deletRecipeFromLunchList,
} from 'store/actions/recipeCard'
import { store } from 'store/initStore'
import { createReducer } from '@reduxjs/toolkit'

const initialState = {
  product: null,
  listOfProduct: [],
  typeOfDish: '',
  userMenuOfList: [],
  isEdited: false,
  isChoosen: false,
  loading: 'loading',
  breakfast: [],
  snack: [],
  lunch: [],
  dinner: [],
  getSomethingWrong: false,
}

const productCardReducer = createReducer(initialState, (builder) => {
  builder
    .addCase(recipeCard, (state, action) => {
      if (!state.productCardReducer) state.productCardReducer = []
      state.productCardReducer.push(action.payload)
    })

    .addCase(addProduct.pending, (state, action) => {
      state.loading = 'pending'
      state.getSomethingWrong = false
    })
    .addCase(addProduct.fulfilled, (state, action) => {
      state.loading = 'fulfilled'
      state.getSomethingWrong = false

      state.listOfProduct.push(action.payload)
    })
    .addCase(addProduct.rejected, (state, action) => {
      state.loading = 'fulfilled'

      state.getSomethingWrong = true
    })
    .addCase(deleteItem, (state, action) => {
      const newlistofProduct = [...state.listOfProduct]
      newlistofProduct.splice(action.payload, 1)

      state.listOfProduct = newlistofProduct
    })

    .addCase(editItem, (state, action) => {
      const { index, weigth } = action.payload

      const newlistofProduct = [...state.listOfProduct]

      newlistofProduct.find((product, productIndex) => {
        if (productIndex === index) {
          product.Weigth = weigth
        }
      })
      state.listOfProduct = newlistofProduct
    })

    .addCase(typeOfDish, (state, action) => {
      state.typeOfDish = action.payload
      state.isChoosen = true
    })
    .addCase(userMenu, (state, action) => {
      state.isChoosen = false
      if (action.payload.type == 'Snack') {
        state.snack.push(action.payload)
      } else if (action.payload.type == 'Breakfast') {
        state.breakfast.push(action.payload)
      } else if (action.payload.type == 'Lunch') {
        state.lunch.push(action.payload)
      } else if (action.payload.type == 'Dinner') {
        state.dinner.push(action.payload)
      }

      state.listOfProduct = []
    })

    .addCase(deletRecipeFromSnackList, (state, action) => {
      let itemIndex = action.payload

      state.snack.map((item, index) => {
        if (index === itemIndex) {
          state.snack.splice(index, 1)
        }
      })
    })
    .addCase(deletRecipeFromBrakfastList, (state, action) => {
      let itemIndex = action.payload

      state.breakfast.map((item, index) => {
        if (index === itemIndex) {
          state.breakfast.splice(index, 1)
        }
      })
    })
    .addCase(deletRecipeFromDinnerList, (state, action) => {
      let itemIndex = action.payload

      state.dinner.map((item, index) => {
        if (index === itemIndex) {
          state.dinner.splice(index, 1)
        }
      })
    })
    .addCase(deletRecipeFromLunchList, (state, action) => {
      let itemIndex = action.payload

      state.lunch.map((item, index) => {
        if (index === itemIndex) {
          state.lunch.splice(index, 1)
        }
      })
    })

    .addCase(cleanState, (state, action) => {
      state.typeOfDish = ''
      state.isChoosen = action.payload
    })

  /* .addMatcher(
      (action) => {
        return action.payload && typeof action.payload.setListModifyed
      },
      (state) => {
        state.isEdited = true
      }
    )*/
})

export default productCardReducer
