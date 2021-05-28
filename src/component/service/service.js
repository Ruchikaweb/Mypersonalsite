import React from 'react';
import {Link} from 'react-router-dom'
import Clauser from '../clauser/clauser'
import Navbar from '../navbar/nav'
const Service =(props) =>{
const servicees =({Service})=>{ 
        if(Service){
            return Service.map((item) =>{
                return(
                    <>
                    <div className="col-md-4 col-10 col-xxl-4 mx-auto">
                        <div class="card" style={{width:'18rem'}}>
                            <img src={item.thumb} class="card-img-top" alt="..."/>
                            <div class="card-body">
                            <h5 class="card-title">{item.name}</h5>
                            <p class="card-text"> {item.content} </p>
                            <Link to={`/Servicedetails/${item._id}`} class="btn btn-primary">View More Details</Link>
                            </div>
                        </div>
                    </div>  
                  </>
                )        
            } 
            )}
            else{
                return(
                    <div>
                        <img src="/images/loader.gif"/>
                    </div>
                )
            }
        } 
        return( 
            <>
            <Navbar/>
            <Clauser/>
            <div className="main_heading my-5 bg-light pt-5">
                <div className="text-center">
                    <h1 className="display-4" id="hstyle"> Our Services </h1>
                    <hr className="w-25 mx-auto"/>
                </div> 

                <div className="container">
                    <div className="row">
                    {servicees(props)}
                    </div>
                </div>
            </div>
            </>
        )
}

export default Service ;