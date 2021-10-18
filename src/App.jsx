import React, { Component} from 'react';
import Header from "./components/Header"
import MenuBig from "./components/MenuBig"
import Home from "./components/Home"

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
      </>
    )
  }
}

export default App