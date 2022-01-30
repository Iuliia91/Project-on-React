import React, { useState } from 'react'

import styled from 'styled-components'

import RootRouter from 'Route/RootRouter'

const StyledMainLayouts = styled.div`
  background-color: rgb(223, 230, 236);
`

const MainLayouts = () => {
  return (
    <StyledMainLayouts>
      <div className="layot">
        <RootRouter />
      </div>
    </StyledMainLayouts>
  )
}

export default MainLayouts
