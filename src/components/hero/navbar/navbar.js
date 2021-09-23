import React , { useState } from 'react'

import { useSpring , animated } from 'react-spring'

import { AnchorLink } from 'gatsby-plugin-anchor-links'

const Navbar = () => {

    // variables
    const windowWidth = window.innerWidth

    // useState declarations
    const [appear, setAppear] = useState(windowWidth <= 1024 ? false : true) 

    const dropdown = useSpring({
        transform: `perspective(100px) translateY(${appear ? 0 : -8}rem)`,
        config: { mass: 1, tension: 500, friction: 80 },
    })

    const clickToAppear = () => {

        if (appear) {
            setAppear(false)
        } else {
            setAppear(true)
        }

    }

    return (

        <nav className="z-30 fixed lg:px-28 lg:py-5 grid gap-x-4 grid-cols-1 lg:grid-cols-12 lg:bg-gray-900 w-full">

            <div className="bottom-34 relative z-30 font-bold text-center text-white py-4 lg:py-0 lg:text-left lg:col-span-3 bg-gray-900 grid grid-cols-2 w-full px-5 lg:px-0">
                <a href="#" className="text-left lg:col-span-2">Hafizuddin Sharif</a>
                <button className="text-right text-white lg:hidden" onClick={clickToAppear}>Open</button>
            </div>

            <animated.div className="relative z-0 lg:bottom-0 lg:col-span-9 grid grid-cols-1 gap-y-5 lg:grid-cols-12 bg-gray-900" style={{...dropdown}}>
                <a href="https://blog.hafizuddinsharif.com" className="text-center lg:col-start-7 lg:col-span-2 lg:text-right text-white">Blog</a>
                <AnchorLink to="/#contact" className="text-center lg:col-span-2 lg:text-right text-white">Contact</AnchorLink>
                <AnchorLink to="/#projects" className="lg:col-span-2 lg:text-right text-white text-center pb-5 lg:pb-0">Projects</AnchorLink>
            </animated.div>

            

        </nav>
    )
}

export default Navbar
