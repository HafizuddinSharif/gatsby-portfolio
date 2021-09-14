import React from 'react'

const button = ({text, isFill, isBgDark}) => {

    const style = {
        backgroundColor: isFill ? "#30ACFF" : '',
        color: isBgDark ? "white" : "black",
        border: "2px #30ACFF solid",
    }

    return (
        <div className="col-span-3 lg:col-span-2 rounded-full py-2 lg:mt-4" style={style}>
            <p className="font-bold  text-center">{text}</p>
        </div>
    )
}

export default button
