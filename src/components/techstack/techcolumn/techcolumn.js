import React from 'react'

const techcolumn = ({ title, techList }) => {

    const makeUnderline = {
        height: "15px",
        width: "150px",
        top: "25px",
        position: "absolute",
        left: "50%",
        transform: "translate(-50%, 0)",
    }

    return (
        <div className="pt-10 pb-20 col-span-1 grid-rows-2">
            <h2 className="pb-20 text-center relative px-2"><span className="relative z-10 font-bold text-3xl">{title}</span><span className="mx-auto absolute bg-secondary z-0 transform -skew-y-12 rotate-12" style={makeUnderline}></span></h2>
            <div className="grid grid-cols-3 mx-5 gap-9">
                { techList.map( item => <img className="m-auto" src={item.iconSrc} alt={item.name} ></img> )}
            </div>
        </div>
    )
}

export default techcolumn
