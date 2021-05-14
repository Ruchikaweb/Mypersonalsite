import React from 'react'
import Servicedetails from '../service/servicedetails'
const url ="https://web-mm.herokuapp.com/Service"

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
        fetch(url,{method:'GET'})
        .then((res) => res.json())
        .then((data) => {
            this.setState({services:data})
        })
    }
}



export default Servicedetailapi ;