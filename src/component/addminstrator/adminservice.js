import React from 'react';
import '../addminstrator/subscriber.css';
import {Link} from 'react-router-dom';

const Adminservice =()=> {
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
            
            <div className="main_heading  bg-light" id="servicecss" >
                <div className="text-center">
                    <h1 className="display-4" id="hstyle"> Our Services </h1>
                    <hr className="w-25 mx-auto"/>
                </div> 

            <div className="container">
                <div className="row">
                    <div className="col-md-4 col-10 col-xxl-4 mx-auto">
                        <div class="card mb-3" style={{maxWidth:'540px'}}>
                            <div class="row">
                                <div class="col-md-4" >
                                    <img id ="servicecardimage" style={{height:'100%' , width:'100%'}} src="/images/fifth.jpg" alt="service page"/>
                                </div>
                                <div class="col-md-8">
                                    <div class="card-body">
                                        <h5 class="card-title"> Forntend Developer </h5>
                                        <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                                        <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
                                        <Link to="/Editservice"> <button type="button" class="btn btn-outline-info" data-toggle="tooltip" data-placement="right" title="Update"> Update </button> </Link>
                                        <button type="button" class="btn btn-outline-info"> In Service </button> 
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4 col-10 col-xxl-4 mx-auto">
                        <div class="card mb-3" style={{maxWidth:'540px'}}>
                            <div class="row">
                                <div class="col-md-4" >
                                    <img id ="servicecardimage" style={{height:'100%' , width:'100%'}} src="/images/fifth.jpg" alt="service page"/>
                                </div>
                                <div class="col-md-8">
                                    <div class="card-body">
                                        <h5 class="card-title"> Forntend Developer </h5>
                                        <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                                        <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
                                        <Link to="/Editservice"> <button type="button" class="btn btn-outline-info" data-toggle="tooltip" data-placement="right" title="Update"> Update </button> </Link>
                                        <button type="button" class="btn btn-outline-info"> In Service </button> 
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4 col-10 col-xxl-4 mx-auto">
                        <div class="card mb-3" style={{maxWidth:'540px'}}>
                            <div class="row">
                                <div class="col-md-4" >
                                    <img id ="servicecardimage" style={{height:'100%' , width:'100%'}} src="/images/fifth.jpg" alt="service page"/>
                                </div>
                                <div class="col-md-8">
                                    <div class="card-body">
                                        <h5 class="card-title"> Forntend Developer </h5>
                                        <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                                        <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
                                        <Link to="/Editservice"> <button type="button" class="btn btn-outline-info" data-toggle="tooltip" data-placement="right" title="Update"> Update </button> </Link>
                                        <button type="button" class="btn btn-outline-info"> In Service </button> 
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
       
                </div>
                <center>  <Link to="/Editservice"> <button type="button" class="btn btn-outline-info" data-toggle="tooltip" data-placement="right" title="insert" style={{padding:'1%',fontSize:'20px', marginBottom:'2%',marginTop:'1%'}}> Edit </button> </Link>  </center>
                

            </div>
        </div>
    </>
        )
}

export default Adminservice ;