import React, { useEffect, useState }  from "react";
import { NavLink } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from "@fortawesome/free-solid-svg-icons";
import './Header.css'

const mobileButton = <FontAwesomeIcon icon={faBars} />
const logo = require('../../../Images/Logos/nh_logo.png')



export default function Header() {
    const [toggleMenu, setToggleMenu] = useState(false)
    const toggleNav = () => {
        setToggleMenu(!toggleMenu)
      }
      const [screenWidth, setScreenWidth] = useState(window.innerWidth)
      useEffect(() => {

        const changeWidth = () => {
          setScreenWidth(window.innerWidth);
        }
    
        window.addEventListener('resize', changeWidth)
        return () => {
            window.removeEventListener('resize', changeWidth)
        }
      }, [])
        return(
        
            <header className="w-full side-margins">
                <div className='items-center flex px-2 py-8 top-0 transition-all mobile-menu'>
                    
                <NavLink className="nav-link" to={process.env.PUBLIC_URL + '/'}> <figure><img className="w-16 mr-16 object-contain" src={logo} alt="Neil Harm Portolio Logo"></img></figure></NavLink>
                {(toggleMenu || screenWidth > 816) && (

                    <ul className="w-full text-lg text-white  font-extrabold text-right">
                    <NavLink className="nav-link" to={process.env.PUBLIC_URL + '/About'}>  <li className='inline-block px-4 py-1 mx-8 min-w-110 rounded-lg bg-white cursor-pointer text-gray-800 border-gray-300 border-2 '>about me</li></NavLink>
                    <NavLink className="nav-link" to={process.env.PUBLIC_URL + '/Design'}>  <li className='inline-block px-4 py-1 mx-8 min-w-110 rounded-lg bg-white cursor-pointer text-gray-800 border-gray-300 border-2 '>design</li></NavLink>
                    <NavLink className="nav-link" to={process.env.PUBLIC_URL + '/Code'}> <li className='inline-block px-4 py-1 mx-8 min-w-110 rounded-lg bg-white cursor-pointer text-gray-800 border-gray-300 border-2'>code</li></NavLink>
                    </ul>
                        )}
                    <button onClick={toggleNav} className="btn hidden text-md absolute right-6 top-6">{mobileButton}</button>

                </div>
              
            </header>
             
        )
    
}
