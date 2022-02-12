import React from 'react';

import yt1 from '../../images/yt1.png'
import yt2 from '../../images/yt2.png'
import yt3 from '../../images/yt3.png'

const extra = () => {
  return (
      <div className="px-5 py-24 lg:px-28 grid grid-cols-1" id='extra'>

          <h1 className="text-3xl font-bold">I share my knowledge on <span className="text-secondary">Youtube</span></h1>

          <div className="relative lg:py-16 py-10 grid grid-cols-1 lg:grid-cols-2 gap-y-4">

              <div className="relative w-100 lg:h-96 h-48">
                  <img className="absolute lg:w-3/4 lg:h-auto w-1/2 top-0 left-0" src={yt1}></img>
                  <img className="absolute lg:w-3/4 lg:h-auto w-1/2 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2" src={yt2}></img>
                  <img className="absolute lg:w-3/4 lg:h-auto w-1/2 right-0 bottom-0" src={yt3}></img>
              </div>

              <div className="m-auto flex-col lg:pl-10">
                  <p className="leading-loose mb-6" >Growing up <span className="font-bold">without knowing</span> what Computer Science is and how Programming works, I decided to create a Youtube channel to help people understand what they actually were in <span className="font-bold">my mother tongue</span>.</p>
                  <a href="https://www.youtube.com/channel/UCAbwe9Gd8TD5lO_RvhT6ZgQ" rel="nonreferrer" target="_blank" className="transition ease-linear delay-150 hover:bg-white hover:text-red-500 border-2 border-red-500 border-solid bg-red-500 py-2 px-5 text-white rounded-md font-semibold inline">Go to my Youtube channel!</a>
              </div>

          </div>
      </div>
  )
};

export default extra;
