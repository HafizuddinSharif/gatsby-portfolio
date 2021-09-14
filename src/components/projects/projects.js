import React from 'react'
import ProjectBlock from './projectblock/projectblock'

const projects = () => {
    return (
        <div className="px-5 lg:px-28 grid grid-cols-1">
            <h1 className="text-3xl">Projects that I did</h1>
            <ProjectBlock />
        </div>
    )
}

export default projects
