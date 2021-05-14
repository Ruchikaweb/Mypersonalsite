import React from 'react'
import '../addminstrator/subscriber.css'
class Adminlogin extends React.Component{
    constructor(props){
        super(props)
    }
    render(){
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
            <div className="container loginfromdesign" style={{marginTop:'-8%'}}>
                <form>
                    <div class="mb-3">
                        <label for="exampleInputEmail1" class="form-label">Email address</label>
                        <input type="email" required class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" autoComplete="off"/>
                        <div id="emailHelp" class="form-text">We'll never share your email with anyone else.</div>
                    </div>
                    <div class="mb-3">
                        <label for="exampleInputPassword1" class="form-label">Password</label>
                        <input type="password" required class="form-control" id="exampleInputPassword1"/>
                    </div>
                    <center>  <button type="submit" class="btn btn-success loginbtndesign">Log In</button> </center>
                   
                </form>
            </div>    
            </>
        )
    }

    
}

export default Adminlogin ;