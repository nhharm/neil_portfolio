import './App.css';
import  "./index.css"

import React from 'react'
import Header from './Header/Header'
import Hero from './Hero/Hero'



export default class App extends React.Component {
  render(){
    return (
    <div>
      <Header />
      <Hero />
    </div>
    )
}
}