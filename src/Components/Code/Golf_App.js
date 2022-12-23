import React from "react";
import Card from "./CodeProjectTemplate";


const textBlock = <p>Currently I am developing logic (eventually to turn into a React App) that creates a simple method of determining a “performance indicator” for each PGA TOUR Golfer at a current weeks event. The idea is this indicator provides users a reference of how well a player is performing going into the current week’s tournament.<br /><br />
The logic behind this (currently written in JSON/JavaScript) is to take several general performance measures, including Shots Saved Tee To Green, Official World Golf Ranking (OWGR), OWGR positive or negative trends and position on PGA TOURs money list to create a single weighted performance average. The code currently takes manually inputted JSON data  but will eventually work of a series of APIs.<br /><br />
</p>

const textBlock2 = <p>Eventually the logic will be turned into an app which will allow users to determine the weight of each measure used in the average (Shots Saved Tee to Green, OWGR, etc.) to create a customized output.</p>

export default class GolfApp extends React.Component {

  render() {
    return (
      <div className=" side-margins py-8 mt-24 rounded-xl">
      <div className="h-full align-middle justify-around rounded-lg p-2 bg-white w-[90%] mx-auto">
       <Card title="PGA TOUR Weekly Player Performance Indicator" textBlock={textBlock}
/>
<div>
</div>

<Card textBlock2={textBlock2}
/>



      </div> <p className="codepen" data-height={300} data-theme-id="light" data-default-tab="js" data-slug-hash="LYrwQvP" data-user="nhharm" style={{height: 300, boxSizing: 'border-box', display: 'flex', alignItems: 'center', justifyContent: 'center', border: '2px solid', margin: '1em 0', padding: '1em'}}>
  <span>See the Pen <a href="https://codepen.io/nhharm/pen/LYrwQvP">
      PGA Player Performance Indicator Logic</a> by NH (<a href="https://codepen.io/nhharm">@nhharm</a>)
    on <a href="https://codepen.io">CodePen</a>.</span>
</p>
</div>

    )
  }
}

