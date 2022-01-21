import React from 'react'
import { faUser, faHome } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
const MainLayouts = () => {
  return (
    <div className="layot">
      <div className="main">
        <div className="main_content">
          <div className="button_option">
            <button className="button button__singIn">
              <div>
                <FontAwesomeIcon icon={faHome} />
                SingIn
              </div>
            </button>

            <button className="button button__registration">
              <div>
                <FontAwesomeIcon icon={faUser} />
                Registr{' '}
              </div>
            </button>
          </div>

          <div className="main_text">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quos
            tempora eos eum enim molestias! Doloremque soluta quo quisquam
          </div>
          <button className="button">Read more</button>
        </div>
      </div>
    </div>
  )
}

export default MainLayouts
