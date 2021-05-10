import React from  'react'
import '../Projectdetail/p.css'

const Pdetails =()=>{
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
                <div className="col-md-6 col-3 col-xxl-3 mx-auto" >
                        <img src ="/images/blood.jpg" id="projectimgg"  alt="icon"/>
                </div>
                <div className="col-md-6 col-6 col-xxl-6 mx-auto" id="pedit" >
                        <h3> <center> Project name </center>  </h3>
                        <hr className="w-25 mx-auto"/>
                        <div>
                            <span> <b> Details- </b> </span>
                            <span> "it is a blood donation site..here you can register your name for donating blood..If you have  requirment of blood then also registered in this platform...It's is fully responsive and working website." </span>
                        </div><br/>
                        <div>
                            <span> <b> purpose - </b> </span>
                            <span> For helping people. </span>
                        </div> <br/>
                        <div>
                            <span> <b> technology - </b> </span>
                            <span> MERN stack. </span>
                        </div> <br/>
                        <div>
                            <span> <b> Which time started - </b> </span>
                            <span> It's started in 2021 </span>
                        </div> <br/>
                        <a href="https://blood-application.herokuapp.com/" target="_blank"> <center> <button type="button" class="btn btn-outline-danger  btnstyle " data-toggle="tooltip" data-placement="right" title="Visit Peoject"> VISIT </button> </center> </a>
                </div>
            </div>

        </div>
    )
}

export default Pdetails ; 