import React, { useState } from 'react'
import styled from 'styled-components'
import { useDispatch, useSelector } from 'react-redux'
import Slider from 'react-slick'
import {
  deletRecipeFromSnackList,
  deletRecipeFromBrakfastList,
  deletRecipeFromDinnerList,
  deletRecipeFromLunchList,
} from 'store/actions/recipeCard'
import ImigPear from 'Helpers/Pear/PearImg'
import Tomato from '../../../assets/images/TomatosPict.png'
import manyFruts from '../../../assets/images/manyFruts.png'
const StyledSncakList = styled.div`
  display: grid;
  grid-template-columns: 2fr 2fr;
  gap: 10px;
  .list {
    overflow: hidden;
    display: grid;
    grid-template-columns: 2fr 2fr;

    position: relative;

    background: white;
    box-shadow: 0px 15px 50px rgba(51, 114, 25, 0.2);
    margin: 20px auto;

    & main {
      display: flex;
      flex-direction: column;
      margin: auto;
    }
  }
  .delete_card {
    position: absolute;
    margin: 0;
    right: 0;
    top: 0;
  }

  .delete_card:hover {
    transform: scale(1.5);
  }
  headre {
    font-family: 'spartanmedium';
    font-weight: 900;
    font-size: 20px;
    color: #988a29;
    text-align: center;
    margin-top: 10px;

    & p {
      margin-right: 10px;
    }
  }
  .fruts {
    opacity: 1;

    & img {
      width: 300px;
      padding-top: 30%;
    }
  }
  .information {
    display: flex;
    felx-direction: row;
    justify-content: center;
    font-family: 'spartanmedium';
    padding: 40px 0;

    & p {
      font-size: 20px;
      margin: 0;
      padding: 0;
      padding-right: 5px;
      color: red;
    }
  }

  span {
    color: red;
    font-size: 25px;
    padding-left: 20px;
  }
`
const StyledCardRecipes = styled.div`
  // background: linear-gradient(158.25deg, #e1ecdc 27.9%, #ffffff 90.49%);
  // box-shadow: 0px 15px 50px rgba(51, 114, 25, 0.2);

  .contect_card {
    padding: 0 20px;
    z-index: 99999;
  }
  .item {
    display: flex;
    felx-direction: row;
    justify-content: space-between;
    font-family: 'spartanmedium';
    font-weight: 300;
    color: #745da0;
    line-height: 20px;
  }
`

const StyledInformation = styled.div`
  position: absolute;
  width: 50%;
  background: linear-gradient(158.25deg, #e1ecdc 27.9%, #ffffff 90.49%);
  box-shadow: 0px 15px 50px rgb(51 114 25 / 20%);
  top: 30%;
  left: 30%;

  p {
    padding: 100px;
    color: red;
    font-family: 'spartanmedium';
    font-weight: 100;
    font-size: 30px;
    line-height: 20px;
  }
`
const ListRecipes = (props) => {
  const dispatch = useDispatch()
  const arr = props.list
  const titel = props.text
  const handleDeleteItemFromList = (item, index) => {
    if (item.type === 'Snack') {
      dispatch(deletRecipeFromSnackList(index))
    } else if (item.type === 'Dinner') {
      dispatch(deletRecipeFromDinnerList(index))
    } else if (item.type === 'Breakfast') {
      dispatch(deletRecipeFromBrakfastList(index))
    } else if (item.type === 'Lunch') {
      dispatch(deletRecipeFromLunchList(index))
    }
    return
  }

  const Item = (props) => {
    if (arr.length > 0) {
      return (
        <StyledSncakList>
          {' '}
          {arr.map((item, index) => (
            <div className="list">
              <div className="fruts">
                <img src={manyFruts} />
              </div>

              <main>
                <p
                  onClick={() => handleDeleteItemFromList(item, index)}
                  className="delete_card"
                >
                  X
                </p>
                <headre>
                  <p>
                    {titel}
                    <span>{index + 1}</span>
                  </p>
                </headre>
                <StyledCardRecipes>
                  {item.dish.map((item, index) => (
                    <div className="contect_card">
                      <div className="contect_card item">
                        {' '}
                        <div>{index + 1}.</div>
                        <div>{item.productName} </div>
                        <div>{item.Weigth}g</div>
                      </div>
                    </div>
                  ))}
                </StyledCardRecipes>
                <div className="information">
                  <p>{item.calorie}cal</p> / 100g
                </div>
              </main>
            </div>
          ))}
        </StyledSncakList>
      )
    } else if (arr.length === 0) {
      return (
        <StyledInformation>
          <p>You dont have any recipe!</p>
        </StyledInformation>
      )
    }
  }

  return (
    <React.Fragment>
      <Item />
    </React.Fragment>
  )
}

export default ListRecipes
