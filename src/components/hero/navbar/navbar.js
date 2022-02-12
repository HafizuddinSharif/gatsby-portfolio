import React , { useState } from 'react'

import { useSpring , animated } from 'react-spring'

import { AnchorLink } from 'gatsby-plugin-anchor-links'

import { useWindowSize } from 'react-use'

const Navbar = () => {

    // variables
    // const windowWidth = window.innerWidth
    const { width, height } = useWindowSize();

    // useState declarations
    const [appear, setAppear] = useState(width <= 1024 ? false : true) 

    const dropdown = useSpring({
        transform: `perspective(100px) translateY(${appear ? 0 : -8}rem)`,
        config: { mass: 1, tension: 500, friction: 80 },
    })

    const clickToAppear = () => {

        if (width <= 1024) {
            if (appear) {
                setAppear(false)
            } else {
                setAppear(true)
            }
        }

    }

    return (

        <nav className="z-30 fixed lg:px-28 lg:py-3 grid gap-x-4 grid-cols-1 lg:grid-cols-12 lg:bg-gray-900 w-full">

            <div className="bottom-34 relative z-30 font-bold text-center text-white py-4 lg:py-0 lg:text-left lg:col-span-3 bg-gray-900 grid grid-cols-2 w-full px-5 lg:px-0">
                <a href="#" className="text-left lg:col-span-2">Hafizuddin Sharif</a>
                <button className="text-right text-white lg:hidden" onClick={clickToAppear}>
                    <svg fill="#fff" xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 50 50" width="20px" height="20px" className="ml-auto">
                        { !appear && <path d="M 0 7.5 L 0 12.5 L 50 12.5 L 50 7.5 Z M 0 22.5 L 0 27.5 L 50 27.5 L 50 22.5 Z M 0 37.5 L 0 42.5 L 50 42.5 L 50 37.5 Z"/> }
                        { appear && <path d="M 9.15625 6.3125 L 6.3125 9.15625 L 22.15625 25 L 6.21875 40.96875 L 9.03125 43.78125 L 25 27.84375 L 40.9375 43.78125 L 43.78125 40.9375 L 27.84375 25 L 43.6875 9.15625 L 40.84375 6.3125 L 25 22.15625 Z"/> }
                    </svg>
                </button>
            </div>

            <animated.div className="relative z-0 lg:bottom-0 lg:col-span-9 grid grid-cols-1 gap-y-5 lg:grid-cols-12 bg-gray-900" style={{...dropdown}}>
                <button className="text-center lg:col-start-7 lg:col-span-2 lg:text-right text-white" onClick={clickToAppear}>
                    <AnchorLink to="/#projects" >Projects</AnchorLink>
                </button>
                <button className="text-center lg:col-span-2 lg:text-right text-white" onClick={clickToAppear}>
                    <AnchorLink to="/#contact" >Contact</AnchorLink>
                </button>
                <a href="https://blog.hafizuddinsharif.com" className="lg:col-span-2 lg:text-right text-white text-center pb-5 lg:pb-0" target="_blank" rel="noreferrer">Blog&nbsp;<svg className="inline" fill="#fff" xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 24 24" width="18px" height="18px"><path d="M 5 3 C 3.9069372 3 3 3.9069372 3 5 L 3 19 C 3 20.093063 3.9069372 21 5 21 L 19 21 C 20.093063 21 21 20.093063 21 19 L 21 12 L 19 12 L 19 19 L 5 19 L 5 5 L 12 5 L 12 3 L 5 3 z M 14 3 L 14 5 L 17.585938 5 L 8.2929688 14.292969 L 9.7070312 15.707031 L 19 6.4140625 L 19 10 L 21 10 L 21 3 L 14 3 z"/></svg></a>
            </animated.div>
            
            

        </nav>
    )
}

export default Navbar
