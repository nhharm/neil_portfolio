import React from "react";
import Card from "./DesignProjectTemplate";
import {energetics} from '../Design'

const textBlock=<p>As part of VSE Corporation’s brand overhaul in 2019-2020, I was tasked with leading the strategy and design of the new branding for Energetics corporation, a VSE Corporation owned and operated Subsidy. My team worked with business leaders from Energetics as well as the Executive Team from VSE Corporation to design a new brand identity around the energy consulting firm.<br/><br/>
<a className="linkOut" target="_blank" rel="noopener noreferrer" href="https://www.energetics.com/">The logo above I designed</a> was eventually the focal point of the new brand. We wanted to create a cleaner, more modern look to give the company a better visual representation when bidding on new clean energy products in the government sector. We updated all visuals, including tradeshow booths, contract templates, website re-skin, PowerPoint templates, office branding and digital media/social assets.<br/><br/>
This new look allowed Energetics to confidently enter new markets, expand their recruiting and position themselves to be more competitive in modern energy contract bidding.'</p>


export default class Energetics extends React.Component {

  render() {
    return (
      <div className=" side-margins py-8 mt-24 rounded-xl">
      <div className="h-full align-middle justify-around rounded-lg p-2 bg-white w-[90%] sm:w-full mx-auto">       <Card title="Energetics Re-Brand and Logo Design" image={energetics} textBlock={textBlock}/>
      </div>
      </div>
    )
  }
}