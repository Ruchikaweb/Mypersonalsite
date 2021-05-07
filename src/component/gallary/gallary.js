import React from 'react' ;
import Clauser from '../clauser/clauser'
import Navbar from '../navbar/nav'
import {Link} from 'react-router-dom'

const Gallary =() =>{
    return(
        <>
        <Navbar/>
        <Clauser/>
        <div className="main_heading my-5  pt-5">
            <div className="text-center">
                <h1 className="display-4" id="hstyle"> Projects </h1>
                <hr className="w-25 mx-auto"/>
            </div>   
            <div className="container">
                <div className="row gx-0 my-5">
                <div className="col-md-4 col-10 col-xxl-4 mx-auto">
                    <figure>
                    <Link to="/Gallary/:project">   <img src="./images/fifth.jpg" alt="gallary" className="img-fluid"/> </Link>
                    </figure>
                </div>
                <div className="col-md-4 col-10 col-xxl-4 mx-auto">
                    <figure>
                    <Link to="/Gallary/:project">   <img src="./images/fifth.jpg" alt="gallary" className="img-fluid"/> </Link>
                    </figure>
                </div>
                <div className="col-md-4 col-10 col-xxl-4 mx-auto">
                    <figure>
                    <Link to="/Gallary/:project">   <img src="./images/fifth.jpg" alt="gallary" className="img-fluid"/> </Link>
                    </figure>
                </div>
                <div className="col-md-4 col-10 col-xxl-4 mx-auto">
                    <figure>
                    <Link to="/Gallary/:project">   <img src="./images/fifth.jpg" alt="gallary" className="img-fluid"/> </Link>
                    </figure>
                </div>
                <div className="col-md-4 col-10 col-xxl-4 mx-auto">
                    <figure>
                    <Link to="/Gallary/:project">   <img src="./images/fifth.jpg" alt="gallary" className="img-fluid"/> </Link>
                    </figure>
                </div>
                <div className="col-md-4 col-10 col-xxl-4 mx-auto">
                    <figure>
                    <Link to="/Gallary/:project">   <img src="./images/fifth.jpg" alt="gallary" className="img-fluid"/> </Link>
                    </figure>
                </div> <div className="col-md-4 col-10 col-xxl-4 mx-auto">
                    <figure>
                    <Link to="/Gallary/:project">   <img src="./images/fifth.jpg" alt="gallary" className="img-fluid"/> </Link>
                    </figure>
                </div>
                <div className="col-md-4 col-10 col-xxl-4 mx-auto">
                    <figure>
                    <Link to="/Gallary/:project">   <img src="./images/fifth.jpg" alt="gallary" className="img-fluid"/> </Link>
                    </figure>
                </div>
                <div className="col-md-4 col-10 col-xxl-4 mx-auto">
                    <figure>
                    <Link to="/Gallary/:project">   <img src="./images/fifth.jpg" alt="gallary" className="img-fluid"/> </Link>
                    </figure>
                </div>   
                </div>
            </div>      
        </div>
        </>
    )
}

export default Gallary;