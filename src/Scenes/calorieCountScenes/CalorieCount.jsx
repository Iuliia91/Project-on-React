import React, { useEffect, useState, useContext } from 'react'
import styled from 'styled-components'
import FormInCalorieCount from '../calorieCountScenes/componentsCalorieCount/FormInCalorieCount'
import { useSelector, useDispatch } from 'react-redux'
import TableList from '../calorieCountScenes/componentsCalorieCount/Table'
import GroupOfImiges from 'Helpers/groupOfImiges/GroupOfImiges'

const StyledCalorieCount = styled.div`
  background: #ffffff;
  margin: auto;
  .main {
    margin: 0;

    text-align: center;
    margin: auto;
    width: 80%;
  }

  .block_form {
    display: flex;
    margin: auto;
  }
  .main__content {
    display: flex;
    flex-direction: column;

    margin: auto;
  }
  .formik_button {
    display: flex;

    justify-content: center;
    margin: auto;
    padding-top: 20px;
  }
  .form_block {
    margin: auto;
    background: linear-gradient(158.25deg, #e1ecdc 27.9%, #ffffff 90.49%);
    box-shadow: 0px 15px 50px rgba(51, 114, 25, 0.2);
    border-radius: 10px;
  }
  .form {
    //position: absolute;
    padding: 50px;
    z-index: 99999;
    //
  }
  button {
    padding: 10px;
    margin-right: 20px;
  }
`

const CalorieCount = () => {
  return (
    <StyledCalorieCount>
      <main className="main">
        <div className="block_form">
          <GroupOfImiges />
          <div className="form_block">
            <div className="form">
              <FormInCalorieCount />
            </div>
          </div>
        </div>

        <div className="main__content">
          <TableList />
        </div>
      </main>
    </StyledCalorieCount>
  )
}

export default CalorieCount
