import React from "react";

function Card({ title, textBlock, image}) {


  return (
    <div>
    
      {image ? (<div className="h-[400px] w-full rounded-lg"><img className=" object-cover rounded-lg w-full h-full" src={image} alt='#'/></div> ) : null}
      {title ? ( <h3 className="text-4xl font-bold py-4">{title}</h3> ) : null}
      {textBlock ? <div className="pb-10 text-gray-400 text-xl font-medium leading-9 w-[98%] sm:w-full">{textBlock}</div> : null}
      
    </div>
  )
}
export default Card

