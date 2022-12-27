import React from "react";
import Card from "../Components/Re-Usable/ProjectBoxes/ProjectBoxes"
import GolfApp from "./Code/Golf_App";
import GravPortfolio from "./Code/Grav_Theme";
import NCAAgenda from "./Code/NCA Agenda";
import WebDev from "./Code/WebDev_Examples";



export default class Code extends React.Component {


    render() {
        return (
            <div className="side-margins pt-28 md:mt-20">
                <h2 className="text-5xl font-bold text-gray-800">code i've <span className="hand-drawn text-[58px]">written</span></h2>
                <p className="text-gray-400 text-xl font-medium leading-9 w-[98%] rounded-lg bg-white py-4 px-2">I wrote my first line of code for a website (shoutout old school AngelFire websites) when I was 12 and have been enamored ever since! In 2018 I tried to expand my knowledge of modern web design and development by taking Codecademy’s Pro courses and to this day I still take courses on new languages.<br/><br/>I currently am focusing on coding in React.js but I have useful skills in languages such as CSS, JavaScript, jQuery, HTML, Bootstrap, TailwindCSS, Markdown, TWIG, YAML, and PHP. I also have experiences coding within CMS frameworks such as WordPress, Drupple, Sanity.io and my personal favorite GRAV.<br/><br/>
Coding is for fun for me but I do occasionally take on freelance front-end work. I
</p>

                <Card title="GRAV CMS theme development" link='../Components/Code/Grav_Theme' projectPage={GravPortfolio} >
                    I am working on developing multiple custom themes for the GRAV CMS.
                </Card>
                <Card title="PGA TOUR Player Performance Indicator App" link='../Components/Code/Golf_App' projectPage={GolfApp} >
                    Logic produces a player performance indicator model for the current weeks PGA TOUR Tournament.
                </Card>
                <Card title="Web Development: CSS-Grid and Flexbox Examples" link='../Components/Code/WebDev_Examples' projectPage={WebDev} >
                   Homepage examples showing understanding of the principles of Grid and Flexbox web layouts.
                </Card>
                <Card title="National Club Association's NCA Agenda Weekly News Site" link='../Components/Code/WebDev_Examples' projectPage={NCAAgenda} >
                    NCA Membership news website featuring weekly updates on important association & industry news.
                </Card>
            </div>
        )
    }
}