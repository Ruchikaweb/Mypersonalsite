import React from 'react';
import {BrowserRouter,Route} from 'react-router-dom';
import Home from '../component/home/home';
import Footer from '../component/footer/footer';
import Contact from '../component/contact/contact';
import About from '../component/about/about';
import Service from '../component/service/service';
import Gallary from '../component/gallary/gallary';
import Panel from '../component/addminstrator/panel';
import Pdetails from '../component/Projectdetail/pdetail';
import Adminabout from '../component/addminstrator/adminabout';
import Editabout from '../component/addminstrator/editabout';
import Adminproject from '../component/addminstrator/adminproject';
import Editproject from '../component/addminstrator/editproject';
import Adminservice from '../component/addminstrator/adminservice';
import Editservice from '../component/addminstrator/editservice';
import Sub from '../component/addminstrator/subscriber';
const Routing = () =>{
    return(
        <BrowserRouter>
         <Route exact path="/" component={Home}/>
         <Route path="/Contact" component={Contact}/>
         <Route path="/About" component={About}/>
         <Route path="/Service" component={Service}/>
         <Route exact path="/Gallary" component={Gallary}/>
         <Route path="/Gallary/:id" component={Pdetails}/>
         <Route exact path="/adminr"  component={Panel}/> 
         <Route path="/adminr/Adminabout"  component={Adminabout}/> 
         <Route path="/adminr/Adminproject"  component={Adminproject}/> 
         <Route path="/adminr/Adminservice" component={Adminservice}/>
         <Route path="/adminr/sub" component={Sub}/> 
         <Route path="/Editabout" component={Editabout}/>
         <Route path="/Editproject" component={Editproject}/>
         <Route path="/Editservice" component={Editservice}/>
         <Footer/>
        </BrowserRouter>
    )
}

export default Routing ;
