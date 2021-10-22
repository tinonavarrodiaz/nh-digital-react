import React , { Component} from 'react';
import { Toggle } from './Toggle';
import { Instragram, Twitter, Mail, Whatsapp, Facebook } from '../helpers/icons';


export default class MenuBig extends Component {
  render(){
    return(
      <div className="screen-full">
        <aside className="shape shape-left" id="shapeLeft">
          <Toggle clase="active submenu"></Toggle>
        </aside>
        <aside className="shape shape-right" id="shapeRight">
          <div className="aside-container">
            <div className="asideTitle">
              <h2>Contacto</h2>
            </div>
            <div className="contact-item whatsapp-item">
              <a href="https://api.whatsapp.com/send?phone=5213313048691&text=Necesito%20Informaci%C3%B3n" target="_blank" rel="noopener noreferrer" className="phone">
                331304867
                <Whatsapp/>
              </a>
              {/* eslint-disable-next-line */}
            </div>
            <div className="contact-item mail-item">
              <a href="mailto: hola@nh-digital.mx" target="_blank" rel="noopener noreferrer" className="phone">
                hola@nh-digital.mx
                <Mail/>
              </a>
            </div>
            <ul className="social-network">
              <li><a href="/#" target="_blank" rel="noopener noreferrer"><Facebook/></a>
              {/* eslint-disable-next-line */}
              </li>
              <li><a href="/#" target="_blank" rel="noopener noreferrer"><Twitter/></a>
              {/* eslint-disable-next-line */}
              </li>
              <li><a href="/#" target="_blank" rel="noopener noreferrer"><Instragram/></a>
              {/* eslint-disable-next-line */}
              </li>
            </ul>
          </div>
        </aside>
      </div>
    )
  }
  componentDidMount(){
    window.addEventListener('DOMContentLoaded', (event) => {
      const newMenu = document.querySelector('.main-menu').cloneNode(true)
      newMenu.className="menu-other"
      document.querySelector('#shapeLeft').appendChild(newMenu)
    });
  }
}