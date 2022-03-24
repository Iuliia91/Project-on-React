import React, { useContext, useEffect, useState } from 'react'
import styled from 'styled-components'
import { useDispatch, useSelector } from 'react-redux'
import { typeOfDish } from 'store/actions/recipeCard'
import { ModalContext } from 'HOC/GlobalModalProvider'

const StyledDropDownMenu = styled.div`

  p {
    font-weight: bold;
    font-size: 20px;

    color: rgb(194, 62, 71);
  }

  p:hover {
    transform: scale(1.2);
  }
  type_dish {
    font-size: 20px;
    color: blue;
  }

  .menu
  width: 0px
  height: 560px
  background: #ff5500
  position: absolute
  transition: 0.3s ease-in-out 0.1s
  &.move
    left: 0px
    width: 240px
    transition: 0.3s ease-in-out 0.1s
    background: #ff5500
`

const StyledDropDownItem = styled.div`
  position: absolute;

  //background: rgb(168, 214, 227);
  background: #ece9e0;
  padding: 20px;
  border-radius: 20px;
  box-shadow: -10px 10px 10px rgba(0, 0, 0, 0.5);

  width: 0px
  height: 560px
  background: #ff5500
  position: absolute
  transition: 0.3s ease-in-out 0.1s
  &.move
    left: 0px
    width: 240px
    transition: 0.3s ease-in-out 0.1s
    background: #ff5500
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
              dispatch(typeOfDish(item))
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
            <p>{props.text}</p>
          </div>
          <div className="menu">{open && <DropDownItem />}</div>
        </div>
      )}
      {areae && <p className="type_dish">{isChoosen}</p>}
    </StyledDropDownMenu>
  )
}

export default DropDownMenu
