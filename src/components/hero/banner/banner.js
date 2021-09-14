import React from 'react'
import Intro from '../intro/intro'

const banner = () => {
    return (
        <div className="flex h-full px-5 lg:px-28">
            <div className="w-full my-auto grid grid-cols-1 lg:grid-cols-2">
                <Intro />
                <div className="bg-gradient-to-r from-yellow-400 via-red-500 to-pink-500 h-1/2 w-100">
                </div>
            </div>
        </div>
    )
}

export default banner
