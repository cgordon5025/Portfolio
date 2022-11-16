// import logo from './logo.svg';
// import './App.css';
import React from "react";
import ProjectList from './components/ProjectsList'
// import Nav from './components/Nav'

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
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Router>
          <div>
            <nav>
              <ul>
                <li>
                  <Link to="/">Home</Link>
                </li>
                <li>
                  <Link to="/projects">projects</Link>
                </li>
                <li>
                  <Link to="/contact">Contact Me</Link>
                </li>
              </ul>
            </nav>
            {/* <Switch>
              <Route path="/about">
                <About />
              </Route>
              <Route path="/users">
                <Users />
              </Route>
              <Route path="/">
                <Home />
              </Route>
            </Switch> */}
          </div>
        </Router>
      </header>
      <div>
        <ProjectList projects={projects}></ProjectList>
      </div>
    </div >
  );
};
// function Home() {
//   return <h2>Home</h2>;
// }

// function About() {
//   return <h2>About</h2>;
// }

// function Users() {
//   return <h2>Users</h2>;
// }

export default App;
