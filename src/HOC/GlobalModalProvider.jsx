import React, { useState } from 'react'
import styled from 'styled-components'

export const ModalContext = React.createContext()

const StyledGlobalModalProvider = styled.div`
  position: absolute;
  position: absolute;
  top: 0;
  left: 0;
  z-index: 1000;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;

  .modal {
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: rgb(236, 233, 224, 0.7);
    border-radius: 20px;
    width: 60%;
    height: 70%;
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
