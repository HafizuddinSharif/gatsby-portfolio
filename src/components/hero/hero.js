import React from 'react'

import NavBar from "./navbar/navbar"
import NavBar2 from "../navbar2/navbar2"
import Banner from './banner/banner'

const hero = ({ mainPic }) => {

    return (
        <div className="h-screen bg-gray-900 w-full">
            <NavBar2 />
            <Banner mainPic={mainPic}/>
        </div>
    )
}

export default hero
