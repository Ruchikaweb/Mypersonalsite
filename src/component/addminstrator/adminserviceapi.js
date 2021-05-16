import React from 'react' ;
import Adminservice from '../addminstrator/adminservice' ;
// import Servicedetails from '../service/servicedetails'
const url ="https://web-mm.herokuapp.com/Service"

class Adminserviceapi extends React.Component{
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
                <Adminservice Services={this.state.services} />
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



export default  Adminserviceapi ;