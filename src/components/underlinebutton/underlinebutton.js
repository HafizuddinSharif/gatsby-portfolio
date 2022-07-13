import React from 'react'

const button = ({text, link}) => {

    return (
        <a className="col-start-2 lg:col-start-1 lg:col-span-4 cursor-pointer" href={link} target="_blank" rel="noreferrer">
            <p className="font-light text-white text-center lg:text-left hover:underline">{text}</p>
        </a>
    )
}

export default button
