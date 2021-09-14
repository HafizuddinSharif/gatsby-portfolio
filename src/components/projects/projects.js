import React from 'react'
import ProjectBlock from './projectblock/projectblock'

const projects = () => {
    return (
        <div className="px-5 py-24 lg:px-28 grid grid-cols-1">
            <h1 className="text-3xl font-bold"><span className="text-secondary">Projects</span> that I did</h1>
            <ProjectBlock />
        </div>
    )
}

export default projects
