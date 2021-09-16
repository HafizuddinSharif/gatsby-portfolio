import React from 'react'

const status = ({ status }) => {


    let printedStatus = (
        <div></div>
    )

    if (status === 'online') {
        printedStatus = (
            <div className="inline">
                <span class="relative inline-flex h-3 w-3">
                    <span class="animate-ping absolute inline-flex h-full w-full my-auto rounded-full bg-green-400 opacity-75"></span>
                    <span class="absolute inline-flex rounded-full h-3 w-3 bg-green-500"></span>
                </span>
                <span className="font-normal text-md text-green-400">&nbsp;&nbsp;online</span>
            </div>
        )
    } else if (status === 'offline') {
        printedStatus = (
            <div className="inline">
                <span class="relative inline-flex h-3 w-3">
                    <span class="animate-ping absolute inline-flex h-full w-full my-auto rounded-full bg-red-400 opacity-75"></span>
                    <span class="absolute inline-flex rounded-full h-3 w-3 bg-red-500"></span>
                </span>
                <span className="font-normal text-md text-red-400">&nbsp;&nbsp;offline</span>
            </div>
        )
    } else if (status === 'limited') {
        printedStatus = (
            <div className="inline">
                <span class="relative inline-flex h-3 w-3">
                    <span class="animate-ping absolute inline-flex h-full w-full my-auto rounded-full bg-yellow-400 opacity-75"></span>
                    <span class="absolute inline-flex rounded-full h-3 w-3 bg-yellow-500"></span>
                </span>
                <span className="font-normal text-md text-yellow-400">&nbsp;&nbsp;limited</span>
            </div>
        )
    }

    return (
        <div className="inline">
            {printedStatus}
        </div>
    )
}

export default status
