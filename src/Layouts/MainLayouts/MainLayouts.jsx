import React, { useState } from 'react'

import InitialScenes from 'Scenes/InitialScenes'
import styled from 'styled-components'

import { ModalContext } from 'HOC/GlobalModalProvider'
import { ProgressPlugin } from 'webpack'

import RootRouter from 'Route/RootRouter'

/*const StyledMainLayouts = styled.div`
  .layot {
    background-image: url(/src/Helpers/imiges/gfb.jpg);
  }
`*/

const MainLayouts = (props) => {
  return (
    <div className="layot">
      <RootRouter />
    </div>
  )
}

export default MainLayouts
