import React, { Component } from 'react';
import {portfolio} from "../helpers/data"

const modalFragment = (data) => {
  const modal = document.createElement('div');
  modal.className = 'modal modal-portafolio';
  modal.id = 'modalPortafolio';
  modal.innerHTML = `
    <div class="modal__close toggle-close" id="toggleClose">
      <div class="toggle-menu modal__close" id="modalClose"><span class="span span1"></span><span class="span span2"></span></div>
    </div>
    <div class="modal-portafolio__container">
      <div class="modal__img-container">
        <img src="${data.img}" alt="${data.name}" class="modal__img">    
      </div>
      <div class="modal__text-container">
        <h2 class="modal-portafolio__title">${data.name}</h2>
        <p class="modal__text">${data.description}</p>
        <a href="http://${data.url}" target="_blank" class="btn btn-cta modal_link"> visite la pagina</a>
      </div>    
    </div>
  `;
  return modal;
};

export default class Portafolio extends Component {
  modal(e){
    const body = document.body
    body.appendChild(modalFragment(e.target.dataset));
    body.classList.add('overhidden');
    document.getElementById('toggleClose').addEventListener('click', (e) => {
      document.getElementById('modalPortafolio').remove();
      body.classList.remove('overhidden');
    });
  }
  render() {
    return (
      <section className="section portafolio padding-top scrollspy" data-scroll-spy id="portafolio">
        <article className="container section__container portafolio__container" style={{padding: "calc(var(--header-height) * 2) 0"}}>
          <div className="portafolio__gallery" id="portafolio__gallery">
            {
              portfolio.map(item=>{
                return (
                  <figure key={item.name.toString()} onClick={this.modal} className="portafolio__item" data-name={item.name} data-img={`https://tinonavarrodiaz.github.io/nh-digital-assets/img/portafolio/${item.img}`} data-url={item.url} data-description={item.description} data-aos="zoom-in">
                    <img src={`https://tinonavarrodiaz.github.io/nh-digital-assets/img/portafolio/${item.img}`} alt={item.name} />
                  </figure>
                )
              })
            }
          </div>
        </article>
      </section>
      //<p key={el.name.toString()}>{el.name}</p>
      // <div> {portfolio.map(el=>el.name)} </div>
    )
  }
}