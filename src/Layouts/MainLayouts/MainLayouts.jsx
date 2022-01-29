import React, { useState } from 'react'

import InitialScenes from 'Scenes/InitialScenes'
import styled from 'styled-components'

import { ModalContext } from 'HOC/GlobalModalProvider'
import { ProgressPlugin } from 'webpack'

import RootRouter from 'Route/RootRouter'

const StyledMainLayouts = styled.div`
  background-color: rgb(223, 230, 236);
`

const MainLayouts = (props) => {
  return (
    <div className="layot">
      <InitialScenes />
    </div>
  )
}

export default MainLayouts
