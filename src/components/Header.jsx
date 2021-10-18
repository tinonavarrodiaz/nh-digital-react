import React, { Component} from 'react';
import logo from '../assets/img/logo_light.svg'
import { Toggle } from './Toggle';
class Header extends Component {
  // constructor(props){
  //   super(props)
  // }
  render(){
    return (
      <>
        <header className="main-header">
          <Toggle visible="none"/>
          <img src={logo} className="logo" alt="Lofo"/>
          <nav className="main-nav">
            <ul className="main-menu">
              <li className="main-menu__item"><a className="main-menu__link" href="#nosotos">Nosotros</a></li>
              <li className="main-menu__item"><a className="main-menu__link"href="#servicios">Servicios</a></li>
              <li className="main-menu__item"><a className="main-menu__link" href="#portafolio">Portafolio</a></li>
              <li className="main-menu__item"><a className="main-menu__link" href="#contacto">Contacto</a></li>
            </ul>
          </nav>
        </header>
      </>
    )
  }
}

export default Header