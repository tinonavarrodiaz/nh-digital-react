import React, { Component } from 'react';
import logo from '../assets/img/logo_light.svg'
import { Toggle } from './Toggle';
import { SocialUl } from './Social';
class Header extends Component {
  // constructor(props){
  //   super(props)
  // }
  menu(e){
    let Target = e.Target
    console.log(Target)
    // if (Target.nodeName==="A"){
    //   document.querySelector('.main-nav').classList.remove('active')
    // }
  }
  render() {
    return (
      <>
        <header className="main-header">
          <Toggle visible="none" />
          <img src={logo} className="logo" alt="Lofo" />
          <nav className="main-nav">
            <ul className="main-menu" onClick={this.menu}>
              <li className="main-menu__item"><a className="main-menu__link scroll" href="#nosotros" ref={React.createRef()}>Nosotros</a></li>
              <li className="main-menu__item"><a className="main-menu__link scroll" href="#servicios" ref={React.createRef()}>Servicios</a></li>
              <li className="main-menu__item"><a className="main-menu__link scroll" href="#portafolio" ref={React.createRef()}>Portafolio</a></li>
              <li className="main-menu__item"><a className="main-menu__link scroll" href="#contacto" ref={React.createRef()}>Contacto</a></li>
            </ul>
            <SocialUl clase="top"/>
          </nav>
        </header>
      </>
    )
  }
  componentDidMount() {
    // window.addEventListener('DOMContentLoaded', e=>{
    //   const mainMenu = document.querySelector('.main-nav ul')
    //   mainMenu.className="main-menu"
    // })
  }
}

export default Header