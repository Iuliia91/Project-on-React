import React, { useState } from 'react'

import InitialScenes from 'Scenes/InitialScenes'
import styled from 'styled-components'

import { ModalContext } from 'HOC/GlobalModalProvider'

/*const StyledMainLayouts = styled.div`
  .layot {
    background-image: url(/src/Helpers/imiges/gfb.jpg);
  }
`*/

const MainLayouts = () => {
  return (
    <div className="layot">
      <InitialScenes />
    </div>
  )
}

export default MainLayouts
