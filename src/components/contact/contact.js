import React , { useState } from 'react'
import Button from '../button/button'

import emailjs from 'emailjs-com'

const Contact = () => {

    const [appear, setAppear] = useState(false) 

    const sendEmail = e => {

        e.preventDefault();

        // emailjs.sendForm(process.env.GATSBY_SERVICE_ID, process.env.GATSBY_TEMPLATE_ID, e.target, process.env.GATSBY_USER_ID)
        //   .then((result) => {
        //       console.log(result.text);
        //   }, (error) => {
        //       console.log(error.text);
        //   });
    }

    const clickToAppear = () => {

        if (appear) {
            setAppear(false)
        } else {
            setAppear(true)
        }

    }

    const buttonStyle = {
        backgroundColor: "#30ACFF",
        color: "white",
        border: "2px #30ACFF solid",
    }

    return (
        <div className="h-screen bg-gray-900 text-white px-5 py-24 lg:px-28 flex">

            <div className="my-auto w-full lg:w-1/2">

                <h1 className="font-bold text-2xl mb-6">Contact me!</h1>
                { appear && <h1 className="font-bold text-2xl mb-6">I am HERE!</h1> }

                <form className="grid grid-cols-2 gap-y-4" onSubmit={sendEmail}>

                    <label name="name" className="col-span-2" >Name</label>
                    <input className="text-black col-span-2 py-1 px-2" name="user_name"></input>

                    <label name="email" className="col-span-2" >Email</label>
                    <input className="text-black col-span-2 py-1 px-2" name="user_email"></input>

                    <label name="message" className="col-span-2" >Short Message</label>
                    <textarea className="text-black col-span-2 py-1 px-2" name="message"></textarea>

                    <button type="submit" className="rounded-full py-2 mt-5 font-bold" style={buttonStyle}>Submit</button>
                    <button className="rounded-full py-2 mt-5 font-bold" onClick={clickToAppear} style={buttonStyle}>Click here</button>
                    

                </form>

            </div>
            
        </div>
    )
}

export default Contact
