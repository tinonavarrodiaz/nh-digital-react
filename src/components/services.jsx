import React, { Component } from 'react';
import img from '../assets/img/vector-services.png'
export default class Services extends Component {
  render() {
    return (
      <section className="section servicios padding-top scrollspy" data-scroll-spy id="servicios">
        <article className="container section__container servicios__container">
          <div className="servicios__vector slideLeft" data-aos="fade-right" data-aos-delay="0"><img src={img} alt="servicios imagen"/></div>
          <div className="servicios__text-container slideRight">
            <div className="servicios__group web" data-img="img/webpages.jpg" data-alt="NH Digital Webpage" data-aos="fade-left" data-aos-delay="100">
              <h2 className="servicios__title">Desarrollo WEB y Comercio Electrónico</h2>
              <p className="servicios__text">Mientras tu no estás en la web, tu competencia ya se encuentra vendiendo en línea</p>
            </div>
            <div className="servicios__group sn" data-img="img/social-media.jpg" data-alt="NH Digital Redes Sociales" data-aos="fade-left" data-aos-delay="200">
              <h2 className="servicios__title">Redes sociales con altura</h2>
              <p className="servicios__text">Creamos contenido que conecta con tus seguidores.</p>
            </div>
            <div className="servicios__group mkt" data-img="img/marketing.jpg" data-alt="NH Digital Redes Sociales" data-aos="fade-left" data-aos-delay="300">
              <h2 className="servicios__title">Marketing Digital</h2>
              <p className="servicios__text">Crece tus ventas y haz que tus clientes te vean</p>
            </div>
          </div>
        </article>
      </section>
    )
  }
}