import React from 'react'

import NavBar from "./navbar/navbar"
import Banner from './banner/banner'

const hero = () => {

    return (
        <div className="h-screen bg-gray-900 w-full">
            <NavBar />
            <Banner />
        </div>
    )
}

export default hero
