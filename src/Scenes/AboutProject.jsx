import React from 'react'
import ButtonOptions from 'Components/ButtonOptions'
import styled from 'styled-components'
import { faUser, faHome } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Link, Outlet } from 'react-router-dom'
const StyledAboutProject = styled.div`
  height: 100%;
  background-color: rgb(223, 230, 236);
  .main {
    display: flex;
    width: 50%;
    heigth: 100%;
    justify-content: end;
    flex-direction: column;
    margin: auto;
    color: black;
  }

  .button_options {
    display: flex;
    justify-content: center;
    align-items: center;
  }
`

const AboutProject = () => {
  return (
    <StyledAboutProject>
      <div className="main">
        <div>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere
            dolorum dolore maiores nulla, harum cum repellendus adipisci quidem
            sapiente? Incidunt repellendus placeat sint quo, atque
            necessitatibus quos ipsa voluptatem inventore maiores esse deleniti
            suscipit, fuga velit. Rem autem quas deleniti! Earum odit error sed
            pariatur modi suscipit placeat tenetur unde ipsa, odio porro soluta
            facere, quae nemo minus natus neque exercitationem, impedit
            explicabo! Nemo cum itaque mollitia libero nesciunt amet rem
            tempora, sed assumenda praesentium explicabo ipsa nam illum totam
            sequi soluta aut ut provident cupiditate. Similique, voluptatem
            aperiam blanditiis, quasi sapiente aliquid natus voluptatibus
            maiores, perspiciatis autem consequatur. Provident animi in, eius
            doloremque repellendus dignissimos mollitia nostrum debitis quas,
            alias, nobis tempore delectus architecto blanditiis vitae cum
            aperiam. Quod modi atque, asperiores, tempore vero sed quisquam iure
            odio hic laboriosam perspiciatis velit tempora labore. Asperiores
            labore aut eligendi neque quam possimus sunt nihil nisi quis aperiam
            cumque esse tempora corrupti mollitia unde repellendus nemo
            dignissimos enim similique, sapiente totam, beatae, alias est. Porro
            eligendi quisquam assumenda dolorum, et sed praesentium magni ex qui
            recusandae consequatur ea omnis iure ratione? Eos architecto libero,
            dolorum voluptatibus animi nisi ut asperiores, facere nobis nam et
            qui quae repudiandae, quas quibusdam. Culpa, iure.
          </p>
        </div>

        <div className="button_options">
          <Link to={'/login'}>
            <ButtonOptions
              className="button button__singIn"
              textInsideButton={'Login'}
              iconOptions={<FontAwesomeIcon icon={faHome} />}
            />
          </Link>

          <Link to={'/registration'}>
            {' '}
            <ButtonOptions
              className="button button__registration"
              textInsideButton={'Registr'}
              modalText={
                <div>
                  Privet iz tenei
                  <button>Yes</button>
                </div>
              }
              iconOptions={<FontAwesomeIcon icon={faUser} />}
            />
          </Link>
        </div>
      </div>
    </StyledAboutProject>
  )
}

export default AboutProject
