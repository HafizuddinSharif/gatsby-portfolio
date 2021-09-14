import React from 'react'

import Button from '../../button/button'
import UnderlineButton from '../../underlinebutton/underlinebutton'

const intro = () => {
    return (
        <div className="text-center lg:text-left col-span-1 grid gap-4 grid-cols-3 lg:grid-cols-6">
            <p className="text-white col-span-full font-bold text-2xl" >👋Hi! I am</p>
            <h1 className="text-white col-span-full font-extrabold text-3xl lg:text-4xl text-secondary tracking-wider" >Hafizuddin Sharif</h1>
            <p className="mb-4 lg:mb-0 text-white col-span-full text-2xl" >A <span className="font-bold italic">software engineer</span> with a passion to share knowledge.</p>
            <Button text="Contact Me" isFill={true} isBgDark={true}/>
            <Button text="My Services" isFill={false} isBgDark={true}/>
            <UnderlineButton text="Resume 🔗"/>
        </div>
    )
}

export default intro
