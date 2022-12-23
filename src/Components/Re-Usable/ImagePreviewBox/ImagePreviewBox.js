import React from "react";
import { Link } from 'react-router-dom';



function Card({ title, children, image, link}) {




 let [isHovering, setIsHovering] = React.useState(false);
 let shrink={
  transform:'',
  transition:'transform 125ms cubic-bezier(0.2, 0.4, 0.5, 0.2)'

}
 const handleMouseOver = () => {
   setIsHovering(true);
 };

 const handleMouseOut = () => {
   setIsHovering(false);
 };

 if(isHovering){
  shrink.transform='translate(0.15em,0.15em)';

}
else{
  shrink.transform='';

}

  return (

    <div 
    className="bg-gray-800 rounded-lg h-[300px] cursor-pointer ">
    <div 
  

      className="bg-white cursor-pointer -translate-x-[0.25em] -translate-y-[0.25em] rounded-lg h-[300px]  text-gray-800 border-gray-300 border-2  "
 
    >
       {image ? (
        <div className="h-[60%] w-full">
          <img className=" object-cover w-full h-full" src={image} alt='#'></img>
        </div>
      ) : null}

      {title ? (
          <h3 className="text-xl font-bold p-2">{title}</h3>
    
      ) : null}
          
      {children ? <p>{children}</p>: null}
      <Link to={link}>
      <button
        style={shrink}
      onMouseOver={handleMouseOver} 
      onMouseOut={handleMouseOut}
      className=" bg-white cursor-pointer text-gray-800 border-gray-300 border-2 font-s p-1 m-2 rounded-lg w-[120px] " type="submit">Learn More</button></Link>
   
     
    </div> </div>
  )
}
export default Card

