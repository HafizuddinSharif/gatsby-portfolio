import React from 'react'
import Intro from '../intro/intro'

const banner = ({ mainPic }) => {
    return (
        <div className="flex h-full px-5 lg:px-28">
            <div className="w-full my-auto grid grid-cols-1 lg:grid-cols-2">
                <div className="order-2 lg:order-1 my-auto">
                    <Intro />
                </div>
                {/* Replace with main picture */}
                {/* <MainPicture /> */}
                <img className="mx-auto w-full order-1 lg:order-2 px-10 max-w-2xl" src={mainPic} alt="Sharif"></img>
            </div>
        </div>
    )
}

export default banner
