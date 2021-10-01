import React from 'react'

import { AnchorLink } from 'gatsby-plugin-anchor-links'

const button = ({text, isFill, isBgDark, link}) => {

    const style = {
        backgroundColor: isFill ? "#30ACFF" : '',
        color: isBgDark ? "white" : "black",
        border: "2px #30ACFF solid",
    }
    

    return (
        <div className="col-span-3 lg:col-span-2 rounded-full py-2 lg:mt-4 cursor-pointer text-center" style={style} >
            <AnchorLink to={link} className="font-bold" >{text}</AnchorLink>
        </div>
    )
}

export default button
