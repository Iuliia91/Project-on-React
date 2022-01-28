import React, { useState } from 'react'
import styled from 'styled-components'

export const ModalContext = React.createContext()

const StyledGlobalModalProvider = styled.div`
  position: absolute;
  z-index: 1000;
  top: 0;
  left: 0;

  .modal {
    background-color: rgb(199, 134, 134, 0.5);
    width: 400px;
    height: 400px;
    position: absolute;
  }
`

const GlobalModalProvider = (props) => {
  const [modalContext, setModalContext] = useState()

  return (
    <React.Fragment>
      {!!modalContext && (
        <StyledGlobalModalProvider>
          <div className="modal">{modalContext}</div>
        </StyledGlobalModalProvider>
      )}

      <ModalContext.Provider value={setModalContext}>
        {props.children}
      </ModalContext.Provider>
    </React.Fragment>
  )
}

export default GlobalModalProvider
