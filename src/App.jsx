import React from 'react'
import Mainlayouts from 'Layouts/MainLayouts/Mainlayouts'
import GlobalModalProvider from 'HOC/GlobalModalProvider'
import { BrowserRouter } from 'react-router-dom'

const App = () => {
  return (
    <BrowserRouter>
      <GlobalModalProvider>
        <Mainlayouts />
      </GlobalModalProvider>
    </BrowserRouter>
  )
}

export default App
