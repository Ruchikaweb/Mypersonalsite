import React from 'react';
import '../contact/contact.css'
import Clauser from '../clauser/clauser'
import Navbar from '../navbar/nav'
const Contact =()=>{
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
                <form>
                    <div class="mb-3">
                        <label for="exampleInputPassword1" class="form-label">Name</label>
                        <input type="text" placeholder="enter your name" class="form-control" id="exampleInputPassword1" required/>
                    </div>
                    <div class="mb-3">
                        <label for="exampleInputEmail1" class="form-label">Email address</label>
                        <input type="email" placeholder="enter your email address" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" autoComplete="off" required/>
                        <div id="emailHelp" class="form-text">We'll never share your email with anyone else.</div>
                    </div>
                   
                    <div className="mb-3">
                        <label> Gender </label>
                    <div class="form-check form-check-inline">
                        <input class="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio1" value="option1" required/>
                        <label class="form-check-label" for="inlineRadio1">Female</label>
                        </div>
                        <div class="form-check form-check-inline">
                        <input class="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio2" value="option2" required/>
                        <label class="form-check-label" for="inlineRadio2">Male</label>
                        </div>
                    </div>
                    <div className="mb=3">
                    <label for="exampleDataList" class="form-label">Select City</label>
                        <input class="form-control" list="datalistOptions" id="exampleDataList" placeholder="Type to search..." required/>
                        <datalist id="datalistOptions">
                            <option value="San Francisco"/>
                            <option value="New York"/>
                            <option value="Seattle"/>
                            <option value="Los Angeles"/>
                            <option value="Chicago"/>
                        </datalist>
                    </div>
                  
                    <div class="mb-3">
                        <label for="exampleFormControlTextarea1" class="form-label">Example textarea</label>
                        <textarea class="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
                    </div>

                    <div class="mb-3 form-check">
                        <input type="checkbox" class="form-check-input" id="exampleCheck1" required/>
                        <label class="form-check-label" for="exampleCheck1">Check me out</label>
                    </div>
                    <button type="submit" class="btn btn-primary">Submit</button>
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

export default Contact ;