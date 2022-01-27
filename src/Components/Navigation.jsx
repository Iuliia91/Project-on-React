import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUserCircle, faCalendarAlt } from '@fortawesome/free-solid-svg-icons'
const Navigation = () => {
  const listItemText = [
    <FontAwesomeIcon icon={faUserCircle} style={{ color: 'red' }} />,
    { id: 1, optins: [{ protein: protein, milk: milk }] },
    'Products',
    <FontAwesomeIcon icon={faCalendarAlt} />,
  ]

  const list = listItemText.map((item) => (
    <li className="nav-item text-center list-group-item">{item}</li>
  ))
  const profil = ['Iuliia', '30age', '70kg']
  const fillProfil = profil.map((item1) => (
    <li className="user-information" key={profil.length}>
      {item1}
    </li>
  ))

  return (
    <div className="Profil">
      <div>
        <nav class="navbar">
          <ul class="navbar-nav list-group">{list}</ul>
        </nav>
      </div>

      <div>
        <ul className="user">{fillProfil}</ul>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Perspiciatis
        accusantium reiciendis iure consequuntur hic! Sint officia maxime
        quisquam consectetur sequi voluptatem porro esse suscipit, optio
        repellendus reiciendis labore! Nisi, molestiae.
      </div>
    </div>
  )
}

export default Navigation
