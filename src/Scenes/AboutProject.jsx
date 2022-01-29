import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

const StyledAboutProject = styled.div`
  width: 100%;
  heigth: 100%;
  background-color: rgb(143, 135, 126);
  position: absolute;

  .main {
    display: flex;
    width: 70%;
    flex-direction: column;
    justify-content: center;
  }
`

const AboutProject = () => {
  return (
    <div className="main">
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere dolorum
        dolore maiores nulla, harum cum repellendus adipisci quidem sapiente?
        Incidunt repellendus placeat sint quo, atque necessitatibus quos ipsa
        voluptatem inventore maiores esse deleniti suscipit, fuga velit. Rem
        autem quas deleniti! Earum odit error sed pariatur modi suscipit placeat
        tenetur unde ipsa, odio porro soluta facere, quae nemo minus natus neque
        exercitationem, impedit explicabo! Nemo cum itaque mollitia libero
        nesciunt amet rem tempora, sed assumenda praesentium explicabo ipsa nam
        illum totam sequi soluta aut ut provident cupiditate. Similique,
        voluptatem aperiam blanditiis, quasi sapiente aliquid natus voluptatibus
        maiores, perspiciatis autem consequatur. Provident animi in, eius
        doloremque repellendus dignissimos mollitia nostrum debitis quas, alias,
        nobis tempore delectus architecto blanditiis vitae cum aperiam. Quod
        modi atque, asperiores, tempore vero sed quisquam iure odio hic
        laboriosam perspiciatis velit tempora labore. Asperiores labore aut
        eligendi neque quam possimus sunt nihil nisi quis aperiam cumque esse
        tempora corrupti mollitia unde repellendus nemo dignissimos enim
        similique, sapiente totam, beatae, alias est. Porro eligendi quisquam
        assumenda dolorum, et sed praesentium magni ex qui recusandae
        consequatur ea omnis iure ratione? Eos architecto libero, dolorum
        voluptatibus animi nisi ut asperiores, facere nobis nam et qui quae
        repudiandae, quas quibusdam. Culpa, iure.
      </p>
      <Link></Link>
    </div>
  )
}

export default AboutProject
