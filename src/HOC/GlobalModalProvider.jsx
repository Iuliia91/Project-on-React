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
    box-shadow: -20px 20px 40px rgba(0, 0, 0, 0.5);
    background: linear-gradient(
      to top left,
      powderblue,
      rgb(236, 233, 224, 0.9)
    );

    border-radius: 20px;
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
          <div className="modal">
            <div className="border">{modalContext}</div>
          </div>
        </StyledGlobalModalProvider>
      )}

      <ModalContext.Provider value={setModalContext}>
        {props.children}
      </ModalContext.Provider>
    </React.Fragment>
  )
}

export default GlobalModalProvider
