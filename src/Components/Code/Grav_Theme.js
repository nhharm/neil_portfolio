import React from "react";
import Card from "./CodeProjectTemplate";
import ImageSlider from "../Re-Usable/ImageSlider/ImageSliderBlock";

const image1 = require('../../Images/CodeProject Photos/Leeander 1.png');
const image2 = require('../../Images/CodeProject Photos/Leeander 2.png');
const image3 = require('../../Images/CodeProject Photos/NH.png');
const image4 = require('../../Images/CodeProject Photos/NH 2.png');


const images = [
image1,
image2,
image3,
image4,
];

const textBlock = <p>GRAV is a free to use, easy to deploy, flat-file Content Management Solution (CMS) and a wonderful alternative to using paid for services such as WordPress and Drupple. GRAV uses a system of languages including Markdown, TWIG, YAML, along with more traditional web development languages, JavaScript and CSS.<br /><br />
Currently I am working on building out several custom themes (think WordPress custom themes/plugins) that take advantage of all the great backend CMS customizations that GRAV offers. My single page portfolio theme offers users a modular page build that can be customized in anyway. It uses pure JavaScript to create a series of dynamic page modules, including a customizable job history selector (code example below).</p>

const textBlock2 = <p>My other on-going GRAV theme is a general (non-goods) business, multi-page theme that has a dynamic home page, directing users to several areas including quotes and unique business highlights. This theme (named Leeander) was inspired by CAA’s current website. Leeander Theme also provides users customizable color adjustments from the backend CMS and is fully customizable.<br /><br />
Both of these themes are on-going and are scheduled for deployment in early 2023.</p>

export default class GravPortfolio extends React.Component {

  render() {
    return (
      <div className="side-margins py-8 mt-24  rounded-xl">
        <div className="h-full align-middle justify-around rounded-lg p- bg-white w-[90%] mx-auto">
       <Card title="Portfolio & General Business Themes for GRAV CMS" textBlock={textBlock}
/>
<div className="my-8"><p className="codepen" data-height={300} data-theme-id="light" data-default-tab="js,result" data-slug-hash="YzvoQBa" data-user="nhharm" style={{height: 300, boxSizing: 'border-box', display: 'flex', alignItems: 'center', justifyContent: 'center', border: '2px solid', margin: '1em 0', padding: '1em'}}>
    <span>See the Pen <a href="https://codepen.io/nhharm/pen/YzvoQBa">
        Simple Tab Selector Module</a> by NH (<a href="https://codepen.io/nhharm">@nhharm</a>)
      on <a href="https://codepen.io">CodePen</a>.</span>
  </p>
</div>

<Card textBlock2={textBlock2}
/>

<ImageSlider images={images} />
</div>
      </div>

    )
  }
}
