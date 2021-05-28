import React from 'react'
import Adminabout from '../addminstrator/adminabout'
const url ="https://web-mm.herokuapp.com/About"

class Adminaboutapi extends React.Component{
    constructor(){
        super()
        this.state={
            Abouts:''
        }
    }
    render(){
        return(
            <React.Fragment>
                <Adminabout Aboutts={this.state.Abouts} />
            </React.Fragment>
        )
    }

    componentDidMount(){
        fetch(url,{method:'GET'})
        .then((res) => res.json())
        .then((data) => {
            this.setState({Abouts:data})
        })
    }
}



export default Adminaboutapi ;