import React from 'react'
import Servicedetails from '../service/servicedetails'
const url ="https://web-mm.herokuapp.com/Services"

class Servicedetailapi extends React.Component{
    constructor(){
        super()
        this.state={
            services:''
        }
    }  
    render(){
        return(
            <React.Fragment>
                <Servicedetails servicedetail={this.state.services} />
            </React.Fragment>
        )
    }

    componentDidMount(){
        var serviceid = this.props.match.params.id
        fetch(`${url}/${serviceid}`,{method:'GET'})
        .then((res) => res.json()) 
        .then((data) => {this.setState({services:data})
        })
    }
}

export default Servicedetailapi ;