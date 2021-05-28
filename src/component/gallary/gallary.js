import React from 'react' ;
import '../gallary/gallary.css'
import Clauser from '../clauser/clauser'
import Navbar from '../navbar/nav'
import {Link} from 'react-router-dom'

const Gallary =(props) =>{
    const Projects =({projects})=>{
        if(projects){
            return projects.map((item)=>{
                return(
                    <div>
                        <div className="col-md-10 col-10 col-xxl-10 mx-auto">
                            <h2>{item.projectname} </h2>
                            <figure>
                            <img src={item.image}  alt="gallary" className="img-fluid projectimgg" id="projectoimggg"/> 
                            </figure>
                            <p style={{fontSize:'25px'}}>{item.details} </p> 
                            <Link to={`/Gallary/${item._id}`} class="btn btn-primary">View More Details</Link>
                        </div>
                        <hr/>
                    </div>
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
        <>
        <Navbar/>
        <Clauser/>
        <div className="main_heading my-5  pt-5">
            <div className="text-center">
                <h1 className="display-4" id="hstyle"> Projects </h1>
                <hr className="w-25 mx-auto"/>
            </div>  
        </div>    
            <div className="container">
                <div className="row">
                    {Projects(props)}
               </div>
            </div>      
        
        </>
    )
}

export default Gallary;