import React, { useState } from 'react'
import ButtonOptions from 'Components/ButtonOptions'
import { faUser, faHome } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import OpenWindowSingIn from 'Components/OpenWindowSingIn'
import { proposalPlugins } from '@babel/preset-env/data/shipped-proposals'
import Navigation from 'Components/Navigation'

const MainLayouts = () => {
  const [modalContext, setModalContext] = useState('')

  const changeName = (context) => {
    setModalContext(context)
  }

  return (
    <div className="layot">
      {!!modalContext && <div className="modalwindow">{modalContext}</div>}
      <Navigation />
      <div className="main">
        <OpenWindowSingIn changeName={changeName} />

        <div className="main_content">
          <div className="main_text">
            <div className="button_option">
              <ButtonOptions
                changeName={changeName}
                className="button button__singIn"
                textInsideButton={'Sing In'}
                iconOptions={<FontAwesomeIcon icon={faHome} />}
              />
              <ButtonOptions
                className="button button__registration"
                textInsideButton={'Registr'}
                iconOptions={<FontAwesomeIcon icon={faUser} />}
              />
            </div>
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quos
              tempora eos eum enim molestias! Doloremque soluta quo quisquam
            </p>
          </div>
          <button className="button">Read more</button>
        </div>
      </div>
    </div>
  )
}

export default MainLayouts
