import React from 'react'
import Intro from '../intro/intro'

const banner = () => {
    return (
        <div className="flex h-full px-28">
            <div className="m-auto grid grid-cols-2">
                <Intro />
                <div className="bg-gradient-to-r from-yellow-400 via-red-500 to-pink-500 ">
                </div>
            </div>
        </div>
    )
}

export default banner
