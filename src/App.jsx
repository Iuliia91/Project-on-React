import React from 'react'
import { Provider } from 'react-redux'
import { store, persist } from 'store/initStore'
import { PersistGate } from 'redux-persist/integration/react'
import GlobalModalProvider from 'HOC/GlobalModalProvider'
import { BrowserRouter } from 'react-router-dom'
import RootRouter from 'Route/RootRouter'

import GlobalStyledProvide from 'HOC/GlobalStyled'

const App = () => {
  return (
    <Provider store={store}>
      <PersistGate persistor={persist} loading={null}>
        <BrowserRouter>
          <GlobalStyledProvide />
          <GlobalModalProvider>
            <RootRouter />
          </GlobalModalProvider>
        </BrowserRouter>
      </PersistGate>
    </Provider>
  )
}

export default App
