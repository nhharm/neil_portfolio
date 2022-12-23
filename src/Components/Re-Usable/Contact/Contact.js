import React from "react";
import ContactForm from "./Form";


export default class ContactBox extends React.Component {

    render() {
        return (
            <div className="side-margins my-24">
                <h2 className='text-5xl font-bold text-gray-800 text-center'>get in touch with me</h2>
                <ContactForm  />
            </div>
        )}};