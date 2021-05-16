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
                        <div className="col-md-4 col-6 col-xxl-4 mx-auto">
                            <h2>{item.projectname} </h2>
                            <figure>
                            <Link to={`/Gallary/${item._id}`}> <img src={item.image} style={{height:'40%',width:'100%'}} alt="gallary" className="img-fluid projectimgg"/> </Link>
                            </figure>
                            
                            <p>{item.details} </p>
                        </div>
                        <hr/>
                    </div>
                )
            })
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