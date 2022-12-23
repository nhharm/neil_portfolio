import React from "react";

function Card({ title, textBlock, textBlock2, codePen}) {


  return (
    <div>
    

      {title ? ( <h3 className="text-4xl font-bold py-4">{title}</h3> ) : null}
      {textBlock ? <p className=" text-gray-400 text-xl font-medium leading-9 w-[98%]">{[textBlock]}</p> : null}
      {codePen ? <div className="m-2">{[codePen]}</div>: null}
      {textBlock2 ? <p className="pb-10 text-gray-400 text-xl font-medium leading-9 w-[98%]">{[textBlock2]}</p> : null}

    </div> 
  )
}
export default Card

