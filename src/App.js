// import logo from './logo.svg';
// import './App.css';
import React from "react";
import ProjectList from './components/ProjectsList'
import Nav from './components/Nav'
const projects = [
  {
    id: 1,
    title: "GolfAll",
    description: "A front-end application for avid golfers",
    link: "https://github.com/hdyoung21/Golf-All",
    imgURL: ""
  },
  {
    id: 2,
    title: "Chattastic",
    description: "A reddit like application, where users can make channels, threads and comments, as well as use the real time chat engine",
    link: "https://chattastic-rat.herokuapp.com/login",
    imgURL: ""
  }
]
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Nav />
      </header>
      <div>
        < ProjectList projects={projects} />
      </div>
    </div >
  );
};



export default App;
