import React from 'react'

import TechColumn from '../techcolumn/techcolumn'

const box = ({ techList }) => {
    return (
        <div className="m-auto grid grid-cols-1 md:grid-cols-3 bg-white rounded-xl shadow-md divide-y-2 lg:divide-y-0 lg:divide-x-2 divide-gray-900">
            <TechColumn techList={techList.frontend} title="Front-end" />
            <TechColumn techList={techList.backend} title="Back-end" />
            <TechColumn techList={techList.other} title="Others" />
        </div>
    )
}

export default box
