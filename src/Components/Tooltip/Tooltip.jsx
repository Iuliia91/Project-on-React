import React from 'react'
import styled from 'styled-components'

const StyledTooltip = styled.div`
  overflow: hidden;
  position: absolute;
  top: ${(props) => props.leftValue};
  left: ${(props) => props.topValue};
  width: 100px;
  heigth: 100px;

  .tooltip_add {
    background: white;
    padding: 20px;
    border-radius: 4px;
    color: black;
  }
`

const Tooltip = (props) => {
  let topX = props.pageX + 'px'
  let leftY = props.pageY + 10 + 'px'

  return (
    <StyledTooltip topValue={topX} leftValue={leftY}>
      <div className={props.addClassName}>
        <p>{props.tooltipText}</p>
      </div>
    </StyledTooltip>
  )
}

export default Tooltip
