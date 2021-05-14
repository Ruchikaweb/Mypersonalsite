import React from 'react'
import Service from '../service/service'
// import Servicedetails from '../service/servicedetails'
const url ="https://web-mm.herokuapp.com/Service"

class Serviceapi extends React.Component{
    constructor(){
        super()
        this.state={
            services:''
        }
    } 
    render(){
        return(
            <React.Fragment>
                {/* <Servicedetails servicedetail={this.state.services} /> */}
                <Service Service={this.state.services} />
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



export default Serviceapi ;