import React , { useState } from 'react'
import Button from '../button/button'

import emailjs from 'emailjs-com'

import { useSpring , animated } from 'react-spring'

const Contact = () => {

    // useState declarations
    const [appear, setAppear] = useState(true) 

    // animations
    const animateFadeIn = useSpring({
        pause: appear, 
        to: { opacity: 1 }, 
        from: { opacity: 0 },
        delay: 1000,
    })

    const animateFadeOut = useSpring({
        pause: appear,
        to: { opacity: 0 }, 
        from: { opacity: 1 },
    })

    // functions
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

    // inline styles
    const buttonStyle = {
        backgroundColor: "#30ACFF",
        color: "white",
        border: "2px #30ACFF solid",
    }

    return (
        <div className="h-screen bg-gray-900 text-white px-5 py-24 lg:px-28 flex" id="contact">

            <div className="my-auto w-full lg:w-1/2">

                <h1 className="font-bold text-2xl mb-6">Contact me!</h1>

                <form className="grid grid-cols-2 gap-y-4 relative" onSubmit={sendEmail}>

                    <label name="name" className="col-span-2 text-secondary font-bold" required>Name</label>
                    <input type="text" className="text-black col-span-2 py-1 px-2 focus:outline-none focus:ring-2 focus:ring-secondary focus:border-transparent" name="user_name" ></input>

                    <label name="email" className="col-span-2 text-secondary font-bold" required>Email</label>
                    <input type="email" className="text-black col-span-2 py-1 px-2 focus:outline-none focus:ring-2 focus:ring-secondary focus:border-transparent" name="user_email" ></input>

                    <label name="message" className="col-span-2 text-secondary font-bold" required>Short Message</label>
                    <textarea className="text-black col-span-2 py-1 px-2 focus:outline-none focus:ring-2 focus:ring-secondary focus:border-transparent" name="message"></textarea>

                    <animated.div className="relative z-20" style={animateFadeOut}>
                        <button type="submit" className="w-full rounded-full py-2 mt-5 font-bold" onClick={clickToAppear} style={buttonStyle}>Submit</button>
                    </animated.div>

                    <animated.div className="absolute z-10" style={{top: '320px', ...animateFadeIn}}>
                        <p className="text-green-400 font-bold" >😎 Thank you! I'll get back to you around 1-2 days.</p>
                    </animated.div>
                    
                </form>

            </div>
            
        </div>
    )
}

export default Contact
