import React, { Component } from 'react';
import down from '../assets/img/down.svg';
import vector from '../assets/img/vector-art-1.png';

export default class Home extends Component {
  // constructor(props) {
  //   super(props);
  // }
  render(){
    return (
      <section className="section inicio activePage scrollspy" data-scroll-spy id="inicio">
        <aside className="shape shape-left" id="shapeLeft"></aside>
        <aside className="shape shape-right" id="shapeRight"></aside>
        <div className="shape-bg shape-bg1"></div>
        <div className="shape-bg shape-bg2"></div>
        <div className="shape-bg shape-bg3"></div>
        <div className="shape-bg shape-bg4"></div>
        <div className="shape-bg shape-bg5"></div><a className="to-start scroll" href="#nosotros" data-scroll-spy>Iniciar<img src={down} alt="down"/></a>
        <article className="inicio__container"><img src={vector} alt="Vector Inicio"/>
          <div className="inicio__text">
            <div className="text-content scroll-syp">
              <h1 className="inicio__title" data-aos="fade-left"><span>Agencia<br/></span>De Desarrollo Digital</h1>
              <p data-aos="fade-left" data-aos-delay="100">No limites tu negocio o empresa a un mercado, consigue más clientes con diseños de paginas web atractivas que te ayuden a llegar a miles de clientes.</p><a className="btn btn-cta scroll" href="#contacto" data-scroll-spy data-aos="fade-left" data-aos-delay="200" style={{display: "inline-block"}}>Contáctanos</a>
            </div>
          </div>
        </article>
      </section>
    )
  }
}