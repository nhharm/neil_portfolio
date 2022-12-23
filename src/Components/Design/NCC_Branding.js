import React from "react";
import Card from "./DesignProjectTemplate";
import {nccProgram} from '../Design'
import ImageSlider from "../Re-Usable/ImageSlider/ImageSliderBlock";


const image3 = require("../../Images/projects/NCC 1.jpg");
const image2 = require('../../Images/projects/NCC 2.jpg');
const image1 = require('../../Images/projects/NCC Microsite Portfolio.jpeg');


const images = [
image1,
image2,
image3,
];

const textBlock=<p>While with the National Club Association as the Brand and Marketing Manager, I was responsible for the visual branding for the yearly National Club Conference. This conference is a yearly gathering of the leaders of private clubs, as well as private club adjacent businesses, to discuss recent business trends, political roadmaps and governance practices.<br /><br />
For the <a className="linkOut" target="_blank" rel="noopener noreferrer" href="https://nationalclub.org/portfolio/2019-national-club-conference/">2019 National Club Conference</a>, I created all graphics, presentations and in-conference branding. The conference was held at the Hilton Conrad in downtown Washington, DC and included subsequent events at the Cosmos Club, Capital Hill Club and Bethesda Country Club. Branding I had created included, pre-conference video commercials, presentation screens and speaker thirds, program guides, attendee kits, magazine ads and booth graphics.<br /><br />
While the 2020 National Club Conference event was eventually cancelled due to COVID-19, I had created branding and marketing initiatives that included, <a  className="linkOut" target="_blank" rel="noopener noreferrer" href="https://nhharm.github.io/2020-National-Club-Conference/">coding a conference micro-site</a> and designing the <a className="linkOut" target="_blank" rel="noopener noreferrer"  href="https://www.hospitalitynet.org/event/3004653.html">conference brand identity.</a></p>

export default class NCCBranding extends React.Component {

  render() {
    return (
      <div className=" side-margins py-8 mt-24 rounded-xl">
      <div className="h-full align-middle justify-around rounded-lg p-2 bg-white w-[90%] sm:w-full mx-auto">
       <Card title="National Club Conference Branding & Marketing" image={nccProgram} textBlock={textBlock}/>

       <ImageSlider images={images} />
      </div>
      </div>
    )
  }
}