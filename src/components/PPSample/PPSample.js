import React from 'react'

import pg1 from '../../images/book-content/pg1.png'
import pg2 from '../../images/book-content/pg2.png'
import pg3 from '../../images/book-content/pg3.png'
import pg4 from '../../images/book-content/pg4.png'
import pg5 from '../../images/book-content/pg5.png'
import pg6 from '../../images/book-content/pg6.png'
import pg7 from '../../images/book-content/pg7.png'
import pg8 from '../../images/book-content/pg8.png'

const PPSample = () => {
  return (
    <div className='bg-gray-900 px-5 lg:px-28 py-14'>
        <h2 className="text-3xl text-white py-14 font-bold text-center">Contoh dalaman buku</h2>

        <div className="grid lg:grid-cols-3 gap-5">

            <img src={pg1}></img>
            <img src={pg2}></img>
            <img src={pg3}></img>
            <img src={pg4}></img>
            <img src={pg5}></img>
            <img src={pg6}></img>
            <img src={pg7}></img>
            <img src={pg8}></img>

        </div>
    </div>
  )
}

export default PPSample