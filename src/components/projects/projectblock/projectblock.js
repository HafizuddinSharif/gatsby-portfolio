import React from 'react'
import Button from '../../button/button'

const projectblock = ({ title, description, imageSrc, demoLink, codeLink }) => {
    return (
        <div className="lg:py-32 py-10 grid grid-cols-1 lg:grid-cols-2 gap-y-4">

            <div className="col-span-1 bg-gradient-to-r from-yellow-400 via-red-500 to-pink-500 h-64 w-100 lg:order-2">
            </div>

            <div className="col-span-1 my-auto mr-5 lg:order-1">
                <h3 className="text-xl font-bold">{title}</h3>
                <p>{description}</p>
                <div className="grid grid-cols-6 w-full gap-4">
                    <Button text="Live demo" isFill={true} isBgDark={false} link={demoLink} />
                    <Button text="View code" isFill={false} isBgDark={false} link={codeLink} />
                </div>
            </div>

        </div>
    )
}

export default projectblock
