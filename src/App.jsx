import React from 'react'

import GlobalModalProvider from 'HOC/GlobalModalProvider'
import { BrowserRouter } from 'react-router-dom'
import RootRouter from 'Route/RootRouter'

import GlobalStyledProvide from 'HOC/GlobalStyled'

const App = () => {
  return (
    <BrowserRouter>
      <GlobalStyledProvide />
      <GlobalModalProvider>
        <RootRouter />
      </GlobalModalProvider>
    </BrowserRouter>
  )
}

export default App
