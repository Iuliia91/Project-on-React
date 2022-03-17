import React from 'react'
import styled from 'styled-components'
import { useDispatch } from 'react-redux'
import { useSelector } from 'react-redux'
import exampleOfMenueReducer from 'store/reducers/exampleOfMenueReducer'

const StyledMenu = styled.div`
  margin: auto;
  padding-top: 20px;
  table {
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
  }
`

const Menu = () => {
  const dispatch = useDispatch()
  const menu = useSelector((store) => store.exampleOfMenueReducer.listOFMenu)
  console.log(menu)
  return (
    <StyledMenu>
      <div>
        {menu.map((item, index) => (
          <React.Fragment>
            <table>
              <thead>
                <tr>
                  <h2>{item.Phase} </h2>
                  <h3>{item.calorie}</h3>
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
      </div>
    </StyledMenu>
  )
}

export default Menu
