import React from  'react'
import '../Projectdetail/p.css'

const Pdetails =(props)=>{
    const Projectdetails =({projectss}) =>{
        if(projectss){
            return projectss.map((item) =>{
                return(
                    <div>
                        <div className="col-md-6 col-3 col-xxl-3 mx-auto" >
                            <img src ={item.image} id="projectimgg"  alt="icon"/>
                        </div>
                        <div className="col-md-6 col-6 col-xxl-6 mx-auto" id="pedit" >
                                <h3> <center> {item.projectname} </center>  </h3>
                                <hr className="w-25 mx-auto"/>
                                <div> 
                                    <span> <b> Details- </b> </span>
                                    <span> {item.details} </span>
                                </div><br/>
                                <div>
                                    <span> <b> purpose - </b> </span>
                                    <span> {item.purpose} </span>
                                </div> <br/>
                                <div>
                                    <span> <b> technology - </b> </span>
                                    <span> {item.technology} </span>
                                </div> <br/> 
                                <div>
                                    <span> <b> Which time started - </b> </span>
                                    <span> {item.Whichtimestarted} </span>
                                </div> <br/>
                                <a href= {item.link} target="_blank"> <center> <button type="button" class="btn btn-outline-danger  btnstyle " data-toggle="tooltip" data-placement="right" title="Visit Peoject"> VISIT </button> </center> </a>
                        </div>
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
        <div>
             
            <div id="headstyle">
                <div className="row">
                    <div className="col-md-6 col-6 col-xxl-6 mx-auto">
                        <figure>
                            <img src="/images/pp.png" alt="aa"/>
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

            <div className="row">
               { Projectdetails(props)}
            </div>

        </div>
    )
}

export default Pdetails ; 