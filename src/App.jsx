import React from 'react'
import { Provider } from 'react-redux'
import store from 'store/initStore'
import GlobalModalProvider from 'HOC/GlobalModalProvider'
import { BrowserRouter } from 'react-router-dom'
import RootRouter from 'Route/RootRouter'

import GlobalStyledProvide from 'HOC/GlobalStyled'

const App = () => {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <GlobalStyledProvide />
        <GlobalModalProvider>
          <RootRouter />
        </GlobalModalProvider>
      </BrowserRouter>
    </Provider>
  )
}

export default App
