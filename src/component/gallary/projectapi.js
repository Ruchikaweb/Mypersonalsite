import React from 'react';
import Gallary from '../gallary/gallary'
const url="https://web-mm.herokuapp.com/Project";

class Projectapi extends React.Component{
    constructor(){
        super()

        this.state={
            project:''
        }
    } 
    render(){
        return(
            <React.Fragment>
                
                <Gallary  projects={this.state.project}/>
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

export default Projectapi ;