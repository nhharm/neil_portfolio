import React from "react";
import Card from "./DesignProjectTemplate";
import { nasdaq } from "../Design";

const textBlock=
<p>On September 19, 2022, VSE Corporation celebrated its <a className="linkOut" target="_blank" rel="noopener noreferrer"  href="https://www.nasdaq.com/videos/vse-corporation-rings-the-nasdaq-stock-market-opening-bell">40th anniversary of being listed on the NASDAQ</a> trading market by ringing the opening trading bell. With this ceremony, our branding team was tasked with creating visuals and investor relations materials related to the morning events, which included a 45 second video/animated advertisement to be placed on the NASDAQ Times Square Billboard.<br/><br/>
    Working with the NASDAQ communications team, I created a short video (using Adobe After Effects/Premiere Pro) that featured both animation and standard video to showcase VSE Corporations three different operating segments. <a className="linkOut" target="_blank" rel="noopener noreferrer"  href="https://www.nasdaq.com/videos/vse-corporation-rings-the-nasdaq-stock-market-opening-bell">The resulting video can be seen here.</a>
     </p>
export default class NasdaqBillboard extends React.Component {

  render() {
    
    return (
      <div className=" side-margins py-8 mt-24 rounded-xl">
      <div className="h-full align-middle justify-around rounded-lg p-2 bg-white w-[90%] sm:w-full mx-auto">
               <Card title="VSE Nasdaq Billboard Animation" image={nasdaq} textBlock={textBlock}/>

      </div>
      </div>
    )
  }
}