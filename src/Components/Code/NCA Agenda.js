import React from "react";
import Card from "./CodeProjectTemplate";

const textBlock=<p>As part of the National Club Association’s member benefits overhaul, our communications and marketing department collaborated on designing a new, weekly, featured newsletter/site. My role was to take our existing newsletter material and re-imagine the UI/UX that would be fit well with our membership demographics. Due to my coding experience, I was also tasked with coding the website portion of the newsletter within NCA’s current WordPress web structure and provide ease-of-us CMS inputs for the communications team to be able to use and update.<br/><br/>
<a className="linkOut" target="_blank" rel="noopener noreferrer" href="https://memberportal.nationalclub.org/mpage/NCAAgendaHome"></a>The final design can be seen here and shows the website structure. This site was coded in PHP, CSS, HTML, Markdown and JQuery/JavaScript. Our communications team sent a similarly designed email newsletter that worked in conjunction with the site. Note, the site in the link above does not include all links (library, previous issues, contacts) due to sections being behind a membership paywall.

</p>

export default class NCAAgenda extends React.Component {

  render() {
    return (
      <div className="side-margins py-8 mt-24  rounded-xl">
        <div className="h-full align-middle justify-around rounded-lg p- bg-white w-[90%] mx-auto">
          <Card title="NCA Agenda News Site" 
                textBlock={textBlock}
          />
        </div>
      </div>

    )
  }
}

