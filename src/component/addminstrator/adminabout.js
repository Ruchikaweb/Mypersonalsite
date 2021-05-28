import React from 'react';
import './subscriber.css';
import {Link} from 'react-router-dom';
import '../about/about.css';
const Adminabout =(props)=> {
    const aabout = ({Aboutts})=>{
        if(Aboutts){
            return Aboutts.map((item) => {
                return(
                    <React.Fragment>
                        <div className="row"> 
                            <div className="col-lg-6 col-md-6 col-12 col-xxl-6">
                                <figure>
                                    <img src="/images/my pic.jpg" id="myimg" alt="about image" className=".img-fluid about_img"/>
                                </figure>
                            </div>
                            <div className="col-lg-6 col-md-6 col-12 col-xxl-6" id="mydetails">
                                <h1> Hello! I'm Ruchika </h1>
                                <span>  
                                {item.content}
                                </span>
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
                                    <p id="logotitle"> 
                                    {item.skillcontent}
                                    </p>
                                    <img id="logoimgstyle" src="/images/html_logo.png"/>
                                    <img id="logoimgstyle" src="/images/css_logo.png"/>
                                    <img id="logoimgstyle" src="/images/bootstrap_logo.png"/>
                                    <img id="logoimgstyle" src="/images/react_logo.png"/>
                                    <img id="logoimgstyle" src="/images/js_logo.png"/>
                                    <img id="logoimgstyle" src="/images/c_logo.png"/>
                                    <img id="logoimgstyle" src="/images/c++_logo.png"/>
                                    <img id="logoimgstyle" src="/images/mongodb_logo.png"/>
                                    <img id="logoimgstyle" src="/images/mysql_logo.png"/>
                                    <img id="logoimgstyle" src="/images/nodejs_logo.png"/>
                                    
                                </div>
                            </div>
                </div>
                        
                    </React.Fragment>
               
               )
            })
        }
        else{
            return(
                <div>
                    <img src="/images/loader.gif"/>
                </div>
            )
        }
    }
        return( 
            <div>
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
                <div id="aboutcss">
                <div className="main_heading my-5">
                    <div className="text-center">
                        <h1 className="display-4" id="hstyle"> About Me </h1>
                        <hr className="w-25 mx-auto"/>
                    </div>  
                </div>     
                    <div className="container my-5">
                        <div className="row">

                             <Link to="/Editabout"> <button type="button" class="btn btn-outline-info" data-toggle="tooltip" data-placement="right" title="insert "> Edit </button> </Link>   
                            {aabout(props)}
                            
                        </div>
                </div>
                </div>
            </div>
        )
    
}

export default Adminabout ;