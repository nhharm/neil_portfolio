import React from 'react'
import Hero from './Re-Usable/Hero/Hero'
import HomeProjects from './Re-Usable/Home_Projects/Home_Projects'



export default class App extends React.Component {
  render(){
    return (
    <div>
      <Hero />
      <HomeProjects />
    </div>
    )
}
}