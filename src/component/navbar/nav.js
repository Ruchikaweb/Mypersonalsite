import React from 'react';
import {Link} from 'react-router-dom';
import '../navbar/nav.css'
 
class Navbar extends React.Component{
    render(){
        return(
            <nav class="navbar navbar-expand-lg navbar-light bg-light">
                <div class="container-fluid">
                    <a class="navbar-brand" href="#"> Our Work Your Site</a>
                        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                        </button>
                    <div class="collapse navbar-collapse  float-right" id="navbarSupportedContent">
                    <ul class="navbar-nav" id="navsetting">
                        <li class="nav-item">
                        <Link class="nav-link active" aria-current="page" to="/">Home</Link>
                        </li> 
                        <li class="nav-item">
                        <Link class="nav-link" to="/About">About Me</Link>
                        </li>
                        <li class="nav-item ">
                        <Link class="nav-link " to="/Service" id="navbarDropdown">
                            Services
                        </Link>
                        </li>
                        <li class="nav-item ">
                        <Link class="nav-link " to="/Gallary" id="navbarDropdown">
                            Projects
                        </Link>
                        </li>
                        <li class="nav-item">
                        <Link class="nav-link" to="/Contact">Contact Us</Link>
                        </li>
                    </ul>
                    </div>
                </div>
            </nav>
        )
    }
}

export default Navbar ;