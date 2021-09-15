import React from 'react'
import ProjectBlock from './projectblock/projectblock'

const projects = () => {
    return (
        <div className="px-5 py-24 lg:px-28 grid grid-cols-1">
            <h1 className="text-3xl font-bold"><span className="text-secondary">Projects</span> that I did</h1>
            <ProjectBlock title="Project #1" description="This is the description of a project. You can also put what tech stack that you used"/>
            <ProjectBlock title="Project #2" description="This is the description of a project. You can also put what tech stack that you used"/>
            <ProjectBlock title="Project #3" description="This is the description of a project. You can also put what tech stack that you used"/>
        </div>
    )
}

export default projects
