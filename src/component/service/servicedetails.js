import React from 'react' 
import '../service/service.css'
const Servicedetails=(props)=> {
    const services=({servicedetail})=>{
        if(servicedetail){
            return servicedetail.map((item) =>{
            return(
                <div> 
                    <div class="card mb-3" >
                    <img src={item.thumb} id="servicceimg" class="card-img-top" alt="card"/>
                    <div class="card-body">
                     <center> <h1 class="card-title"> {item.name} </h1> </center>   
                        <p class="card-text servicedetaistext">{ item.content}</p>
                        <p class="card-text servicedetaistext">{item.contentt}</p>
                    </div>
                </div>
                </div>
            )
        }
            )}
    } 
        return(
            <React.Fragment> 
                 <div id="headstylee">
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
                    {services(props)}
                </div>    
               
            </React.Fragment>
        )
        
}

export default Servicedetails ; 