import React from 'react';
import {BrowserRouter,Route} from 'react-router-dom';
import Navbar from '../component/navbar/nav'
import Clauser from '../component/clauser/clauser'
import Home from '../component/home/home'
import Footer from '../component/footer/footer'
import Contact from '../component/contact/contact'
import About from '../component/about/about'
import Service from '../component/service/service'
import Gallary from '../component/gallary/gallary'
const Routing = () =>{
    return(
        <BrowserRouter>
        <Navbar/>
        <Clauser/>
         <Route exact path="/" component={Home}/>
         <Route path="/Contact" component={Contact}/>
         <Route path="/About" component={About}/>
         <Route path="/Service" component={Service}/>
         <Route path="/Gallary" component={Gallary}/>
         <Footer/>
        </BrowserRouter>
    )
}

export default Routing ;
