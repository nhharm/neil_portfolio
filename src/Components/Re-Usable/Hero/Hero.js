import React from "react";

const headshot = require('../../../Images/Headshots/nh_headshot.jpg')



export default class Hero extends React.Component {


    render() {
        return (
            <div className="side-margins py-8 mt-24">


                <div className="flex flex-row w-full h-full align-middle justify-around">
                    <div className='w-[70%] px-1 sm:w-full'>
                        <h1 className="text-7xl font-extrabold text-gray-800">Hi! I'm <span className="hand-drawn text-[98px]">neil</span></h1>
                        <p className="text-gray-400 text-xl font-medium leading-9 w-[98%] rounded-lg bg-white p-4">I'm Neil Harm, a branding professional based in Alexandria, VA, currently working with VSE Corporation. My work has revolved around enhancing/integrating corporate branding through modern design, web assets and digital media.</p>
                    </div>

                    <div className="w-[30%] h-[300px] md:pt-14 md:mr-2 md:h-[250px]  sm:hidden">
                        <img src={headshot}
                            alt="Neil Harm Headshot"
                            className=" border-solid border-2 border-gray-800 rounded-lg object-cover h-[250px] rotate-12 mt-[-30%]"
                        />
                    </div>
                </div>
            </div>
        )

    }
}