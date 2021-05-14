import React from 'react'
import '../addminstrator/panel.css';
import {Link} from 'react-router-dom'
// import Adminabout from '../addminstrator/adminabout'
import Sub from '../addminstrator/subscriber'

const Panel =()=>{

    return(
        <div>
            <nav class="navbar navbar-expand-lg navbar-light bg-light">
                <div class="container-fluid">
                    <a class="navbar-brand" href="#">Navbar</a>
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarNav">
                    <ul class="navbar-nav">
                        <li class="nav-item">
                            <Link class="nav-link active" aria-current="page" to="/adminr/Adminabout">About</Link>
                        </li>
                        <li class="nav-item">
                        <Link class="nav-link" to="/adminr/Adminproject">Project</Link>
                        </li>
                        <li class="nav-item">
                        <Link class="nav-link" to="/adminr/Adminservice">Service</Link>
                        </li>
                        <li class="nav-item">
                        <Link class="nav-link" to="/adminr/Subscriber"> Subscriber</Link>
                        </li>
                    </ul>
                    </div>
                </div>  
            </nav>
            <div id="headstyle">
                <div className="row">
                    <div className="col-md-6 col-6 col-xxl-6 mx-auto">
                    <figure>
                            <img src=".\images/pp.png" id="adminimg" alt="aa"/>
                        </figure>
                        
                    </div>
                    <div className="col-md-4 col-4 col-xxl-6 mx-auto">
                        <p id="edit"> “A successful website does three things:
                            It attracts the right kinds of visitors.
                            Guides them to the main services or product you offer.
                            Collect Contact details for future ongoing relation.” </p>
                    </div>
                </div>
            </div>
            <hr id="hrstyle"/>
            
                
            
        </div>
    )

}

export default Panel ;