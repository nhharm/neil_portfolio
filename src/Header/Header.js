import React from "react";

const logo = require('../Images/Logos/nh_logo.png')

export default class Header extends React.Component {


    render(){
        return(
            <header className="w-full side-margins">
                <div className='items-center flex px-2 py-8 top-0 transition-all'>
                    <figure><img className="w-16 mr-16 object-contain" src={logo} alt="Neil Harm Portolio Logo"></img></figure>
                    <ul className="w-full text-lg text-white  font-extrabold text-right">
                        <li className='inline-block px-4 py-2 mx-8 min-w-110 bg-sky-600 rounded-lg'>about me</li>
                        <li className='inline-block px-4 py-2 mx-8 min-w-110 bg-sky-600 rounded-lg'>design</li>
                        <li className='inline-block px-4 py-2 mx-8 min-w-110 bg-sky-600 rounded-lg'>code</li>
                    </ul>
                </div>
            </header>
        )
    }
}