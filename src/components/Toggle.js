
import React, { Component } from "react";

export class Toggle extends Component {
  constructor(props) {
    super(props);
    this.state = { 
      classN: this.props.clase ? `toggle-menu ${this.props.clase}` : `toggle-menu`
    }
  }
  toggle(e){
    let menu = document.querySelector('.main-nav');
    // let header = document.querySelector('.main-header')

    if (window.matchMedia("(max-width: 1024px)").matches) {
      document.querySelector('.toggle-menu').classList.toggle('active')
      menu.classList.toggle('active')
    //   header.classList.toggle('active')

    }else{
      document.querySelector('.screen-full').classList.toggle('active')
    }
  }
  render(){
    return(
      <>
      <button className={this.state.classN} onClick={this.toggle}>
        <span className="span span1"></span>
        <span className="span span2"></span>
        <span className="span span3"></span>
      </button>
      </>
    )
  }
}