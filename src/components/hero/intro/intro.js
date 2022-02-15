import React from 'react'

import UnderlineButton from '../../underlinebutton/underlinebutton'
import ButtonInPage from '../../buttonInPage/buttonInPage'

const intro = () => {
    return (
        <div className="text-center lg:text-left col-span-1 grid gap-4 grid-cols-3 lg:grid-cols-6">
            <p className="text-white col-span-full font-bold text-2xl" >👋Hi! I am</p>
            <h1 className="text-white col-span-full font-extrabold text-3xl lg:text-4xl text-secondary tracking-wider" >Hafizuddin Sharif</h1>
            <p className="mb-4 lg:mb-0 text-white col-span-full text-2xl" >A <span className="font-bold italic">software engineer</span> with a passion to share knowledge.</p>
            <ButtonInPage text="Contact Me" isFill={true} isBgDark={true} link="/#contact" />
            {/* Will be edited */}
            {/* <Button text="My Services" isFill={false} isBgDark={true}/> */}
            <UnderlineButton text="Resume 🔗" link="https://drive.google.com/file/d/1KiDTkz3oIZ69WjlB3N78TCukwHGUp6Q8/view?usp=sharing"/>
        </div>
    )
}

export default intro
