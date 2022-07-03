import React from 'react'

const PPContents = () => {

    const content = [
        '✅ Memuat turun dan memasang Python',
        '✅ Tulis dan Jalankan Kod (Write and run code)',
        '✅ Print',
        '✅ Pemboleh Ubah (Variables)',
        '✅ Jenis-jenis Data (Data Types)',
        '✅ Sekumpulan Data (List, Set, Tuple)',
        '✅ Senarai dalam senarai (2D-array)',
        '✅ Operator',
        '✅ String Operator',
        '✅ Flow Control',
        '✅ If Else',
        '✅ While loop',
        '✅ For Loop',
        '✅ Break, Continue, Pass',
        '✅ Loop dalam loop (Nested loop)',
        '✅ Fungsi (Functions)',
        '✅ Input dan Output',
        '✅ Mengendalikan file',
        '✅ Jenis-jenis Ralat (Type of Errors)',
        '✅ Mengendalikan Ralat (Handling Errors)',
    ]

    return (
        <div className="px-5 lg:px-28 p-24 ">

            <h2 className="text-2xl font-bold pb-10 text-center">Isi Kandungan Buku:</h2>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-14 gap-y-4">
                { content.map( (elem, index) => <p key={index} className="text-xl">{elem}</p>) }
            </div>

            
            
            
        </div>
    )
}

export default PPContents