import React from "react";
import Card from "./DesignProjectTemplate";
import {ACA} from '../Design'
import ImageSlider from "../Re-Usable/ImageSlider/ImageSliderBlock";


const image2 = require('../../Images/projects/VSE Aviation AVA Ion Unit AD Spread.jpeg');
const image3 = require('../../Images/projects/AVA Ion Unit Digital Ads VSE Aviation.jpeg');
const image4 = require('../../Images/projects/Screenshot (70).png');



const images = [
image2,
image3,
image4,
];


const textBlock=
<p>At the onset of the COVID-19 Pandemic, VSE Corporation’s Aviation division (VSE Aviation), secured a contract and partnership with ACA, to sell their <a className="linkOut" target="_blank" rel="noopener noreferrer" href="https://www.vseaviation.com/ion-distribution-unit/">state-of-the-art Ion-Bacteria Neutralizing Cabin Units</a>. These units were test and proven to kill 99.9% of in-air COVID-19 bacteria inside of the cabin of business jets.,<br/><br/>
  Our Corporate and Aviation marketing teams quickly engaged in branding and marketing strategy meetings to determine how we would highlight the sale of this unit. I was responsible for the graphic design and production of visual element for this campaign. We created two videos, <a className="linkOut" target="_blank" rel="noopener noreferrer" href="https://www.youtube.com/watch?v=RJGE4T9L0PQ">one long-form (2 minutes)</a> and one-short <a className="linkOut" target="_blank" rel="noopener noreferrer" href="https://vimeo.com/manage/videos/783052926">30 second ad spot</a> that was sent out via the Public Relations firm we had hired. We also created social media ads and graphics, web-page ads for various aviation websites and a <a className="linkOut" target="_blank" rel="noopener noreferrer" href="chrome-extension://efaidnbmnnnibpcajpcglclefindmkaj/https://www.vseaviation.com/wp-content/uploads/2020/09/VSE-Aviation-Ion-Distribution-Unit-Flyer.pdf">marketing editorial</a> that was placed in several magazines and digital aviation publications.<br/><br/>
  The success of this campaign and partnership with ACA allowed VSE Aviation to offset some of the headwinds that would come via reduced air travel and pandemic related expenses in the following months.
</p>

export default class ACACampaign extends React.Component {

  render() {
    return (
      <div className=" side-margins py-8 mt-24 rounded-xl">
      <div className="h-full align-middle justify-around rounded-lg p-2 bg-white w-[90%] sm:w-full mx-auto"> <Card title="ACA and VSE Corporation COVID-19 ION Unit Marketing Campaign" image={ACA} textBlock={textBlock}/>
       <ImageSlider images={images} />
</div>
      </div>
    )
  }
}