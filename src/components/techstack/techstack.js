import React from 'react'
import Box from './box/box'

const techstack = ({ techList }) => {
    return (
        <div className="py-44 lg:py-0 lg:h-screen bg-gray-900 px-5 lg:px-28 flex">
            <Box techList={techList} />
        </div>
    )
}

export default techstack
