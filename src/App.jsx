import React, { Component} from 'react';
import Header from "./components/Header"
import MenuBig from "./components/MenuBig"
import Home from "./components/Home"
import About from "./components/about"
import Services from "./components/services"
import Contact from "./components/contact"
import Portafolio from "./components/portafolio"
import {scrollSpy} from "./helpers/scrollspy"

class App extends Component {
  // constructor(props){
  //   super(props)
  // }
  render(){
    return (
      <>
        <Header/>
        <MenuBig/>
        <Home/>
        <About/>
        <Services/>
        <Portafolio/>
        <Contact/>
      </>
    )
  }
  componentDidMount(){
    scrollSpy()
    window.addEventListener('DOMContentLoaded', (event) => {
      const logo = document.querySelector('.logo');
      logo.addEventListener('click', ()=>{
        window.scrollTo(0,0)
      })
      const toggleMenu = [...document.querySelectorAll('.toggle-menu')]
      const screenFull = document.querySelector('.screen-full')
      const links = [...document.querySelectorAll('.main-menu, .menu-other')]
      links.map(el=>el.addEventListener('click', e=>{
        if(e.target.nodeName==='A'){
          // document.querySelector('.toggle-menu').click()
          if (window.matchMedia("(max-width: 1024px)").matches) {
            document.querySelector('.main-nav').classList.remove('active')
          }
          if (screenFull) screenFull.classList.remove('active')
          toggleMenu.map(el=>el.classList.remove('active'))
        }
      }))
    
      const headerHeight = parseFloat(window.getComputedStyle(document.documentElement).getPropertyValue('--header-height')) * 16
      const mainHeader = document.querySelector('.main-header')
      // console.log(mainHeader)
      window.addEventListener('scroll', () => {
        if(window.scrollY >= headerHeight){
          mainHeader.classList.add('fixed')
        }else{
          mainHeader.classList.remove('fixed')
        }
      })
    });
  }
}

export default App