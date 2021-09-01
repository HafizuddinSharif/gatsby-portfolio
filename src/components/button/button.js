import React from 'react'

const button = ({text, isFill}) => {

    const style = {
        backgroundColor: isFill ? "#30ACFF" : '',
        border: "2px #30ACFF solid",
    }

    return (
        <div className="col-span-2 rounded-full py-2 mt-4" style={style}>
            <p className="font-bold text-white text-center">{text}</p>
        </div>
    )
}

export default button
