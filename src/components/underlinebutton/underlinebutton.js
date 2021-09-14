import React from 'react'

const button = ({text, link}) => {

    return (
        <a class="col-start-2 lg:col-start-1 lg:col-span-2 cursor-pointer" href={link}>
            <p class="font-light text-white text-center">{text}</p>
        </a>
    )
}

export default button
