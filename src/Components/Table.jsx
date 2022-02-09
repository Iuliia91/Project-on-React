import React from 'react'
import ButtonOptions from 'Components/ButtonOptions'
const TableList = (props) => {
  return (
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
            <td>{product.Weigth * 20}</td>
            <td>
              ||||||\<button>Edit</button>
              111111111111111111111111111111111111111111111111111111{' '}
              <button
                onClick={() => {
                  props.handleRemoveClick(index)
                }}
              >
                Delete
              </button>
            </td>
          </tr>
        ))}
      </tbody>
      <tfoot>
        <tr>
          <td>Total</td>

          <td>{props.listOfProduct.length}</td>

          <td>Save</td>
        </tr>
      </tfoot>
    </table>
  )
}

export default TableList
