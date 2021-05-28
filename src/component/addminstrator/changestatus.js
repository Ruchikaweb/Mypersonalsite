import React from 'react'
import {Link} from 'react-router-dom';
const Channge =(props)=> { 
    const Serviceadmin = ({Services}) =>{
        if(Services){
            return Services.map((item) =>{
                return( 
                    <React.Fragment>
                        <div className="col-md-4 col-10 col-xxl-4 mx-auto">
                            <div class="card" style={{width:'18rem'}}>
                                <img src={item.thumb} class="card-img-top" alt="..."/>
                                <div class="card-body">
                                <h5 class="card-title">{item.name}</h5>
                                <p class="card-text"> {item.content} </p>
                                <Link to={`/active/${item._id}`}> <button type="button" class="btn btn-outline-info" data-toggle="tooltip" data-placement="right" title="Update"> In Service </button> </Link> 
                                <Link to={`/harddel/${item._id}`}> <button type="button" class="btn btn-outline-info"> Hard Delete </button> </Link>
                                
                                  
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
                    
                    {Serviceadmin(props)}
                    
                </div>
            </div>
        </div>
    </>
        )
}

export default Channge