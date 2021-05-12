import React from 'react';
import Navbar from '../navbar/nav'
import Clauser from '../clauser/clauser'
import '../about/about.css'
const About =()=> {
        return(
            <div>
                <Navbar/>
                <Clauser/>
                <div className="main_heading my-5">
                    <div className="text-center">
                        <h1 className="display-4" id="hstyle"> About Me </h1>
                        <hr className="w-25 mx-auto"/>
                    </div>  
                </div>     
                    <div className="container my-5">
                        <div className="row">
                            <div className="col-lg-6 col-md-6 col-12 col-xxl-6">
                                <figure>
                                    <img src="./images/my pic.jpg" id="myimg" alt="about image" className=".img-fluid about_img"/>
                                </figure>
                            </div>
                            <div className="col-lg-6 col-md-6 col-12 col-xxl-6" id="mydetails">
                                <h1> Hello! I'm Ruchika </h1>
                                <span>  
                                I'm a full stack web developer , live in churu (Raj). I can make all types of websites like e-commerce website , your personal website, school management website etc.
                                In my website frontend and backend both are included and it is fully responsive website for all screen. 
                                </span>
                            </div>
                        </div>
        
                </div>
                <div className="bg-dark pb-4 mt-4">
                    <div className="main_heading my-5  pt-5 ">
                        <div className="text-center">
                            <h1 className="display-4" id="h1style"> Skills </h1>
                            <hr className="w-25 mx-auto" id="hrcolor"/>
                        </div>
                    </div>    
                    <div className=" container row" id="logoposition">
                        <div className="col-md-12 col-12 col-xxl-12 mx-auto"  >
                            <p id="logotitle"> I'm a life long learner and enjoy learning new stuff! Below are some 
                                programming language tookits, framworks and libraries that i worked with and like. Some of them I control better than the other.
                            </p>
                            <img id="logoimgstyle" src="./images/html_logo.png"/>
                            <img id="logoimgstyle" src="./images/css_logo.png"/>
                            <img id="logoimgstyle" src="./images/bootstrap_logo.png"/>
                            <img id="logoimgstyle" src="./images/react_logo.png"/>
                            <img id="logoimgstyle" src="./images/js_logo.png"/>
                            <img id="logoimgstyle" src="./images/c_logo.png"/>
                            <img id="logoimgstyle" src="./images/c++_logo.png"/>
                            <img id="logoimgstyle" src="./images/mongodb_logo.png"/>
                            <img id="logoimgstyle" src="./images/mysql_logo.png"/>
                            <img id="logoimgstyle" src="./images/nodejs_logo.png"/>
                            
                        </div>
                    </div>
                </div>
            </div>
        )
    
}

export default About ;