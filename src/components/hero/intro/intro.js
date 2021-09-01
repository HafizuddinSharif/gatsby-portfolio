import React from 'react'

import Button from '../../button/button'
import UnderlineButton from '../../underlinebutton/underlinebutton'

const intro = () => {
    return (
        <div className="col-span-1 grid gap-x-4 gap-y-4 grid-cols-3 lg:grid-cols-6">
            <p className="text-white col-span-full font-bold text-2xl" >👋Hi! I am</p>
            <h1 className="text-white col-span-full font-extrabold text-4xl" >Hafizuddin Sharif</h1>
            <p className="text-white col-span-full text-2xl" >A <span className="font-bold italic">software engineer</span> with a passion to share knowledge.</p>
            <Button text="Contact Me" isFill={true}/>
            <Button text="My Services" isFill={false}/>
            <UnderlineButton text="Resume 🔗"/>
        </div>
    )
}

export default intro
