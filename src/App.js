// import logo from './logo.svg';
// import './App.css'
import React from "react";
import { Link, BrowserRouter, Routes, Route } from "react-router-dom";

import About from "./pages/About";
import ProjectList from "./pages/ProjectList";
import Resume from "./pages/Resume";
import Home from "./pages/Home";
import Contact from "./pages/Contact";
import { type } from "@testing-library/user-event/dist/type";
const projects = [
  {
    id: 1,
    title: "GolfAll",
    description: "A front-end application for avid golfers to be able to check the weather, find golf courses near them and more.",
    link: "https://github.com/hdyoung21/Golf-All",
    imgURL: "https://images.unsplash.com/photo-1632946269126-0f8edbe8b068?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2631&q=80",
    skills: ["HTML", "CSS", "JS", "jQuery"]
  },
  {
    id: 2,
    title: "Chattastic",
    description: "A reddit like application, where users can make channels, threads and comments, as well as use the real time chat engine",
    link: "https://chattastic-rat.herokuapp.com/login",
    imgURL: "https://images.unsplash.com/photo-1631427962232-803d4f30c64f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=3270&q=80",
    skills: ["HTML", "CSS", "JS", "NodeJs", "ExpressJS", "Handlebars", "PubNub-ChatEngine"]
  },
  {
    id: 3,
    title: "DnD Character Creater",
    description: "A front end application for any Dungeons and Dragon's player to create a new character, keep track of stats, inventory and HP",
    link: "https://cgordon5025.github.io/Dnd-Player-Maker",
    imgURL: "https://images.unsplash.com/photo-1650024520012-79a3abf48462?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=3270&q=80",
    skills: ["HTML", "CSS", "JS"]
  },
  {
    id:4,
    title:"MasterScrolls",
    description:"A project management board for Dungeon/Game masters of tabletop role-playing-games.",
    link:"https://masterscrolls.herokuapp.com/",
    imgURL:"https://images.unsplash.com/photo-1542626991-cbc4e32524cc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2669&q=80",
    skills:["React","GraphQL","Node","Express","MongoDB"]
  }
]
const resume = {
  education: [
    {
      school: "Georgia Insitute of Technology",
      degree: "Certificate in Full Stack Coding",
      time: "Sept 2022-Dec 2022"
    },
    {
      school: "Brandeis University",
      degree: "B.A. in Psychology and Music",
      time: "Sept 2017-Dec 2020"
    }

  ],
  exp: [
    {
      business: "Brandeis University",
      title: "Lab Manager at the Neurochemistry and Cognition Lab",
      time: "June 2020-May 2022",
      summary: ["Developed behavioral tasks in Python", "Conducted analyses on fMRI and PET data, using multiple data anlysis software platforms", "Streamlined grading criteria of behavioral task results by writing MatLab and R scripts", "Prepared IRB proposal", "Managed lab website using CMS"]
    },
    {
      business: "Brandeis University",
      title: "Member of Child and Adults Research Development (CARD) Lab",
      time: "June 2020-Dec 2020",
      summary: [`Conducted analysis on behavioral data on the effectiveness of musical training on pre-k aged children`, `Collaborated with fellow lab members to create ‘grading’ criteria for the children’s behavior, were they compliant during class`]
    }
  ],
  publications: [
    {
      pub_id: 1,
      title: "Regional Homogeneity is Associated with Dopamine Synthesis Capacity and Maintained Cognitive Stability in Older Adults",
      authors: "(Jourdan H. Parent, Claire J, Ciampa, Rebekah M. Garett, Theresa M. Harrison, Morgan M. Taylor, Charlee N. Gordon, Jenna N. Adams, William J. Jagust, Anne S. Berry) `",
      yearOfPub: 2021
    }

  ]
}

const styles = {
  list: {
    listStyle: "none",
  },
  links: {
    textDecoration: "none"
  },
  ul: {
    marginLeft: "auto!important"
  },
  headFoot: {
    // backgroundColor: "#80ABCF"
    backgroundColor: "lightblue"
  }
}

function App() {
  return (
    <>
      <header style={styles.headFoot}>
        <nav className="navbar navbar-expand-lg " >
          <Link className="navbar-brand" to="/Portfolio/">Charlee Gordon</Link>
          <div id="navbarNav" style={{ marginLeft: "auto" }}>
            <ul className="navbar-nav">
              <li className="nav-item ">
                <Link className="nav-link" to="/Portfolio/about">About</Link>
              </li>
              <li className="nav-item ">
                <Link className="nav-link" to="/Portfolio/project">Projects</Link>
              </li>
              <li className="nav-item ">
                <Link className="nav-link" to="/Portfolio/resume">Resume</Link>
              </li>
            </ul>
          </div>
        </nav>
      </header>
      <Routes >
        <Route path='/Portfolio/' index element={<Home />} />

        {/* <Route path='/Portfolio/' index element={<Home i={typeMsg.i} txt={typeMsg.txt} speed={typeMsg.speed} />} /> */}
        <Route path="/Portfolio/about" element={<About />} />
        <Route path="/Portfolio/project" element={<ProjectList projects={projects} />} />
        <Route path="/Portfolio/resume" element={<Resume resume={resume} />} />
      </Routes>
      <footer style={styles.headFoot}>
        <Contact />
      </footer>
    </>
  );
}

export default App;
