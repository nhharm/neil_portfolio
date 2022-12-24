import React from "react";
import Card from "./Re-Usable/ImagePreviewBox/ImagePreviewBox";
import NasdaqBillboard from "./Design/Nasdaq_Billboard";
import VSEAR from "./Design/VSE_Annual_Report";
import NCCBranding from "./Design/NCC_Branding";
import Energetics from "./Design/Energetics_Rebrand";
import ACACampaign from "./Design/ACA_Campaign";
import VSERefresh from "./Design/VSE_Refresh";

export const annualReport = require("../Images/projects/2022 VSE Corporation Annual Report.jpg");
export const nasdaq = require("../Images/projects/Nasdaq Board 2.png")
export const nccProgram = require("../Images/projects/2019 NCC Program Guide.jpeg")
export const energetics = require("../Images/projects/Energetics Logo Design.jpeg")
export const ACA = require("../Images/projects/ACA Short Video.png")
export const BrandRefresh = require("../Images/projects/VSE BrandRefresh.png")





export default class Design extends React.Component {

  render() {
    return (
      <div className="side-margins pt-28 md:mt-20">
        <h2 className="text-5xl font-bold text-gray-800">what i've <span className="hand-drawn text-[58px]">designed</span></h2>
        <p className="text-gray-400 text-xl font-medium leading-9 w-[98%] rounded-lg bg-white py-4 px-2">Below is a collection of recent projects that I have worked on or currently am working on. These projects range from digital billboard advertisements, logo design all the way to video and print production. For more information on any of these projects, feel free to reach out to me in the contact box at the bottom of this page!</p>
       <div className="grid-cols-2  gap-8  grid my-24 md:grid-cols-1">
       <Card title="VSE Nasdaq Billboard Animation" image={nasdaq} link='../Components/Design/Nasdaq_Billboard' projectPage={NasdaqBillboard} />
       <Card title="VSE Annual Reports/ESG Reports" image={annualReport} link='../Components/Design/VSE_Annual_Report' projectPage={VSEAR}/>
       <Card title="NCA Club Conference Branding Design" image={nccProgram} link='../Components/Design/NCC_Branding' projectPage={NCCBranding}/>
       <Card title="Energetics Branding Re-Design" image={energetics} link='../Components/Design/Energetics_Rebrand' projectPage={Energetics}/>
       <Card title="ACA Component Marketing Campaign" image={ACA} link='../Components/Design/ACA_Campaign' projectPage={ACACampaign}/>
       <Card title="VSE Corporation Brand Refresh" image={BrandRefresh} link='../Components/Design/VSE_Refresh' projectPage={VSERefresh}/>
       </div>
      </div>
    )
  }
}