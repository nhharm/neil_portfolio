import React from "react";
import { Link } from 'react-router-dom';

function Card({ title, children, link}) {

let [over,setOver]=React.useState(false);

  let buttonstyle={
   backgroundColor:''
 }

 if(over){
   buttonstyle.background="linear-gradient(265deg, rgba(7,138,171,1) 0%, rgba(0,255,241,1) 65%, rgba(191,255,80,1) 100%)"
 }
 else{
   buttonstyle.background='';
 }


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
  shrink.transform='translate(-0.25em,-0.25em)';

}
else{
  shrink.transform='translate(-0.5em,-0.5em)';

}

  return (
    
    <div 
    style={buttonstyle}
    onMouseOver={()=>setOver(true)} 
    onMouseOut={()=>setOver(false)} className="bg-gray-800 rounded-lg h-[150px] -z-50 cursor-pointer ">
        <Link to={link}>

    <div 
    style={shrink}
onMouseOver={handleMouseOver} 
onMouseOut={handleMouseOut}
      className="bg-white cursor-pointer  rounded-lg h-[150px] text-gray-800 border-gray-300 border-2 my-8 p-6"
    >
     
      {title ? (
        <div padding="10px 0">
          <h3 className="text-2xl font-bold">{title}</h3>
        </div>
      ) : null}
      {children ? <div><p>{children}</p></div> : null}
     

   </div>
 </Link> </div>
  )
}
export default Card

