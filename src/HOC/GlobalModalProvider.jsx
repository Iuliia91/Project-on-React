import React, { useState } from 'react'
import styled from 'styled-components'
import branch from '../assets/svg/Branch.svg'
export const ModalContext = React.createContext()

const StyledGlobalModalProvider = styled.div`
  position: absolute;
  overflow: hidden;

  top: 0;
  left: 0;
  z-index: 9000;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;

  .elips {
    position: absolute;
    width: 100px;
    height: 100px;
    left: 0px;
    top: 0px;
    background: #86b472;
    opacity: 0.6;
    filter: blur(70px);
    z-index: 8000;
  }
  .elips2{
    position: absolute;
    width: 100px;
    height: 100px;
    right: 0px;
    bottom: 0px;
    background: #86b472;
    opacity: 0.6;
    filter: blur(70px);
    z-index: 5000;
  }
  img{
    position: absolute;
    top:30%;
    left:30%;
  }
  .modal {
    position:relativ;
    display: flex;
    align-items: center;
    justify-content: center;
    background:#FFFFFF;
    box-shadow: 0px 15px 50px rgba(51, 114, 25, 0.2);
    border-radius: 10px;
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
            <div className="elips" />
            <div className="elips2" />

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
