import React from "react";
import ContactBox from "../Contact/Contact";
const gradientAbstract3 = require('../../../Images/nh_gradient3.png')


export default class Footer extends React.Component {
constructor(props){
    super(props)
        this.state={background:"linear-gradient(265deg, rgba(7,138,171,1) 0%, rgba(0,255,241,1) 65%, rgba(191,255,80,1) 100%)"}
    
}

    render(){
        return(
            <div>
            <ContactBox />
            <footer className="w-full side-margins">
                
                                <img className="absolute w-[200px]  -z-20 left-12 " src={gradientAbstract3} alt="" />

            <div style={this.state} className="w-full h-[full]  rounded-lg -z-55 relative ">
                <div className="-translate-x-2 -translate-y-2 w-full h-[full] p-8 border-2 border-gray-300 border-solid  bg-white rounded-lg mx-auto mt-14 mb-32">
                    <h4 className="text-lg text-gray-800 text-center font-semibold">you can contact me directly at nhharm@gmail.com</h4>
                    <div className="flex flex-row w-full justify-center pt-6">
                        <a target="_blank" rel="noopener noreferrer" href="https://github.com/nhharm?tab=repositories"><p className="text-sm bg-gray-800 text-white  rounded-lg mr-2 px-2 py-1">github</p></a>
                       <a target="_blank" rel="noopener noreferrer" href="#"><p className="text-sm bg-gray-800 text-white rounded-lg mr-2  px-2 py-1">linkedin</p></a> 
                       <a target="_blank" rel="noopener noreferrer" href="https://codepen.io/your-work/"> <p className="text-sm bg-gray-800 text-white rounded-lg px-2 py-1">codepen</p></a>
                    </div>
                </div>
                </div>
            </footer>
            </div>
        )
    }
}