import React from 'react'

const navbar = () => {
    return (
        <nav className="z-30 fixed px-5 md:px-28 py-5 grid gap-x-4 grid-cols-1 lg:grid-cols-12 w-full bg-gray-900">
            <a href="#" className="font-bold text-center text-white lg:text-left lg:col-span-3">Hafizuddin Sharif</a>
            <a href="#" className="text-center lg:col-start-9 lg:col-span-2 lg:text-right text-white">Blog</a>
            <a href="#" className="lg:col-span-2 lg:text-right text-white text-center">Portfolio</a>
        </nav>
    )
}

export default navbar
