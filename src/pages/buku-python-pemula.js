import * as React from "react"
import '../styles/global.css';

import { Helmet } from "react-helmet"

// Components
import Navbar from '../components/hero/navbar/navbar'
import Accordion from "../components/accordion/accordion";

import Navbar2 from '../components/navbar2/navbar2';
import HeroPythonPemula from '../components/heroPythonPemula/heroPythonPemula'
import PPBenefits from "../components/PPBenefits/PPBenefits";
import PPSample from '../components/PPSample/PPSample';
import PPContents from "../components/PPContents/PPContents";
import PPFaq from "../components/PPFaq/PPFaq";
import PPTestimony from "../components/PPTestimony/PPTestimony";
import PPCta from "../components/PPCta/PPCta";

import Fab from '@mui/material/Fab';
import Box from '@mui/material/Box';

import mainPic from "../images/main-pic.png"


const BukuPythonPemula = () => {

    return (
        <div>
            <Helmet>
                <meta charSet="utf-8" />
                <title>Buku Python Pemula</title>
            </Helmet>

            {/* <Navbar /> */}
            <Navbar2 />
            <HeroPythonPemula mainPic={ mainPic } />
            <PPBenefits />
            <PPSample />
            <PPContents />
            <PPFaq />
            <PPTestimony />
            <PPCta />

            

            
        </div>
    )
}

export default BukuPythonPemula
