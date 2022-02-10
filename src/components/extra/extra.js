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

              <div className="d-flex m-auto lg:pl-10">
                  <p className="leading-loose">Growing up without knowing what Computer Science is and how Programming works, I decided to create a Youtube channel to help people understand what they actually were in my mother tongue.</p>
              </div>

          </div>
      </div>
  )
};

export default extra;
