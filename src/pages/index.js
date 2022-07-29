import * as React from "react"
import '../styles/global.css';

import { Helmet } from "react-helmet"

import Hero from "../components/hero/hero";
import BriefIntro from "../components/briefintro/briefintro";
import TechStack from "../components/techstack/techstack";
import Projects from "../components/projects/projects";
import Contact from "../components/contact/contact";
import Extra from "../components/extra/extra";


// Importing icons
import html from "../images/icons/frontend/html.svg"
import css from "../images/icons/frontend/css.svg"
import javascript from "../images/icons/frontend/javascript.svg"
import tailwindcss from "../images/icons/frontend/tailwindcss.svg"
import react from "../images/icons/frontend/react.svg"
import bootstrap from "../images/icons/frontend/bootstrap.svg"

import java from "../images/icons/backend/java.svg"
import python from "../images/icons/backend/python.svg"
import express from "../images/icons/backend/express.svg"
import sql from "../images/icons/backend/sql.svg"
import c from "../images/icons/backend/c.svg"
import django from "../images/icons/backend/django.svg"

import git from "../images/icons/other/git.svg"
import github from "../images/icons/other/github.svg"
import figma from "../images/icons/other/figma.svg"
import jira from "../images/icons/other/jira.svg"
// import digitalocean from "../images/icons/other/digitalocean.svg"
import wordpress from "../images/icons/other/wordpress.svg"

// Importing project images
import covid19 from "../images/projects/covid-19.png"
import personalBlog from "../images/projects/personal-blog.png"
import reportSystem from "../images/projects/report-system.png"

import mainPic from "../images/main-pic.png"

// markup
const IndexPage = () => {

  const techList = {
    frontend: [
      {name: "HTML", iconSrc: html},
      {name: "CSS", iconSrc: css},
      {name: "JavaScript", iconSrc: javascript},
      {name: "Tailwind CSS", iconSrc: tailwindcss},
      {name: "React", iconSrc: react},
      {name: "Bootstrap", iconSrc: bootstrap},

    ],
    backend: [
      {name: "Java", iconSrc: java},
      {name: "Python", iconSrc: python},
      {name: "Express", iconSrc: express},
      {name: "SQL", iconSrc: sql},
      {name: "C", iconSrc: c},
      {name: "Django", iconSrc: django},
    ],
    other: [
      {name: "Git", iconSrc: git},
      {name: "Github", iconSrc: github},
      {name: "Figma", iconSrc: figma},
      {name: "Jira", iconSrc: jira},
      // {name: "Digitalocean", iconSrc: digitalocean},
      {name: "Wordpress", iconSrc: wordpress},
    ],
  }

  const projectList = [
    {
      name: "Covid-19 Tracker", 
      description: "A React web app that allows you to know the total number of confirmed cases based on the selected countries. This app was built using React, COVID-19 API, Bootstrap, and deployed on Vercel.",
      demoLink: "https://covid-tracker-woad-eight.vercel.app/",
      codeLink: "https://github.com/HafizuddinSharif/covid-19-graph",
      imageSrc: covid19, 
      status: "online"
    },
    {
      name: "Personal Blog", 
      description: "A blog I created where I practice my writing skills and share my interest in computer science and technologies. I also place my sources for my Youtube here. This blog was built using Ghost CMS, deployed on DigitalOcean and written fully in Malay. ", 
      demoLink: "https://blog.hafizuddinsharif.com/",
      codeLink: "#",
      imageSrc: personalBlog,
      status: "online"
    },
    {
      name: "Report System", 
      description: "An online report system for a local Malaysian school that allows the user to do reports on damage on items in the school. This app was built using Vanilla JS, Express as the back-end, SQL as the database, deployed on Heroku.", 
      demoLink: "https://sihidayah-aduan.herokuapp.com/aduan",
      codeLink: "https://github.com/HafizuddinSharif/SistemAduanSIHidayah",
      imageSrc: reportSystem, 
      status: "limited"
    },
  ]

  return (
    <div className="">
      <Helmet>
          <meta charSet="utf-8" />
          <title>Hafizuddin Sharif</title>
          <meta name="description" content="I'm Sharif! I'm a Computer Science student. I provide service in teaching people how to code and also share my experience in life."></meta>
      </Helmet>

      {/* Page section */}
      <Hero mainPic={mainPic}/>
      <BriefIntro />
      <TechStack techList={techList} />
      <Projects projectList={projectList} />
      <Extra />
      <Contact />
    </div>
  )
}

export default IndexPage
