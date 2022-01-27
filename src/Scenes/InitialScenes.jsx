import React from 'react'
import styled from 'styled-components'

const StyledInitialScenes = styled.div`
  background-image: url(/src/Helpers/imiges/gfb.jpg);
  background-repeat: no-repeat;
  position: absolute;
  height: 100%;
  width: 100%;
  background-color: rgb(223, 230, 236);
`

const InitialScenes = () => {
  return (
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
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quos tempora
          eos eum enim molestias! Doloremque soluta quo quisquam
        </p>
      </div>
      <button className="button">Read more</button>
    </div>
  )
}

export default InitialScenes
