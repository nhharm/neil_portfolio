import React from "react";
import Card from "./DesignProjectTemplate";
import ImageSlider from "../Re-Usable/ImageSlider/ImageSliderBlock";

const annualReport  = require("../../Images/projects/2022 VSE Corporation Annual Report.jpg")

const image1 = require('../../Images/projects/2021 VSE AR COVER.png');
const image2 = require('../../Images/projects/VSE 2020 Annual Report.jpeg');
const image3 = require('../../Images/projects/VSE AR 2022 InnerPages 2.png');
const image4 = require('../../Images/projects/VSE Corp 2022 AR Inner Pages.png');


const images = [
image1,
image2,
image3,
image4,
];

const textBlock = <p>Since 2019, I have been responsible for the branding, layout, design, and pre-print process of VSE Corporation’s Annual Reports and Environmental, Social and Governance Practices Reports. As the Brand manager, I oversaw all pre-planning and design strategy execution of the report, working directly with VSE Corporations’ Chief Executive Officer, Chief Financial Officer and In house Legal Counsel.<br /><br />
All of VSE’s Annual Reports and ESG Reports are used as investor presentations and marketing materials throughout the year, as well as filed with SEC. You can view all of VSE’s <a className="linkOut" target="_blank" rel="noopener noreferrer"  href="https://ir.vsecorp.com/financial-information/annual-reports">Investor materials here</a> and the <a className="linkOut" target="_blank" rel="noopener noreferrer" href="https://d1io3yog0oux5.cloudfront.net/_a2794f6f74be2b3ca3ecf87f00a9d57c/vsecorp/db/397/3667/annual_report/VSE_CORPORATION_AR_2022.pdf">latest version of the 2021 Annual Report here</a>. The Annual Report for 2022 (released March 2023) will encompass VSE Corporations brand re-fresh that I am currently designing and overseeing.</p>

export default class VSEAR extends React.Component {

  render() {
    return (
      <div className=" side-margins py-8 mt-24 rounded-xl">
      <div className="h-full align-middle justify-around rounded-lg p-2 bg-white w-[90%] sm:w-full mx-auto">
       <Card title="VSE Annual Reports and ESG Reports" image={annualReport} textBlock={textBlock}/>
       <ImageSlider images={images} />
      </div>
      </div>
    )
  }
}