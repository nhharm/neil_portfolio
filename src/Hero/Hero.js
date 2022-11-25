import React from "react";
const headshot = require('../Images/Headshots/nh_headshot.jpg')
const circleMove = require('../Images/circle_movement_1.png')

export default class Hero extends React.Component {


    render() {
        return (
            <div className="side-margins py-8 mt-24">
                <img className="absolute w-[500px] top-80" src={circleMove} alt="" />
                <div className="flex flex-row w-full h-full align-middle justify-around">
                    <div className='w-[70%] px-1'>
                        <h1 className="text-7xl font-extrabold text-gray-800">Hi! I'm Neil</h1>
                        <p className="text-gray-400 text-xl font-medium leading-9 w-[94%] pt-5">I'm Neil Harm, a branding professional based in Alexandria, VA, currentley working with VSE Corporation. My work has revolved around enhancing/integrating corporate branding through modern design, web assets and digital media.</p>
                    </div>

                    <div className="w-[30%] h-[300px]">
                        <img src={headshot}
                            alt="Neil Harm Headshot"
                            className=" rounded-lg object-cover h-[250px] rotate-12 mt-[-30%]"
                        />
                    </div>
                </div>
            </div>
        )

    }
}