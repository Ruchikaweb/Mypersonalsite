import React from 'react';
import {BrowserRouter,Route} from 'react-router-dom';
import Home from '../component/home/home'
import Footer from '../component/footer/footer'
import Contact from '../component/contact/contact'
import About from '../component/about/about'
import Service from '../component/service/service'
import Gallary from '../component/gallary/gallary'
import Panel from '../component/addminstrator/panel'
import Projectdeatils from '../component/Projectdetail/projectdetail'
const Routing = () =>{
    return(
        <BrowserRouter>
         <Route exact path="/" component={Home}/>
         <Route path="/Contact" component={Contact}/>
         <Route path="/About" component={About}/>
         <Route path="/Service" component={Service}/>
         <Route exact path="/Gallary" component={Gallary}/>
         <Route path="/Gallary/:id" component={Projectdeatils}/>
         <Route path="/adminr"  component={Panel}/>
         <Footer/>
        </BrowserRouter>
    )
}

export default Routing ;
