import React from 'react';
import '../contact/contact.css'
import Clauser from '../clauser/clauser'
import Navbar from '../navbar/nav'
const Url = "https://web-mm.herokuapp.com/Customerdetails";
 
class Contact extends React.Component {
    constructor(props){
        super(props)

            this.state = {
                name:'',
                email:'',
                gender:'',
                city:'',
                message:''
            }
    } 
    handelsubmit = () => {
        console.log(">>>>>>>",this.state)
        fetch(Url,
            {
                method:'POST',
                headers:{
                    'Accept':'application/json',
                    'Content-Type':'application/json'
                },
                body:JSON.stringify({
                    name:this.state.name,
                    email:this.state.email,
                    gender:this.state.gender,
                    city:this.state.city,
                    message:this.state.message

                }) 
            })
            .then(this.props.history.push('/'))
    }

    handelchange=(event)=>{
        this.setState({[event.target.name]:event.target.value})
    }

    handelchangegender=(event)=>{
        console.log(event)
     
    }
    render(){
        return(
            <>
            <Navbar/>
            <Clauser/>
            <div className="main_heading my-5">
            <div className="text-center">
                <h1 className="display-4" id="hstyle"> Contact Us </h1>
                <hr className="w-25 mx-auto"/>
            </div>  
            <div className="container">
                <div className="row mx-auto">
                    <div className="col-xxl-8 col-10 col-md-8 mx-auto">
                    <form method="POST">
                        <div class="mb-3">
                            <label for="exampleInputPassword1" class="form-label">Name</label>
                            <input type="text" placeholder="enter your name" name="name" class="form-control" value={this.state.name} onChange={this.handelchange} required/>
                        </div>

                        <div class="mb-3">
                            <label for="exampleInputEmail1" class="form-label">Email address</label>
                            <input type="email" placeholder="enter your email address" name="email" class="form-control"  aria-describedby="emailHelp" autoComplete="off" value={this.state.email}  onChange={this.handelchange} required/>
                            <div id="emailHelp" class="form-text">We'll never share your email with anyone else.</div>
                        </div>
                       
                        <div className="mb-3">
                            <label> Gender </label>
                        <div class="form-check form-check-inline">
                            <input class="form-check-input" type="radio"  name="gender"  value="Female"  checked={this.state.gender=="Female"} onChange={this.handelchange} required/>
                            <label class="form-check-label" for="inlineRadio1">Female</label>
                            </div>
                            <div class="form-check form-check-inline">
                            <input class="form-check-input" type="radio" name="gender"  value="Male"  checked={this.state.gender=="Male"} onChange={this.handelchange} required/>
                            <label class="form-check-label" for="inlineRadio2">Male</label>
                            </div>
                        </div>

                        <div className="mb=3">
                        <label for="exampleDataList" class="form-label"> City</label>
                        <input type="text" placeholder="enter your city" class="form-control" autoComplete="off" value={this.state.city}  name="city" onChange={this.handelchange} required/>
                        </div>
                      
                        <div class="mb-3">
                            <label for="exampleFormControlTextarea1" class="form-label">Textarea</label>
                            <textarea class="form-control" name="message" value={this.state.message}  onChange={this.handelchange}  rows="3"></textarea>
                        </div>
    
                        <div class="mb-3 form-check">
                            <input type="checkbox" class="form-check-input" required/>
                            <label class="form-check-label" for="exampleCheck1">Check me out</label>
                        </div>
                        <button type="submit" onClick={this.handelsubmit} class="btn btn-primary">Submit</button>
                    </form>
                        
                    </div>
                </div>
            </div>
                <div className="row">
                    <div className=" col-xxl-12 col-12 col-md-12">
                        <footer className="text-center py-5" id="contactstyle" style={{fontSize:'20px'}}>
                            <p> E-mail : ruchikanikita94135@gmail.com </p>
                            <a href="https://www.linkedin.com/in/ruchika-agarwal-51a2841bb/" target="_blank"> <img src="./images/in logo.png" id="istyel" alt="inlogo"/> </a>
                            <a href="https://github.com/Ruchikaweb" target="_blank"> <img src="./images/git logo.png" id="istyel" alt="gitlog"/> </a> 
                        </footer>
                    </div>
                </div>
        </div>
    </>
        )
    }
    
}

export default Contact ;