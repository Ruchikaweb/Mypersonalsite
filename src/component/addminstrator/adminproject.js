import React from 'react' ;
import '../addminstrator/subscriber.css'
import {Link} from 'react-router-dom'

const Adminproject =(props) =>{
    const Projectts =({projectsss})=>{
        if(projectsss){
            return projectsss.map((item) => {
                return(
                    <React.Fragment>
                        <div className="col-md-4 col-6 col-xxl-4 mx-auto">
                            <h2>{item.projectname} </h2>
                            <figure>
                            <Link to={`/Gallary/${item._id}`}> <img src={item.image} style={{height:'40%',width:'100%'}} alt="gallary" className="img-fluid projectimgg"/> </Link>
                            </figure>
                            <p>{item.details} </p>
                        </div>
                        <hr/>
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
        <div className="main_heading " id="projectcss">
            <div className="text-center">
                <h1 className="display-4" id="hstyle"> Projects </h1>
                <hr className="w-25 mx-auto"/>
            </div>   
            <div className="container">
                <div className="row gx-0 my-5"> 
                    {Projectts(props)}
                <Link to="/Editproject"> <button type="button" class="btn btn-outline-info" data-toggle="tooltip" data-placement="right" title="insert "> Edit </button> </Link>  
                </div>
            </div>      
        </div>
        </>
    )
}

export default Adminproject;