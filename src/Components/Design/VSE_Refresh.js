import React from "react";
import Card from "./DesignProjectTemplate";
import {BrandRefresh} from '../Design'
import ImageSlider from "../Re-Usable/ImageSlider/ImageSliderBlock";

const image1 = require('../../Images/projects/VSE Brand Refresh Site.png');
const image2 = require('../../Images/projects/VSE Templates Powerpoint.png');
const image3 = require('../../Images/projects/VSE Group Values Sheet.png');


const images = [
image1,
image2,
image3,
];

const textBlock = <p>This is the paragraphic that will explain what this project is and In 2022, VSE Corporation started planning for a Brand Refresh to enhance our corporate brand standing. As the Brand Manager, I am currently in charge of leading the design and working with our communications team in matching the messaging with visuals.<br/><br/>
VSE had a full re-brand, including logo/identity change, in 2019 (which I had led the visuals for), so this was just to introduce new messaging and a cleaner, more cohesive, brand. Our goal is to create visuals at the corporate level, that will then be trickled down to our subsidies within VSE and to unifify our visual brand by 2023 early 2024.<br/><br/>
Some of the projects we created were, updated PowerPoints, a new set of print marketing templates, unified branding from recent Mergers & Acquisitions, <a className="linkOut" target="_blank" rel="noopener noreferrer" href="https://vimeo.com/manage/videos/783052814">a new corporate identity video</a> with a 30 second commercial spot and most importantly, a new web layout (not launching until 2Q 2023.</p>

export default class VSERefresh extends React.Component {

  render() {
    return (
      <div className=" side-margins py-8 mt-24 rounded-xl">
      <div className="h-full align-middle justify-around rounded-lg p-2 bg-white w-[90%] sm:w-full mx-auto">
       <Card title="VSE Corporation 2023 Brand Refresh Design" image={BrandRefresh} textBlock={textBlock}/>
       <ImageSlider  images={images}/>
      </div>
      </div>
    )
  }
}