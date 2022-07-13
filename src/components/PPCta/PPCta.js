import React from 'react'

import { AnchorLink } from 'gatsby-plugin-anchor-links'

import BookCoverSrc from '../../images/python-pemula-cover.png'

const PPCta = () => {
  
    return (
        <div className="px-5 lg:px-28 p-24 bg-gray-900 text-white text-center">

                <h2 className="text-2xl font-bold pb-10 text-center">Apa tunggu lagi?</h2>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-y-5">

                    <img className="mx-auto w-full px-10 max-w-xs" src={BookCoverSrc} alt="Muka hadapan buku"></img>

                    <div className="lg:text-left my-auto">
                        <p className="text-xl">📙 Semua konsep asas pengaturcaraan pemula dalam satu buku dalam penulisan Bahasa Melayu.</p>
                        <p className="text-xl my-5">🔧 Pembeli juga akan mendapat penambahbaikan PERCUMA buku ini di masa depan.</p>

                        <div className="inline-block m-auto bg-blue-500 hover:bg-white hover:text-blue-500 transition rounded-full py-4 px-10 lg:mt-4 cursor-pointer text-center text-3xl lg:text-4xl">
                            <a href="https://buy.stripe.com/bIY29ubnpbD31Wg28a" className="font-bold" target="_blank" rel="noreferrer">BELI SEKARANG!!</a>
                        </div>
                    </div>


                </div>

                
                
        </div>
    )

}

export default PPCta