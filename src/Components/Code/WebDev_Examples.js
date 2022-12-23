import React from "react";
import Card from "./CodeProjectTemplate";

const textBlock = <p>Below are a series of page designs, developed in HTML, CSS and JavaScript to show a basic understanding of web development languages and systems. Each homepage incorporates fundamentals like CSS-Grid, Flexbox and DOM Structure/manipulation.<br /><br />
The homepage below is a prototype for a standard corporate website that demonstrates effective use of flexbox. This site uses flex to create a simple transition from web to mobile views, while keeping the same webflow of content for User Experiences.
</p>

const textBlock2 = <p>My css-grid template demonstrated below is a homepage snipet of a full Portfolio Website coded in HTML, CSS, JS, JSON and PHP. It was inspired by a London based branding agency and is used to promote projects and stories alike. It shows unique grid layouts that are easily transitioned to mobile views, while providing a dynamic user experience through JS.</p>

export default class WebDev extends React.Component {

  render() {
    return (
      <div className="side-margins py-8 mt-24  rounded-xl">
        <div className="h-full align-middle justify-around rounded-lg p- bg-white w-[90%] mx-auto">
          <Card title="FlexBox and CSS Grid Homepage Examples" 
                textBlock={textBlock}
          />
          <div className="my-8"><p className="codepen" data-height={300} data-theme-id="light" data-default-tab="html,result" data-slug-hash="LYrwoYJ" data-user="nhharm" style={{ height: 300, boxSizing: 'border-box', display: 'flex', alignItems: 'center', justifyContent: 'center', border: '2px solid', margin: '1em 0', padding: '1em' }}>
            <span>See the Pen <a href="https://codepen.io/nhharm/pen/LYrwoYJ">
              WebDev: Flexbox Home Page Example</a> by NH (<a href="https://codepen.io/nhharm">@nhharm</a>)
              on <a href="https://codepen.io">CodePen</a>.</span>
          </p>
          </div>

          <Card textBlock2={textBlock2}
          />
          <div className="my-8">
            <p className="codepen" data-height={300} data-theme-id="light" data-default-tab="html,result" data-slug-hash="poZzRQG" data-preview="true" data-user="nhharm" style={{ height: 300, boxSizing: 'border-box', display: 'flex', alignItems: 'center', justifyContent: 'center', border: '2px solid', margin: '1em 0', padding: '1em' }}>
              <span>See the Pen <a href="https://codepen.io/nhharm/pen/poZzRQG">
                Untitled</a> by NH (<a href="https://codepen.io/nhharm">@nhharm</a>)
                on <a href="https://codepen.io">CodePen</a>.</span>
            </p>
          </div>

        </div>
      </div>

    )
  }
}

