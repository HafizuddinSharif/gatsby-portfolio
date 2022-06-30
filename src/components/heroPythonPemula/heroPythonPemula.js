import React from 'react'
import Banner from '../hero/banner/banner'

import ButtonInPage from '../buttonInPage/buttonInPage'
import UnderlineButton from '../underlinebutton/underlinebutton'

import { AnchorLink } from 'gatsby-plugin-anchor-links'

import BookCoverSrc from '../../images/python-pemula-cover.png'

const hero = ({ mainPic }) => {

    return (
        <div className="lg:h-screen bg-gray-900 w-full">
            <div className="flex h-full px-5 lg:px-28">
                <div className="w-full my-auto grid grid-cols-1 lg:grid-cols-2">
                    <div className="order-2 lg:order-1 my-auto">
                        <div className="text-center lg:text-left col-span-1 grid gap-4 grid-cols-3 lg:grid-cols-6">
                            <h1 className="text-white col-span-full font-extrabold text-3xl lg:text-4xl text-secondary tracking-wider" >Buku Pengaturcara Python untuk Pemula <span className="text-yellow-300">100% Bahasa Melayu</span></h1>
                            <p className="mb-4 lg:mb-0 text-white col-span-full text-2xl" >Belajar sesuatu perkara baru sepatutnya mudahkan?</p>
                            <div className="col-span-3 lg:col-span-4 bg-blue-500 text-white rounded-full py-2 lg:mt-4 cursor-pointer text-center">
                                <AnchorLink to="/buku-python-pemula" className="font-bold" >BELI BUKU DENGAN HARGA RM40</AnchorLink>
                            </div>
                            {/* Will be edited */}
                            {/* <Button text="My Services" isFill={false} isBgDark={true}/> */}
                            <UnderlineButton text="🔗 Klik di sini untuk melihat sampel" link="https://drive.google.com/file/d/1KiDTkz3oIZ69WjlB3N78TCukwHGUp6Q8/view?usp=sharing"/>
                        </div>
                    </div>
                    {/* Replace with main picture */}
                    {/* <MainPicture /> */}
                    <img className="mx-auto w-full order-1 lg:order-2 px-10 max-w-sm" src={BookCoverSrc} alt="Muka hadapan buku"></img>
                </div>
            </div>
        </div>
    )
}

export default hero
