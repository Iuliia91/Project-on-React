import React from 'react'
import { faUser, faHome } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
const ButtonOptions = () => {
  return (
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
  )
}

export default ButtonOptions
