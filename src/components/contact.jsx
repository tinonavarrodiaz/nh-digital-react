import React, { Component } from 'react';
import v3 from '../assets/img/vector-art-3.png';
import success from '../assets/success.svg';
import error from '../assets/error.svg';
import { SocialUl } from './Social';
import spin from "../assets/img/tail-spin.svg"

const cerrarPop= (pop)=>{
  pop.classList.add('close')

  setTimeout(() => {
    
    pop.remove()
  }, 500);
}

const cretePopup = (type, time) =>{
  const img = type === 'success' ? success : error;
  const title = type === "success" ? "Mensaje Envido" :  "Ha ocurrido un error"
  const msj = type === "success" ? "En breve nos pondremos en contacto con usted" :  "Por favor vuelva a intentarlo"
  console.log(type, time)
  const pop = document.createElement('div')
  pop.className = `pop ${type}`
  pop.innerHTML = `
    <div class="close-pop"></div>
    <img src="${img}" alt="${type}">
    <p>
      <span>${title}</span>
      ${msj}
    </p>
  `
  document.body.appendChild(pop)

  pop.addEventListener('click', e=>{
    if(e.target.classList.contains('close-pop')){
      cerrarPop(pop)
    }
  })
  setTimeout(() => {
    cerrarPop(pop)
  }, 5000);
}
export default class Contact extends Component {

  submit(e){
    e.preventDefault();
    const loadingEl = e.target.querySelector('#loadingForm')
    const textEl = e.target.querySelector('#textBtn')
    const myHeaders = new Headers();
    const data = new FormData(e.target),
          url = e.target.action
    const myInit = { method: 'POST',
               headers: myHeaders,
               mode: 'cors',
               cache: 'default',body: data };
    loadingEl.style.display="block"
    textEl.innerText="Enviando"
    // cretePopup('error', 5000)
    fetch(url, myInit)
      .then(response => response.json())
      .then(res=>{
        console.log(res)
        loadingEl.style.display="none"
        if(res.code===200){
          textEl.innerText="Enviado"
          loadingEl.parentElement.setAttribute("disabled", "disabled")
          cretePopup('success', 5000)
        }else{
          cretePopup('error', 5000)
          textEl.innerText="Enviar"
        }
      })
      .catch(()=>{
        cretePopup('error', 5000)
        textEl.innerText="Enviar"
      })
  }

  inputBlur(e) {
    let T = e.target
    if (T.matches(".contacto__form [required]")) {
      let pattern = T.pattern || T.dataset.pattern
      if (pattern) {
        let regex = new RegExp(pattern)
        if (regex.exec(T.value)) {
          T.parentElement.classList.add('succes')
          T.parentElement.classList.remove('error')
        } else {
          T.parentElement.classList.add('error')
          T.parentElement.classList.remove('succes')
        }
      }
    }
  }

  render() {
    return (
      <section className="section contacto padding-top scrollspy" data-scroll-spy id="contacto">
        <article className="container section__container contacto__container">
          <div className="contacto__vector slideLeft" data-aos="fade-right" data-aos-delay="0"><img src={v3} alt="servicios imagen" /></div>
          <div className="contacto__datos slideRight">
            <form onSubmit={this.submit} className="contacto__form" action="https://nh-digital.mx/php/send-form.php" method="post" autofill="off" id="contacto__form">
              <div className="input-grid">
                <div className="input-group">
                  <div className="input" data-aos="flip-left" data-aos-delay="100">
                    <input onKeyUp={this.inputBlur} type="text" name="name" placeholder="Nombre:" required pattern="^[A-Za-zÑñÁáÉéÍíÓóÚúÜü\s]+$" />
                  </div>
                  <div className="input" data-aos="flip-left" data-aos-delay="200">
                    <input onKeyUp={this.inputBlur} type="text" name="phone" placeholder="Teléfono:" required pattern="^[0-9]{10}" />
                  </div>
                  <div className="input" data-aos="flip-left" data-aos-delay="300">
                    <input onKeyUp={this.inputBlur} type="email" name="email" placeholder="Email:" required pattern="^[a-z0-9]+(\.[_a-z0-9]+)*@[a-z0-9-]+(\.[a-z0-9-]+)*(\.[a-z]{2,15})" />
                  </div>
                </div>
                <div className="input-group">
                  <div className="input textarea" data-aos="flip-right" data-aos-delay="350">
                    <textarea onKeyUp={this.inputBlur} name="message" placeholder="Mensaje:" required data-pattern="^.{1,255}$"></textarea>
                  </div>
                </div>
                <input type="hidden" name="recaptcha-response" id="recaptchaResponse" />
              </div>
              <button className="btn btn-send" type="submit" data-aos="zoom-in" data-aos-delay="100"> <img className="loadingForm" src={spin} alt="Loading Page" id="loadingForm" /><span id="textBtn">Enviar</span></button>
            </form>
            <SocialUl clase="contac" />
          </div>
          <p className="copy"> © <span id="current-year"></span> NH Digital</p>
        </article>
        
      </section>
    )
  }
  componentDidMount() {
    document.getElementById('current-year').innerText = new Date().getFullYear()
  }
}