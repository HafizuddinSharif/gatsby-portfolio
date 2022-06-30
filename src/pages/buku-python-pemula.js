import * as React from "react"
import '../styles/global.css';

import { Helmet } from "react-helmet"

// Components
import Navbar from '../components/hero/navbar/navbar'
import Accordion from "../components/accordion/accordion";

import Navbar2 from '../components/navbar2/navbar2';
import HeroPythonPemula from '../components/heroPythonPemula/heroPythonPemula'
import PPBenefits from "../components/PPBenefits/PPBenefits";

import mainPic from "../images/main-pic.png"


const BukuPythonPemula = () => {

    return (
        <div>
            <Helmet>
                <meta charSet="utf-8" />
                <title>Frequently Asked Question</title>
            </Helmet>

            {/* <Navbar /> */}
            <Navbar2 />
            <HeroPythonPemula mainPic={ mainPic } />
            <PPBenefits />
            
        </div>
    )
}

export default BukuPythonPemula
