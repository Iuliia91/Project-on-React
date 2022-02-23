import React from 'react'
import ButtonOptions from 'Components/ButtonOptions'
import styled from 'styled-components'

const StyledTable = styled.div`
  table {
    font-family: 'Lucida Sans Unicode', 'Lucida Grande', Sans-Serif;
    text-align: left;
    border-collapse: separate;
    border-spacing: 5px;
    background: #ece9e0;
    color: #656665;
    border: 16px solid #ece9e0;
    border-radius: 20px;
    margin: auto;
  }
  th {
    font-size: 18px;
    padding: 10px;
  }
  td {
    background: #f5d7bf;
    padding: 10px;
  }
`

const TableList = (props) => {
  return (
    <StyledTable>
      <table>
        <thead>
          <tr>
            <th>#</th>
            <th>Product</th>
            <th>Weigth</th>
            <th>Calories</th>
            <th>Actions</th>
          </tr>
        </thead>

        <tbody>
          {props.listOfProduct.map((product, index) => (
            <tr>
              <td>{index + 1}</td>
              <td>{product.productName}</td>
              <td>{product.Weigth} g</td>
              <td>
                {product.Weigth}*{}
              </td>
              <td>
                <ButtonOptions
                  textInsideButton="Edit"
                  type="button"
                  handleClick={() => {
                    props.handleEditClick(product, index)
                  }}
                />

                <ButtonOptions
                  textInsideButton="Delete"
                  type="button"
                  handleClick={() => {
                    props.handleRemoveClick(index)
                  }}
                />
              </td>
            </tr>
          ))}
        </tbody>
        <tfoot>
          <tr>
            <td>
              <div>
                <p>Total{props.listOfProduct.length} </p>
              </div>
            </td>
          </tr>
        </tfoot>
      </table>
    </StyledTable>
  )
}

export default TableList
