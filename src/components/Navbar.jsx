import React from 'react'
import { Link } from 'react-router-dom'
import CartWidget from './CartWidget'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartShopping} from "@fortawesome/free-solid-svg-icons";
import { faHouse, faDolly, faPeopleGroup, faEnvelope  } from '@fortawesome/free-solid-svg-icons';
import logoImagen from '../imagenes/CHABBERT-LOGO.png';

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className='titulo-principal'>
        <Link to="/" >
          <img className='img-logo' src={logoImagen} alt="logo Chabbert" />
          </Link>
          <h1 className="logo">Pitt Clothes Shop</h1>
         
      </div>
        <ul className="menu">
        <li><Link className="menu-link" to="/"><FontAwesomeIcon icon={faHouse} style={{ marginRight: '5px' }} />Inicio</Link></li>
        <li className="dropdown">
          <span className="menu-link"><FontAwesomeIcon icon={faDolly} style={{ marginRight: '5px' }} />Productos</span>
          <ul className="dropdown-content">
            <li><Link to="/productos/medias" className="link-no-underline">Medias</Link></li>
            <li><Link to="/productos/pantalones" className="link-no-underline">Pantalones</Link></li>
            <li><Link to="/productos/remeras" className="link-no-underline">Remeras</Link></li>
            <li><Link to="/productos/buzos" className="link-no-underline">Buzos</Link></li>
          </ul>
        </li>
        <li><Link className="menu-link" to="/nosotros"><FontAwesomeIcon icon={faPeopleGroup} style={{ marginRight: '5px' }} />Nosotros</Link></li>
        <li><Link className="menu-link" to="/contacto"> <FontAwesomeIcon icon={faEnvelope} style={{ marginRight: '5px' }} />Contacto</Link></li>
            <li style={{ display: 'flex', alignItems: 'center' }}><FontAwesomeIcon icon={faCartShopping} style={{ marginLeft: '5px', marginRight: '15px' }} /> <CartWidget /></li>
        </ul>
    </nav>
  )
}

export default Navbar