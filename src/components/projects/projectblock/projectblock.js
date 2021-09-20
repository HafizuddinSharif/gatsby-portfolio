import React from 'react'
import Button from '../../button/button'

import Status from '../status/status'

const projectblock = ({ title, description, imageSrc, demoLink, codeLink, status }) => {
    return (
        <div className="relative lg:py-32 py-10 grid grid-cols-1 lg:grid-cols-2 gap-y-4">

            <img className="col-span-1 mx-auto w-full max-w-2xl lg:order-2 rounded-lg shadow-lg mb-5 lg:mb-0" src={imageSrc} alt="project pic">
            </img>

            <div className="col-span-1 my-auto mr-5 lg:order-1">
                <h3 className="text-xl font-bold">
                    {title}&nbsp;&nbsp;&nbsp;
                    <Status status={status} />
                </h3>
                <p className="leading-loose">{description}</p>
                <div className="grid grid-cols-6 w-full gap-4 mt-5">
                    <Button text="Live demo" isFill={true} isBgDark={false} link={demoLink} />
                    <Button text="View code" isFill={false} isBgDark={false} link={codeLink} />
                </div>
            </div>

            

        </div>
    )
}

export default projectblock
