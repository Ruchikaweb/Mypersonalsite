import React from 'react' ;
import Channge from '../addminstrator/changestatus' ;
// import Servicedetails from '../service/servicedetails'
const url ="https://web-mm.herokuapp.com/Serviceforsoftdel"

class Changestatusapi extends React.Component{
    constructor(){
        super()
        this.state={
            services:''
        }
    } 
    render(){
        return(
            <React.Fragment>
                <Channge Services={this.state.services} />
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



export default Changestatusapi ;