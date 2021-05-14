import React from 'react';
import Pdetails from '../Projectdetail/pdetail'
const url="https://web-mm.herokuapp.com/Project";

class Projectdetailsapi extends React.Component{
    constructor(){
        super()

        this.state={
            project:''
        }
    } 
    render(){
        return(
            <React.Fragment>
                <Pdetails projectss={this.state.project} /> 
                
            </React.Fragment>
        )
    }

    componentDidMount(){
        // var projectid = this.props.match.params.id
        fetch(url,{method:'GET'})
        .then((res) => res.json())
        .then((data) => {
            this.setState({project:data})
        })
    }
}

export default Projectdetailsapi ;

// fetch(`${url}${projectid}`,{method:'GET'})