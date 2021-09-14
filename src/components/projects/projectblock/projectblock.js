import React from 'react'
import Button from '../../button/button'

const projectblock = () => {
    return (
        <div className="py-32 grid grid-cols-1 lg:grid-cols-2 gap-y-4">
            <div className="col-span-1">
                <h3>Project title</h3>
                <p>Project description</p>
                <div className="grid grid-cols-6 w-full gap-4">
                    <Button text="Live demo" isFill={true} isBgDark={false}/>
                    <Button text="View code" isFill={false} isBgDark={false}/>
                </div>
            </div>
            <img className="col-span-1" src="" alt="shessh lek cang"></img>
            
        </div>
    )
}

export default projectblock
