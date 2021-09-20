import React from 'react'
import ProjectBlock from './projectblock/projectblock'

const projects = ({ projectList }) => {
    return (
        <div className="px-5 py-24 lg:px-28 grid grid-cols-1">
            <h1 className="text-3xl font-bold"><span className="text-secondary">Projects</span> that I did</h1>
            { projectList.map( (item, index) =>  <ProjectBlock 
            key={index} 
            title={item.name} 
            description={item.description} 
            status={item.status} 
            imageSrc={item.imageSrc}
            codeLink={item.codeLink}
            demoLink={item.demoLink} />) }
        </div>
    )
}

export default projects
