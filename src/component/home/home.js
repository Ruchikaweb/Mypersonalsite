import React from 'react';
import Clauser from '../clauser/clauser'
import Navbar from '../navbar/nav'
import {Link} from 'react-router-dom';
import '../home/home.css'
class Home extends React.Component {

    constructor(props){
        super(props)

    }

    render(){
        return(
            <> 
            <Navbar/>
             <Clauser/>
            {/* //about page// */}
             <div className="main_heading my-5">
                 <div className="text-center">
                     <h1 className="display-4" id="hstyle"> About Me </h1>
                     <hr className="w-25 mx-auto"/>
                 </div>  
                 <div className="container my-5">
                     <div className="row">
                         <div className="col-lg-6 col-md-6 col-12 col-xxl-6">
                             <figure>
                                 <img src="./images/my pic.jpg" id="myimg" alt="about image" className=".img-fluid about_img"/>
                             </figure>
                         </div>
                         <div className="col-lg-6 col-md-6 col-12 col-xxl-6" id="mydetails">
                             <h1> Hello! I'm Ruchika </h1>
                             <span> 
                                 I'm a full stack web developer , live in churu (Raj). I can make all types of websites like e-commerce website , your personal website, school management website etc.
                                 In my website frontend and backend both are included and it is fully responsive website for all screen.  
                             </span>
                             <p> If you want to know more about my skills then click on the check more button and visit about me page .... </p>
                             <Link to="/About">   <button type="button" class="btn btn-outline-info" data-toggle="tooltip" data-placement="right" title="Who Am I">Check More</button> </Link>
                           
                         </div>
                     </div>
                 </div> 
                 {/* //service page// */}
                 <div className="main_heading my-5 bg-light pt-5">
                     <div className="text-center">
                         <h1 className="display-4" id="hstyle"> Our Services </h1>
                         <hr className="w-25 mx-auto"/>
                     </div> 
     
                     <div className="container">
                         <div className="row">
                         <div className="col-md-4 col-10 col-xxl-4 mx-auto">
                             <div class="card mb-3" style={{maxWidth:'540px'}}>
                                 <div class="row">
                                     <div class="col-md-4" >
                                         <img id ="servicecardimage" src="./images/fifth.jpg" alt="service page"/>
                                     </div>
                                     <div class="col-md-8">
                                         <div class="card-body">
                                             <h5 class="card-title">Card title</h5>
                                             <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                                             <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
                                         </div>
                                     </div>
                                 </div>
                             </div>
                         </div>
                         <div className="col-md-4 col-10 col-xxl-4 mx-auto">
                             <div class="card mb-3" style={{maxWidth:'540px'}}>
                                 <div class="row">
                                     <div class="col-md-4" >
                                         <img id ="servicecardimage" src="./images/fifth.jpg" alt="service page"/>
                                     </div>
                                     <div class="col-md-8">
                                         <div class="card-body">
                                             <h5 class="card-title">Card title</h5>
                                             <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                                             <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
                                         </div>
                                     </div>
                                 </div>
                             </div>
                         </div>
                         <div className="col-md-4 col-10 col-xxl-4 mx-auto">
                             <div class="card mb-3" style={{maxWidth:'540px'}}>
                                 <div class="row">
                                     <div class="col-md-4" >
                                         <img id ="servicecardimage" src="./images/fifth.jpg" alt="service page"/>
                                     </div>
                                     <div class="col-md-8">
                                         <div class="card-body">
                                             <h5 class="card-title">Card title</h5>
                                             <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                                             <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
                                         </div>
                                     </div>
                                 </div>
                             </div>
                         </div>
                         <div className="col-md-4 col-10 col-xxl-4 mx-auto">
                             <div class="card mb-3" style={{maxWidth:'540px'}}>
                                 <div class="row">
                                     <div class="col-md-4" >
                                         <img id ="servicecardimage" src="./images/fifth.jpg" alt="service page"/>
                                     </div>
                                     <div class="col-md-8">
                                         <div class="card-body">
                                             <h5 class="card-title"> Forntend Developer </h5>
                                             <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                                             <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
                                         </div>
                                     </div>
                                 </div>
                             </div>
                         </div>
                         
                     </div>
                     </div>
                 </div>
             </div>
             {/*project part */}
                 <div className="main_heading my-5  pt-5">
                         <div className="text-center">
                             <h1 className="display-4" id="hstyle"> Projects </h1>
                             <hr className="w-25 mx-auto"/>
                         </div>   
                         <div className="container">
                             <div className="row gx-0 my-5">
                             <div className="col-md-4 col-10 col-xxl-4 mx-auto">
                                     <figure>
                                     <Link to="/Gallary/id">   <img src="./images/fifth.jpg" alt="gallary" className="img-fluid"/> </Link>
                                     </figure>
                                 </div>
                                 <div className="col-md-4 col-10 col-xxl-4 mx-auto">
                                     <figure>
                                     <Link to="/Gallary/id">   <img src="./images/fifth.jpg" alt="gallary" className="img-fluid"/> </Link>
                                     </figure>
                                 </div>
                                 <div className="col-md-4 col-10 col-xxl-4 mx-auto">
                                     <figure>
                                     <Link to="/Gallary/id">   <img src="./images/fifth.jpg" alt="gallary" className="img-fluid"/> </Link>
                                     </figure>
                                 </div>
                                 <div className="col-md-4 col-10 col-xxl-4 mx-auto">
                                     <figure>
                                     <Link to="/Gallary/id">   <img src="./images/fifth.jpg" alt="gallary" className="img-fluid"/> </Link>
                                     </figure>
                                 </div>
                                 <div className="col-md-4 col-10 col-xxl-4 mx-auto">
                                     <figure>
                                     <Link to="/Gallary/id">   <img src="./images/fifth.jpg" alt="gallary" className="img-fluid"/> </Link>
                                     </figure>
                                 </div>
                                 
                                 <div className="col-md-4 col-10 col-xxl-4 mx-auto">
                                     <figure>
                                     <Link to="/Gallary/id">   <img src="./images/fifth.jpg" alt="gallary" className="img-fluid"/> </Link>
                                     </figure>
                                 </div> 
                                 <div className="col-xxl-12 text-center my-5"> 
                                     <Link to="/Gallary">   <button type="button" class="btn btn-outline-info " data-toggle="tooltip" data-placement="right" title="See more projects">Check More</button> </Link>
                                 </div>
     
                             </div>
                         </div>      
                 </div>
     
                 {/* offers */}
                 <div className="main_heading my-5  py-2 offerstyle">
                         <div className="container-fluid">
                             <div className="row">
                                 <div className=" col-xxl-12 col-12 py-5 text-center">
                                     <h1 className="text-white"> Check out my videos </h1>
                                     <p>
                                         Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups.
                                     </p>
                                     <button type="button" class="btn btn-outline-light" data-toggle="tooltip" > <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-arrow-right-circle" viewBox="0 0 16 16">
                                     <path fill-rule="evenodd" d="M1 8a7 7 0 1 0 14 0A7 7 0 0 0 1 8zm15 0A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM4.5 7.5a.5.5 0 0 0 0 1h5.793l-2.147 2.146a.5.5 0 0 0 .708.708l3-3a.5.5 0 0 0 0-.708l-3-3a.5.5 0 1 0-.708.708L10.293 7.5H4.5z"/>
                                     </svg> Check More</button>
                                 </div>
                             </div>
                         </div> 
                 </div>  
     
                {/* //contect page// */}
     
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
                             {/* <p> Mobile : +91 820 911 1389 </p> */}
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

export default Home ;