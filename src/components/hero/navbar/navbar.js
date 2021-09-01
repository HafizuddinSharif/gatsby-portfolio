import React from 'react'

const navbar = () => {
    return (
        <div class="fixed px-28 py-5 grid gap-x-4 grid-cols-3 lg:grid-cols-12 w-full">
            <div class="col-span-3">
                <h3 class="font-bold text-white">Hafizuddin Sharif</h3>
            </div>
            <div class="col-start-9 col-span-2 text-right text-white">Blog</div>
            <div class="col-span-2 text-right text-white">Portfolio</div>
        </div>
    )
}

export default navbar
