import React from 'react';
import {BrowserRouter,Route} from 'react-router-dom';
import Home from '../component/home/home';
import Footer from '../component/footer/footer';
import Contact from '../component/contact/contact';
import About from '../component/about/about';
import Serviceapi from '../component/service/serviceapi';
import Servicedetailapi from'../component/service/servicedetailsapi';
import Projectapi from '../component/gallary/projectapi';
import Panel from '../component/addminstrator/panel';
import Projectdetailsapi from '../component/Projectdetail/pdetailsapi';
import Adminabout from '../component/addminstrator/adminabout';
import Editabout from '../component/addminstrator/editabout';
import Adminproject from '../component/addminstrator/adminproject';
import Editproject from '../component/addminstrator/editproject';
import Adminservice from '../component/addminstrator/adminservice';
import Editservice from '../component/addminstrator/editservice';
import Adminlogin from '../component/addminstrator/login';
import Adminlogout from '../component/addminstrator/logout';
import Subscriberapi from '../component/addminstrator/subscriberapi';
// import Adminlogout from './addminstrator/logout';
const Routing = () =>{
    return( 
        <BrowserRouter>
         <Route exact path="/" component={Home}/>
         <Route exact path="/Contact" component={Contact}/>
         <Route exact path="/About" component={About}/>
         <Route exact path="/Service" component={Serviceapi}/>
         <Route exact path="/Servicedetails/:id" component={Servicedetailapi}/>
         <Route exact path="/Gallary" component={Projectapi}/>
         <Route path="/Gallary/:id" component={Projectdetailsapi}/>
         <Route exact path="/adminr"  component={Panel}/> 
         <Route exact path="/adminr/Adminabout"  component={Adminabout}/> 
         <Route exact path="/adminr/Adminproject"  component={Adminproject}/> 
         <Route exact path="/adminr/Adminservice" component={Adminservice}/>
         <Route exact path="/adminr/Subscriber" component={Subscriberapi}/> 
         <Route exact path="/Admin_login" component={ Adminlogin}/>
         <Route exact path="/Admin_logout" component={Adminlogout}/>
         <Route exact path="/Editabout" component={Editabout}/>
         <Route exact path="/Editproject" component={Editproject}/>
         <Route exact path="/Editservice" component={Editservice}/>
         <Footer/>
        </BrowserRouter>
    )
}

export default Routing ;
