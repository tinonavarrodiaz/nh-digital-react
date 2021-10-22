import React, { Component } from 'react';
import img from '../assets/img/vector-art-2.png'
export default class About extends Component {
   render(){
     return (
       <section className="section nosotros padding-top scrollspy" data-scroll-spy id="nosotros">
        <article className="container section__container nosotros__container">
          <div className="nosotros__text slideLeft scroll-syp">
            <h2 className="section__title nosotros__title" data-aos="fade-right" data-aos-delay="0">Estamos Generando mejores <span className="nosotros__title-carroucel">ideas <br/></span>para todos</h2>
            <p className="section__text nosotros__text" data-aos="fade-right" data-aos-delay="100"> Realizamos diseño de paginas web Corporativas, estructuramos todas las páginas web para que sean atractivas, además te ayudamos a generar trafico para ganar más clientes</p><a className="btn btn-cta second-color nosotros__btn scroll" href="#contacto" data-scroll-spy data-aos="fade-right" data-aos-delay="200" style={{"display": "inline-block"}}>Contáctanos</a>
          </div>
          <div className="nosotros__vector slideRight" data-aos="fade-left"><img src={img} alt="nosotros imagen"/></div>
        </article>
        <article className="container section__container skill">
          <div className="skill-item leader" data-aos="zoom-in" data-aos-delay="250">
            <div className="skill-vector">
              <div className="skill-circle">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 192.02">
                  <g id="Capa_2" data-name="Capa 2">
                    <g id="bold">
                      <path d="M7.66,112.4l64,53.34A21.34,21.34,0,1,0,99,133L54.66,96,99,59.07A21.34,21.34,0,1,0,71.66,26.3l-64,53.33a21.35,21.35,0,0,0,0,32.77Z"/>
                      <path d="M218.26,163a21.36,21.36,0,0,0,30.08,2.73l64-53.34a21.35,21.35,0,0,0,0-32.77l-64-53.33A21.34,21.34,0,1,0,221,59.07L265.32,96,221,133a21.36,21.36,0,0,0-2.73,30Z"/>
                      <path d="M132.82,191.19a21.33,21.33,0,0,0,26.37-14.66L201.86,27.2a21.34,21.34,0,0,0-41.05-11.71L118.14,164.82A21.34,21.34,0,0,0,132.82,191.19Z"/>
                    </g>
                  </g>
                </svg>
              </div>
            </div>
            <p className="skill-text">Lider en desarrolo web</p>
          </div>
          <div className="skill-item focused" data-aos="zoom-in" data-aos-delay="300">
            <div className="skill-vector">
              <div className="skill-circle">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 11.8 9.75">
                  <g id="Capa_2" data-name="Capa 2">
                    <g id="Capa_1-2" data-name="Capa 1">
                      <path className="cls-1" d="M.65,1.13A1.12,1.12,0,0,1,1.78,0H3.85A2.36,2.36,0,0,1,5.58.89a1.53,1.53,0,0,0,1.07.61H10a1.12,1.12,0,0,1,1.12,1.13V3.1a1.11,1.11,0,0,1,.64,1.16l-.48,3.85A1.87,1.87,0,0,1,9.45,9.75H2.35A1.87,1.87,0,0,1,.49,8.11L0,4.26A1.14,1.14,0,0,1,.65,3.1ZM1.4,3h9V2.63A.38.38,0,0,0,10,2.25H6.65A2.25,2.25,0,0,1,5,1.38,1.64,1.64,0,0,0,3.85.75H1.78a.38.38,0,0,0-.38.38Zm-.28.75a.38.38,0,0,0-.37.38v0L1.23,8A1.12,1.12,0,0,0,2.35,9h7.1a1.12,1.12,0,0,0,1.12-1l.48-3.84a.39.39,0,0,0-.33-.42H1.12Z"/>
                    </g>
                  </g>
                </svg>
              </div>
            </div>
            <p className="skill-text">Un equipo enfocado a cada habilidad</p>
          </div>
          <div className="skill-item professional" data-aos="zoom-in" data-aos-delay="350">
            <div className="skill-vector">
              <div className="skill-circle">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 498.59 512">
                  <g id="Capa_2" data-name="Capa 2">
                    <g id="Capa_1-2" data-name="Capa 1">
                      <path className="cls-1" d="M489.94,312.11l-47.06-36.8a171.16,171.16,0,0,0,0-38.66L490,199.83a23.09,23.09,0,0,0,5.56-29.42l-49-84.63a23.14,23.14,0,0,0-28.3-10.2L362.82,97.9A189.94,189.94,0,0,0,329.5,78.55L321,19.63A22.68,22.68,0,0,0,298.33,0H200.19a22.61,22.61,0,0,0-22.52,19.46l-8.54,59.09a196.77,196.77,0,0,0-33.28,19.37L80.24,75.56a22.68,22.68,0,0,0-28.1,10l-49,84.78a22.89,22.89,0,0,0,5.57,29.54l47.06,36.8a168.87,168.87,0,0,0,0,38.66L8.66,312.15a23.07,23.07,0,0,0-5.59,29.42L52,426.22a23.13,23.13,0,0,0,28.31,10.2l55.47-22.32a190.21,190.21,0,0,0,33.34,19.37l8.54,58.88A22.63,22.63,0,0,0,200.19,512h98.14a22.64,22.64,0,0,0,22.59-19.46l8.53-59.09a197,197,0,0,0,33.28-19.37l55.68,22.38a22.7,22.7,0,0,0,28.1-10l49.15-85.12A23,23,0,0,0,489.94,312.11ZM249.26,362.67A106.67,106.67,0,1,1,355.93,256,106.67,106.67,0,0,1,249.26,362.67Z"/>
                    </g>
                  </g>
                </svg>
              </div>
            </div>
            <p className="skill-text">Asesores profesionales y de confianza</p>
          </div>
          <div className="skill-item experience" data-aos="zoom-in" data-aos-delay="400">
            <div className="skill-vector">
              <div className="skill-circle">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 401 398.98">
                  <g id="Capa_2" data-name="Capa 2">
                    <g id="Capa_1-2" data-name="Capa 1">
                      <path d="M370.11,250.39a10,10,0,0,0-10,10v88.68a30,30,0,0,1-30,30H49.93a30,30,0,0,1-30-30V88.8a30,30,0,0,1,30-30h88.68a10,10,0,1,0,0-20H49.93A50,50,0,0,0,0,88.8V349.05A50,50,0,0,0,49.93,399H330.16a50,50,0,0,0,49.93-49.93V260.37A10,10,0,0,0,370.11,250.39Z"/>
                      <path d="M376.14,13.16a45,45,0,0,0-63.56,0L134.41,191.34a10,10,0,0,0-2.57,4.39l-23.43,84.59a10,10,0,0,0,12.29,12.3l84.59-23.44a10,10,0,0,0,4.4-2.56L387.86,88.44a45,45,0,0,0,0-63.56Zm-220,184.67L302,52l47,47L203.19,244.86Zm-9.4,18.85,37.58,37.58-52,14.39Zm227-142.36-10.6,10.59-47-47,10.6-10.59a25,25,0,0,1,35.3,0L373.74,39A25,25,0,0,1,373.74,74.32Z"/>
                    </g>
                  </g>
                </svg>
              </div>
            </div>
            <p className="skill-text">Experiencia para darte mejores resultados</p>
          </div>
        </article>
      </section>
     )
   }
 }