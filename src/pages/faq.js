import * as React from "react"
import '../styles/global.css';

import { Helmet } from "react-helmet"

// Components
import Navbar from '../components/hero/navbar/navbar'
import Accordion from "../components/accordion/accordion";

const Faq = () => {

    const faqItem = [
        {
            question: "Belajar di mana?",
            answer: "Saya mengambil jurusan Sains Komputer di University of Edinburgh yang terletak di Scotland. Sewaktu pra-u, saya mengambil A-Level.",
        },
        {
            question: "Saya lepasan SPM, apa syarat kelayakan untuk belajar Sains Komputer?",
            answer: "Bergantung pada syarat kelayakan yang ditetapkan di institusi yang anda mohon. Tapi kebiasaanya memerlukan subjek Matematik dan kadang-kadang Matematik Tambahan. Sila buat uji kaji sendiri."
        },
        {
            question: "Ada cadangan universiti mana sesuai untuk ambil jurusan Sains Komputer?",
            answer: "Saya tiada cadangan sebenarnya. Tapi kebanyakan university di Malaysia okay sahaja, cuma kita perlu usaha sendiri banyak, jangan harapkan universiti. Tapi kalau nak cadangan, antaranya UTP, UKM, UiTM, UM, APU, dan lain-lain."
        },
        {
            question: "Saya tiada basic programming atau Sains Komputer, boleh ke saya ambil jurusan Sains Komputer",
            answer: "Setakat 2022, boleh je tiada masalah. Saya pun ambil jurusan Sains Komputer tanpa ada asas. Cuma akan sukar sikit pada awal pembelajaran."
        },
        {
            question: "CS dan IT ni peluang pekerjaan dia luas ke?",
            answer: "Setakat 2022, memang banyak peluang pekerjaan dia. Anda bukan setakat boleh bekerja dalam negara, malah boleh ke luar negara jika usaha baik-baik."
        },
    ]

    return (
        <div>
            <Helmet>
                <meta charSet="utf-8" />
                <title>Frequently Asked Question</title>
            </Helmet>

            <Navbar />

            <div className="py-24 w-3/4 m-auto text-white">
                { faqItem.map( item => <Accordion question={item.question} answer={item.answer}/> ) }
            </div>
        </div>
    )
}

export default Faq