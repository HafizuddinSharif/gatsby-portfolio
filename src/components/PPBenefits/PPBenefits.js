import React from 'react'

const PPBenefits = () => {
  return (
    <div className="px-5 lg:px-28 p-24 grid grid-cols-1 lg:grid-cols-3 gap-5">

        <div className="">
            {/* <img></img> */}
            <h3>Sepenuhnya Dalam Bahasa Melayu</h3>
            <p className="text-justify">Penulisan buku ini mengguna Bahasa Melayu yang mudah dan memelihara konteks terma-terma pengaturacaraan dalam Bahasa Inggeris.</p>
        </div>

        <div className="">
            {/* <img></img> */}
            <h3>Merangkumi asas</h3>
            <p className="text-justify">Buku ini hanya meyentuh konsep-konsep asas dalam pengaturcaraan yang amat sesuai bagi yang TIADA langsung pengalaman.</p>
        </div>

        <div className="">
            {/* <img></img> */}
            <h3>Lengkap bersama contoh dan gambar</h3>
            <p className="text-justify">Gambar dan analogi membantu mengukuhkan lagi kefahaman pembaca untuk setiap konsep yang baru diperkenalkan.</p>
        </div>

    </div>
  )
}

export default PPBenefits