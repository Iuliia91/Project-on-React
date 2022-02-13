import { createAction } from '@reduxjs/toolkit'
import { CARD_LIST_ACTIONS } from 'store/actionTypes'

const recipeCard = createAction(CARD_LIST_ACTIONS.list)

export default recipeCard
