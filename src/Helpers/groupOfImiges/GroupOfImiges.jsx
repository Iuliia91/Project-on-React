import React from 'react'
import styled from 'styled-components'
import dish from 'assets/svg/Layer 0.png'
const StyledGroupImeges = styled.div`
  margin-top: 30px;

  img {
    width: 400px;
  }
`

const GroupOfImiges = () => {
  return (
    <StyledGroupImeges>
      <img src={dish} />
    </StyledGroupImeges>
  )
}

export default GroupOfImiges
