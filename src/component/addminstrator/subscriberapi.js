import React from 'react';
import Sub from '../addminstrator/subscriber';
import Cookies from 'universal-cookie';
const url ="https://web-mm.herokuapp.com/Getdetails";
const loginurl ="https://web-mm.herokuapp.com/login"

class Subscriberapi extends React.Component{
    constructor(){
        super()
        this.state = {
            Subscriberlist : ''
        }
    }
    render(){
        return(
            <React.Fragment>
                    <Sub Listing = {this.state.Subscriberlist}/>
            </React.Fragment>
        )
    }

    componentDidMount(){
        var Cookie = new Cookies();
        var Details = Cookie.get("Ruchika")
        if(Details){
            alert(Details)
        }
        else{
            this.props.history.push('/Admin_login')
        }
        fetch( url ,{method:'GET'})
        .then((res) => res.json())
        .then((data) => this.setState({Subscriberlist:data})) 
    }
}

export default Subscriberapi ;