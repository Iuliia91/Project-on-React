import React, { useContext, useEffect, useState } from 'react'
import styled from 'styled-components'
import { useDispatch, useSelector } from 'react-redux'
import { typeOfDish } from 'store/actions/recipeCard'
import { ModalContext } from 'HOC/GlobalModalProvider'

const StyledDropDownMenu = styled.div`
  div {
    margin-top: 20px;
  }
  p {
    font-size: 25px;
    font-weight: 100;
    color: rgb(194, 62, 71);
  }
  type_dish {
    font-size: 20px;
    color: blue;
  }
`

const StyledDropDownItem = styled.div`
  position: absolute;
  top: 95px;
  right: -50px;
  //background: rgb(168, 214, 227);
  background: #ece9e0;
  padding: 20px;
  border-radius: 20px;
  box-shadow: -10px 10px 10px rgba(0, 0, 0, 0.5);

  p {
    padding: 0;
  }
  p:hover {
    transform: scale(1.2);
    background: rgb(218, 225, 227, 0.9);
    color: rgb(194, 62, 71);
  }
`

const DropDownMenu = (props) => {
  const setModalContext = useContext(ModalContext)
  const [show, setShow] = useState(true)
  const [open, setOpen] = useState(false)
  const [areae, setarea] = useState(false)
  const [isChoosen, setIsChoosen] = useState()

  const elements = props.children
  const dispatch = useDispatch()
  const handleChoosenType = (item) => {
    setIsChoosen(item)
    setarea(true)
    setOpen(false)
    setShow(false)
  }

  const DropDownItem = () => {
    return (
      <StyledDropDownItem>
        {elements.map((item, index) => (
          <p
            onClick={(e) => {
              handleChoosenType(item)
              dispatch(typeOfDish({ items: item }))
            }}
          >
            {item}
          </p>
        ))}
      </StyledDropDownItem>
    )
  }
  return (
    <StyledDropDownMenu>
      {' '}
      {show && (
        <div>
          {' '}
          <div
            onClick={() => {
              setOpen(!open)
            }}
          >
            {props.text}
          </div>
          {open && <DropDownItem />}
        </div>
      )}
      {areae && <p className="type_dish">{isChoosen}</p>}
    </StyledDropDownMenu>
  )
}

export default DropDownMenu
