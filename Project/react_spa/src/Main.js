import React, { Component } from "react";
import {
  Route,
  NavLink,
  BrowserRouter,
  Routes
} from "react-router-dom";
import Home from "./Home";
import AddStudents from "./AddStudents";
import Students from "./Students";


 
class Main extends Component {
    render() {
      return (
        <BrowserRouter>
          <div>
            <h1>Single Page React Application</h1>
            <ul className="header">
                <li><NavLink end to="/">Home</NavLink></li>
                <li><NavLink to="/addStudents">Add Students</NavLink></li>
                <li><NavLink to="/students">Students</NavLink></li>
            </ul>
            <div className="content">
                <Routes>
                    <Route exact path="/" element={<Home/>}/>
                    <Route path="/addStudents" element={<AddStudents/>}/>
                    <Route path="/students" element={<Students/>}/>
                </Routes>
            </div>
          </div>
        </BrowserRouter>
      );
    }
  }
 
export default Main;