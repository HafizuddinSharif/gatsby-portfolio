import React from 'react'

import NavBar from "./navbar/navbar"
import Banner from './banner/banner'

const hero = () => {

    const style = {
        backgroundColor: '#2E2E2E',
    }

    return (
        <div style={style} className="h-screen ">
            <NavBar />
            <Banner />
        </div>
    )
}

export default hero
