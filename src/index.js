

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from './Components/Re-Usable/Header/Header'
import Home from './Components/Home'
import About from './Components/About'
import Design from './Components/Design'
import Code from './Components/Code'
import Footer from './Components/Re-Usable/Footer/Footer'

import GravPortfolio from "./Components/Code/Grav_Theme";
import GolfApp from "./Components/Code/Golf_App";
import WebDev from "./Components/Code/WebDev_Examples";

import NasdaqBillboard from "./Components/Design/Nasdaq_Billboard";
import VSEAR from "./Components/Design/VSE_Annual_Report";
import NCCBranding from "./Components/Design/NCC_Branding";
import Energetics from "./Components/Design/Energetics_Rebrand";
import ACACampaign from "./Components/Design/ACA_Campaign";
import VSERefresh from "./Components/Design/VSE_Refresh";

const gradientAbstract1 = require('./Images/nh_gradient1.png')
const gradientAbstract2 = require('./Images/nh_gradient2.png') 

ReactDOM.render(
  <Router>
                    <img className="absolute w-[550px] -z-10 right-32 mt-32 top-[25em]" src={gradientAbstract1} alt="" />
                <img className="absolute w-[150px] -z-20 left-32  top-40" src={gradientAbstract2} alt="" />
    <Header />
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/About" element={<About />} />
      <Route path="/Design" element={<Design />} />
      <Route path="/Code" element={<Code />} />

      <Route path="Components/Design/Nasdaq_Billboard" element={<NasdaqBillboard />} />
      <Route path="Components/Design/VSE_Annual_Report" element={<VSEAR />} />
      <Route path="Components/Design/NCC_Branding" element={<NCCBranding />} />
      <Route path="Components/Design/Energetics_Rebrand" element={<Energetics />} />
      <Route path="Components/Design/ACA_Campaign" element={<ACACampaign />} />
      <Route path="Components/Design/VSE_Refresh" element={<VSERefresh />} />

      <Route path="Components/Code/Grav_Theme" element={<GravPortfolio />} />
      <Route path="Components/Code/Golf_App" element={<GolfApp />} />
      <Route path="Components/Code/WebDev_Examples" element={<WebDev />} />








    </Routes>
    <Footer />
  </Router>,

  document.getElementById("root")
);

