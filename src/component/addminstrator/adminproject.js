import React from 'react' ;
import '../addminstrator/subscriber.css'
import {Link} from 'react-router-dom'

const Adminproject =() =>{
    return(
        <>
            <div id="headstyle">
                <div className="row">
                    <div className="col-md-6 col-6 col-xxl-6 mx-auto">
                    <figure>
                            <img src="\images/pp.png" id="adminimg" alt="aa"/>
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
        <div className="main_heading " id="projectcss">
            <div className="text-center">
                <h1 className="display-4" id="hstyle"> Projects </h1>
                <hr className="w-25 mx-auto"/>
            </div>   
            <div className="container">
                <div className="row gx-0 my-5">
                <div className="col-md-4 col-10 col-xxl-4 mx-auto">
                    <figure>
                    <Link to="/Gallary/:project">   <img src="/images/fifth.jpg" alt="gallary" className="img-fluid"/> </Link>
                    </figure>
                </div>
                <div className="col-md-4 col-10 col-xxl-4 mx-auto">
                    <figure>
                    <Link to="/Gallary/:project">   <img src="/images/fifth.jpg" alt="gallary" className="img-fluid"/> </Link>
                    </figure>
                </div>
                <div className="col-md-4 col-10 col-xxl-4 mx-auto">
                    <figure>
                    <Link to="/Gallary/:project">   <img src="/images/fifth.jpg" alt="gallary" className="img-fluid"/> </Link>
                    </figure>
                </div>
               
               
                </div>
            </div>      
        </div>
        </>
    )
}

export default Adminproject;