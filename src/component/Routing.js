import React from 'react';
import {BrowserRouter,Route} from 'react-router-dom';
import Home from '../component/home/home';
import Footer from '../component/footer/footer';
import Contact from '../component/contact/contact';
import Aboutapi from '../component/about/aboutapi';
import Serviceapi from '../component/service/serviceapi';
import Servicedetailapi from'../component/service/servicedetailsapi';
import Projectapi from '../component/gallary/projectapi';
import Panel from '../component/addminstrator/panel';
import Projectdetailsapi from '../component/Projectdetail/pdetailsapi';
import Adminaboutap from '../component/addminstrator/adminaboutapi';
import Editabout from '../component/addminstrator/editabout';
import Adminprojectapi from '../component/addminstrator/adminprojectapi';
import Editproject from '../component/addminstrator/editproject';
import Adminserviceapi from '../component/addminstrator/adminserviceapi';
import Editservice from '../component/addminstrator/editservice';
import Adminlogin from '../component/addminstrator/login';
import Deleteservice from '../component/addminstrator/updateservice';
import Changestatusapi from '../component/addminstrator/changestatusapi';
import Adminlogout from '../component/addminstrator/logout';
import Subscriberapi from '../component/addminstrator/subscriberapi';
import Reactiveservice from '../component/addminstrator/changestatusapi2';
import Harddelete from '../component/addminstrator/harddelete';
const Routing = () =>{
    return( 
        <BrowserRouter>
         <Route exact path="/" component={Home}/>
         <Route exact path="/Contact" component={Contact}/>
         <Route exact path="/About" component={Aboutapi}/>
         <Route exact path="/Service" component={Serviceapi}/>
         <Route exact path="/Servicedetails/:id" component={Servicedetailapi}/>
         <Route exact path="/Gallary" component={Projectapi}/>
         <Route path="/Gallary/:id" component={Projectdetailsapi}/>
         <Route exact path="/adminr"  component={Panel}/> 
         <Route exact path="/adminr/Adminabout"  component={Adminaboutap}/> 
         <Route exact path="/adminr/Adminproject"  component={Adminprojectapi}/> 
         <Route exact path="/adminr/Adminservice" component={ Adminserviceapi}/>
         <Route exact path="/adminr/Subscriber" component={Subscriberapi}/> 
         <Route exact path="/Admin_login" component={ Adminlogin}/>
         <Route exact path="/Admin_logout" component={Adminlogout}/>
         <Route exact path="/Editabout" component={Editabout}/>
         <Route exact path="/Editproject" component={Editproject}/>
         <Route exact path="/Editservice" component={Editservice}/>
         <Route exact path="/adminr/delete" component={Changestatusapi}/>
         <Route exact path="/active/:id" component={Reactiveservice}/>
         <Route exact path="/changestatus/:id" component={Deleteservice}/> 
         <Route exact path="/adminr/updateservice/:id" component={Editservice}/>
         <Route exact path="/harddel/:id" component={Harddelete}/>

         <Footer/>
        </BrowserRouter>
    )
}

export default Routing ;
