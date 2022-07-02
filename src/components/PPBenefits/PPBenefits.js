import React from 'react'

import Lottie from 'react-lottie'
import ChatLottie from '../../lottie/chat.json'
import HeartLottie from '../../lottie/heart.json'
import ResizeImageLottie from '../../lottie/resize-image.json'

const PPBenefits = () => {

  const chatLottieOption = {
    loop: true,
    autoplay: true,
    animationData: ChatLottie,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice"
    }
  };

  const heartLottieOption = {
    loop: true,
    autoplay: true,
    animationData: HeartLottie,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice"
    }
  };

  const resizeImageLottieOption = {
    loop: true,
    autoplay: true,
    animationData: ResizeImageLottie,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice"
    }
  };

  return (
    <div className="px-5 lg:px-28 p-24 grid grid-cols-1 lg:grid-cols-3 gap-x-14">

        <div className="">
            <Lottie 
              options={chatLottieOption}
              width="80%"
              height="60%"
            />
            <h3 className="font-bold text-center mb-4 text-xl">Sepenuhnya Dalam Bahasa Melayu</h3>
            <p className="text-justify">Penulisan buku ini mengguna Bahasa Melayu yang mudah dan memelihara konteks terma-terma pengaturacaraan dalam Bahasa Inggeris.</p>
        </div>

        <div className="">
            <Lottie
              options={heartLottieOption}
              width="90%"
              height="60%"
            />
            <h3 className="font-bold text-center mb-4 text-xl">Merangkumi asas</h3>
            <p className="text-justify">Buku ini hanya meyentuh konsep-konsep asas dalam pengaturcaraan yang amat sesuai bagi yang TIADA langsung pengalaman.</p>
        </div>

        <div className="">
            <Lottie 
              options={resizeImageLottieOption}
              width="115%"
              height="60%"
            />
            <h3 className="font-bold text-center mb-4 text-xl">Lengkap bersama contoh dan gambar</h3>
            <p className="text-justify">Gambar dan analogi membantu mengukuhkan lagi kefahaman pembaca untuk setiap konsep yang baru diperkenalkan.</p>
        </div>

    </div>
  )
}

export default PPBenefits