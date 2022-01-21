import React from 'react'
import ButtonOptions from 'Components/ButtonOptions'
const MainLayouts = () => {
  return (
    <div className="layot">
      <div className="main">
        <div className="main_content">
          <div className="main_text">
            <ButtonOptions />
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
