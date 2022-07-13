import React from 'react'

import Accordion from '../accordion/accordion'

const PPFaq = () => {

    const faqItem = [
        {
            question: "Saya memang tidak pernah belajar pengaturcaraan langsung. Buku ini sesuai ke?",
            answer: "Sesuai! Buku ini ditulis untuk pembaca yang ingin belajar pengaturcaraan dari KOSONG.",
        },
        {
            question: "Buku ini tertulis versi 1.0. Maksudnya adakah akan ada versi yang baru?",
            answer: "Jika versi terkini ada kekurangan atau perkara yang boleh ditambah baik, maka versi terbaru akan dikeluarkan. Untuk mendapatkan versi terbaru adalah PERCUMA bagi yang sudah membeli apa-apa versi buku ini.",
        },
        {
            question: "Apa spesifikasi komputer yang diperlukan untuk belajar dengan buku ini?",
            answer: "Gunakan komputer yang anda ada sudah pun memadai.",
        },
        {
            question: "Saya dah bayar, tapi kenapa tak dapat lagi?",
            answer: "Buku akan dihantar melalui emel dan mengambil masa paling lama 1 hari kerana saya melakukan proses itu secara manual. Boleh periksa di folder 'spam', sebab kadang-kadang emel akan pergi ke sana. Kalau tidak dapat juga selepas tempoh 1 hari daripada pembelian, boleh hubungi saya di hafizuddinshariff@gmail.com.",
        },
        {
            question: "Kalau dah khatam buku ini, boleh jamin saya dapat kerja ke?",
            answer: "Sayang sekali tidak, buku ini hanya merangkumi asas sahaja untuk pemula.",
        },
    ]

    return (
        <div className="px-5 lg:px-28 p-24 ">

                <h2 className="text-2xl font-bold pb-10 text-center">Soalan yang sering ditanya (FAQ)</h2>

                <div className="grid grid-cols-1 gap-y-4">

                    { faqItem.map( (item, index) => <Accordion key={index} question={item.question} answer={item.answer}/>) }

                </div>

                
                
                
        </div>
    )
}

export default PPFaq