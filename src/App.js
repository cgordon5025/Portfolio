// import logo from './logo.svg';
// import './App.css';
import React from "react";
import ProjectList from './components/ProjectsList'
import About from './components/About'
import Contact from './components/Contact'

// import Nav from './components/Nav'
//update this because the tutortial used 5.0 we are on 6.4
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
const projects = [
  {
    id: 1,
    title: "GolfAll",
    description: "A front-end application for avid golfers",
    link: "https://github.com/hdyoung21/Golf-All",
    imgURL: "https://images.unsplash.com/photo-1632946269126-0f8edbe8b068?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2631&q=80"
  },
  {
    id: 2,
    title: "Chattastic",
    description: "A reddit like application, where users can make channels, threads and comments, as well as use the real time chat engine",
    link: "https://chattastic-rat.herokuapp.com/login",
    imgURL: "https://images.unsplash.com/photo-1631427962232-803d4f30c64f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=3270&q=80"
  },
  {
    id: 3,
    title: "DnD Character Creater",
    description: "A front end application for any Dungeons and Dragon's player to create a new character, keep track of stats, inventory and HP",
    link: "https://cgordon5025.github.io/Dnd-Player-Maker",
    imgURL: "https://images.unsplash.com/photo-1650024520012-79a3abf48462?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=3270&q=80"

  }
]

const styles = {
  list: {
    listStyle: "none",
  },
  links: {
    textDecoration: "none"
  },
  ul: {
    marginLeft: "auto!important"
  }
}
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Router>
          <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <a className="navbar-brand" href="/">Charlee Gordon</a>
            <div id="navbarNav" style={{ marginLeft: "auto" }}>
              <ul className="navbar-nav">
                <li className="nav-item active">
                  <a className="nav-link" href="/about">About</a>
                </li>
                <li className="nav-item active">
                  <a className="nav-link" href="/projects">Projects</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="resume">Resume</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="/contact">Contact Me</a>
                </li>
              </ul>
            </div>
          </nav>

        </Router>
      </header>
      <div>
        <About />
      </div>
      <div>
        <ProjectList projects={projects}></ProjectList>
      </div>
      <Contact></Contact>
    </div >
  );
};

export default App;
