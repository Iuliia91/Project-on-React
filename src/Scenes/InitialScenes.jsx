import React from 'react'
import styled from 'styled-components'
import { faUser, faHome } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import ButtonOptions from 'Components/ButtonOptions'

const StyledInitialScenes = styled.div`
  background-image: url(/src/Helpers/imiges/gfb.jpg);
  background-repeat: no-repeat;
  position: absolute;
  height: 100%;
  width: 100%;
  background-color: rgb(223, 230, 236);

  .main {
    max-width: 1200px;
    position: fixed;
    display: block;
    right: 0;
    width: 60%;
  }

  .main_content {
    width: 100%;
    position: absolute;
    padding-top: 250px;
    text-align: center;
  }

  .button {
    border: none;
  }

  .button:hover {
    background-color: rgb(199, 211, 222);
  }
  .button_option {
    display: flex;
    position: absolute;
    top: 0;
    right: 0;
    justify-content: space-around;
    align-items: center;
  }

  .button__singIn,
  .button__registration {
    padding: 10px;
    margin-right: 20px;
  }

  .button__read-more {
    padding: 10px;
    margin-right: 20px;
  }
`

const InitialScenes = () => {
  return (
    <StyledInitialScenes>
      <div className="main">
        <div className="main_content">
          <div className="main_text">
            <div className="button_option">
              <ButtonOptions
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
          <button className="button button__read-more">Read more</button>
        </div>
      </div>
    </StyledInitialScenes>
  )
}

export default InitialScenes
