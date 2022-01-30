import React from 'react'

import GlobalModalProvider from 'HOC/GlobalModalProvider'
import { BrowserRouter } from 'react-router-dom'
import RootRouter from 'Route/RootRouter'

const App = () => {
  return (
    <BrowserRouter>
      <GlobalModalProvider>
        <RootRouter />
      </GlobalModalProvider>
    </BrowserRouter>
  )
}

export default App
