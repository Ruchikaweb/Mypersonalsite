import React from 'react'
import About from '../about/about'
const url ="https://web-mm.herokuapp.com/About"

class Aboutapi extends React.Component{
    constructor(){
        super()
        this.state={
            Abouts:''
        }
    }
    render(){
        return(
            <React.Fragment>
                <About Aboutt={this.state.Abouts} />
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



export default Aboutapi ;