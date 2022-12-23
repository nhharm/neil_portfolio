import React from "react";
import Card from "../ProjectBoxes/ProjectBoxes"
import GravPortfolio from "../../Code/Grav_Theme";
import NasdaqBillboard from "../../Design/Nasdaq_Billboard";
import VSEAR from "../../Design/VSE_Annual_Report";
import ACACampaign from "../../Design/ACA_Campaign";

//const gradientAbstract1 = require('../Images/nh_gradient1.png')
//const gradientAbstract2 = require('../Images/nh_gradient2.png')

export default class HomeProjects extends React.Component {


    render() {
        return (
            <div className="side-margins pt-28">
                <h2 className="text-5xl font-bold text-gray-800">my recent <span className="hand-drawn text-[58px]">projects</span></h2>
                
                <Card title="GRAV CMS theme development" link='../Components/Code/Grav_Theme' projectPage={GravPortfolio} >
                    I am working on developing multiple custom themes for the GRAV CMS.
                </Card>

       <Card title="VSE Nasdaq Billboard Animation"  link='../Components/Design/Nasdaq_Billboard' projectPage={NasdaqBillboard} >
        A video animation placed on the NASDAQ billboard in Times Square.
        </Card>

        <Card title="VSE Annual Reports/ESG Reports" link='../Components/Design/VSE_Annual_Report' projectPage={VSEAR}>
                    Three years of designing VSE Corporations's Annual Reports and 10ks.
                </Card>
                <Card title="ACA Ion Cabin Unit Marketing Campaign" link='../Components/Design/ACA_Campaign' projectPage={ACACampaign}>
                Marketing and communications materials for VSE Aviation's and ACA's partnership.
                    </Card>
            </div>
        )
    }
}