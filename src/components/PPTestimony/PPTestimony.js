import React from 'react'

import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Avatar from '@mui/material/Avatar';
import Rating from '@mui/material/Rating';

const PPTestimony = () => {

  const reviews = [
    {
      avatar: "https://img.icons8.com/dusk/64/000000/cat--v1.png",
      rating: 5,
      text: "Konsep serta Bahasa penyampaian simple & mudah difahami (simple, padat & kemas)",
    },
    {
      avatar: "https://img.icons8.com/dusk/64/000000/guinea-pig.png",
      rating: 5,
      text: "Kelebihan buku ini adalah ianya bermula dari \"0\". Sampaikan cara install Python pun diajar. Buku ini amat sesuai untuk orang yang betul betul tiada asas dalam Python. Tambahan, pula ianya ditulis dalam bahasa kebangsaan, legi cepat faham dari buku bahasa Inggeris.Tahniah Tuan!",
    },
    {
      avatar: "https://img.icons8.com/dusk/64/000000/unicorn--v1.png",
      rating: 4,
      text: "Pada pendapat saya, buku phyton pemula ini sangat bagus terutamanya untuk mereka yg baru ingin belajar tentang pengaturcaraan (mereka yang dah lupa phyton macam saya pun boleh baca untuk buat revision heheheh). Isi kandungan buku ini sangat jelas, ringkas dan mudah untuk difahami. Buku ini sangat sesuai untuk mereka yg baru ingin belajar pengaturcaraan python."
    },
    {
      avatar: "https://img.icons8.com/dusk/64/000000/cow.png",
      rating: 3,
      text: "Amat mudah untuk difahami untuk saya yang mempunyai latarbelakang pendidikan Sains Komputer yang mempelajari JAVA . Kalau saya tiada latarbelakang pendidikan tersebut, saya mungkin akan mudah faham secara asasnya namun memerlukan kerja amali untuk mengukuhkan kefahaman.",
    }
  ]

    const card = (
        <React.Fragment>
          <CardContent>
            <Avatar src="https://img.icons8.com/dusk/64/000000/cat--v1.png" variant="square"/>
            <Rating name="read-only" value={3} readOnly />
            <Typography sx={{ fontSize: 16 }} variant="h4" component="div" color="text.secondary">
              {"Konsep serta Bahasa penyampaian simple & mudah difahami (simple, padat & kemas)"}
            </Typography>
          </CardContent>
        </React.Fragment>
    );

    return (
        <div className="px-5 lg:px-28 p-24 bg-gray-900">

                <h2 className="text-2xl font-bold pb-10 text-center text-white">Review Pembaca!!</h2>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-14 gap-y-4">

                    { reviews.map( (elem) =>
                      <Card>
                        <React.Fragment>
                          <CardContent>
                            <Avatar src={elem.avatar} variant="square"/>
                            <Rating sx={{ paddingBottom: 2, paddingTop: 2 }} name="read-only" value={elem.rating} readOnly />
                            <Typography sx={{ fontSize: 12, fontStyle: 'italic' }} variant="h4" component="div" color="text.secondary">
                              {elem.text}
                            </Typography>
                          </CardContent>
                        </React.Fragment>
                      </Card>
                    )}
                </div>

        </div>
    )
}

export default PPTestimony