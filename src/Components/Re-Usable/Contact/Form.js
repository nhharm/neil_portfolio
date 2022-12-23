import React, { useState } from "react";
import './Form.css'

const ContactForm = () => {
  const [status, setStatus] = useState("Submit");
  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("Sending...");
    const { name, email, message } = e.target.elements;
    let details = {
      name: name.value,
      email: email.value,
      message: message.value,
    };
    let response = await fetch("http://localhost:5000/contact", {
      method: "POST",
      headers: {
        "Content-Type": "application/json;charset=utf-8",
      },
      body: JSON.stringify(details),
    });
    setStatus("Submit");
    let result = await response.json();
    alert(result.status);
  };


  let [isHovering, setIsHovering] = React.useState(false);
  let shrink={
   transform:'',
   transition:'transform 100ms cubic-bezier(0.2, 0.4, 0.5, 0.2)'
 
 }
  const handleMouseOver = () => {
    setIsHovering(true);
  };
 
  const handleMouseOut = () => {
    setIsHovering(false);
  };
 
  if(isHovering){
   shrink.transform='translate(-0.1em,-0.1em)';
 
 }
 else{
   shrink.transform='translate(-0.2em,-0.2em)';
 
 }
  return (
      <form className="mt-12" onSubmit={handleSubmit}>
          <div className="flex flex-row w-full justify-center">

              <div className="mr-2 w-[50%]">
                  <input className="  border-2 p-2 w-full rounded-lg" type="text" id="name" placeholder="first name" required />
              </div>
              <div className=" w-[50%]">
                  <input className=" border-2 p-2 w-full rounded-lg" type="email" id="email" placeholder="email address" required />
              </div>

          </div>

      
      <div className="w-full   my-2 flex justify-center">
        <textarea className=" border-2 p-2 w-full rounded-lg" id="message" placeholder="your message for me!" required />
      </div>
      <button
      style={shrink}
      onMouseOver={handleMouseOver} 
      onMouseOut={handleMouseOut}
      className="text-white font-medium p-2 mt-2 rounded-lg bg-gray-800 w-[120px]" type="submit">{status}</button>
    </form>
  );
};

export default ContactForm;