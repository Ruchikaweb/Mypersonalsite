import React from 'react';
import Sub from '../addminstrator/subscriber';
const url ="https://web-mm.herokuapp.com/Getdetails";

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
        fetch( url ,{method:'GET'})
        .then((res) => res.json())
        .then((data) => this.setState({Subscriberlist:data}))
    }
}

export default Subscriberapi ;