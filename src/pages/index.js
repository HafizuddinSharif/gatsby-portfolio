import * as React from "react"
import '../styles/global.css';

import Hero from "../components/hero/hero";
import BriefIntro from "../components/briefintro/briefintro";
import TechStack from "../components/techstack/techstack";
import Projects from "../components/projects/projects";
import Contact from "../components/contact/contact";


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

  const projectList = []

  return (
    <div className="">
      {/* Page section */}
      <Hero />
      <BriefIntro />
      <TechStack techList={techList} />
      <Projects projectList={projectList} />
      <Contact />
    </div>
  )
}

export default IndexPage
