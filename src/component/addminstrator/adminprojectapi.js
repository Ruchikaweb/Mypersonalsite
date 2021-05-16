import React from 'react';
import Adminproject from '../addminstrator/adminproject'
const url="https://web-mm.herokuapp.com/Project";

class Adminprojectapi extends React.Component{
    constructor(){
        super()

        this.state={
            project:''
        }
    } 
    render(){
        return(
            <React.Fragment> 
                <Adminproject  projectsss={this.state.project}/>
            </React.Fragment>
        )
    }

    componentDidMount(){
        fetch(url,{method:'GET'})
        .then((res) => res.json())
        .then((data) => {
            this.setState({project:data})
        })
    }
}

export default Adminprojectapi ;