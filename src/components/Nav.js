import React from "react";

import {
    createBrowserRouter,
    createRoutesFromElements,
    RouterProvider,
    Route,
    Link
} from "react-router-dom";
import ProjectList from './components/ProjectsList'
import About from './components/About'
import Contact from './components/Contact'
import Resume from './components/Resume'
function Nav() {
    createBrowserRouter(
        createRoutesFromElements(
            <Route path="/" element={<Contact />}>
                <Route path="/about" element={<About />} />
                <Route
                    path="/projects"
                    element={<ProjectList />}
                />
                <Route
                    path="/resume"
                    element={<Resume />}>
                </Route>
            </Route >
        )
    );
}
//     return (
//         <Router>
//             <div>
//                 <nav>
//                     <ul>
//                         <li>
//                             <Link to="/">Home</Link>
//                         </li>
//                         <li>
//                             <Link to="/about">About</Link>
//                         </li>
//                         <li>
//                             <Link to="/users">Users</Link>
//                         </li>
//                     </ul>
//                 </nav>
//             </div>
//         </Router>

//     )
// };


// function Home() {
//     return <h2>Home</h2>;
// }

// function About() {
//     return <h2>About</h2>;
// }

// function Users() {
//     return <h2>Users</h2>;
// }

export default Nav
// Switch