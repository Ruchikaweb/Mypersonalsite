import React from 'react'
import '../addminstrator/subscriber.css'
import Cookies from 'universal-cookie'
const url ="https://web-mm.herokuapp.com/login"
class Adminlogin extends React.Component{
    constructor(props){
        super(props)

        this.state={
            email:'',
            password:'',
            data:''
        }
    }

    submitt =()=>{
        console.log(">>>>>>>",this.state)
        fetch(url,
            {
                method:'POST',
                headers:{
                    'Accept':'application/json',
                    'Content-Type':'application/json'
                },
                body:JSON.stringify({
                    password:this.state.password,
                    email:this.state.email,
                }) 
            }) 
            .then((dataa) =>{ return dataa.json()}) 
            .then((dataa) =>{
                if((dataa).length==0){
                    alert("wrong email and password")
                } 
                else{
                    alert("hello")
                    var Cookie = new Cookies()
                     Cookie.set("Ruchikaemail",this.state.email) 
                     Cookie.set("Ruchikapassword",this.state.password) 

                    this.props.history.push('/adminr')
                }
            })
            

    }

    handelchange =(event) =>{
        this.setState({[event.target.name]:event.target.value })
            
        
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
                        <input type="email" required class="form-control" name="email"  id="exampleInputEmail1" aria-describedby="emailHelp" onchange={this.handelchange} autoComplete="off"/>
                        <div id="emailHelp" class="form-text">We'll never share your email with anyone else.</div>
                    </div>
                    <div class="mb-3"> 
                        <label for="exampleInputPassword1" class="form-label">Password</label>
                        <input type="password" required class="form-control" name="password" onchange={this.handelchange} id="exampleInputPassword1"/>
                    </div>
                    <center>  
                    <button type="submit" onclick={this.submitt} class="btn btn-success loginbtndesign">Log In</button>
                     </center>
                   
                </form>
            </div>    
            </>
        )
    }

    
}

export default Adminlogin ;