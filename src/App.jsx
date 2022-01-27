import React from 'react'
import Mainlayouts from 'Layouts/MainLayouts/Mainlayouts'
import GlobalModalProvider from 'HOC/GlobalModalProvider'

const App = () => {
  return (
    <GlobalModalProvider>
      <Mainlayouts />
    </GlobalModalProvider>
  )
}

export default App
