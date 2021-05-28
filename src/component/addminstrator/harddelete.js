import React from 'react' 
const url="https://web-mm.herokuapp.com/deleteservice/"

class Harddelete extends React.Component{
    constructor(){
        super()
    }
    render(){
        return(
            <>
            </>

        )
    }
    componentDidMount(){
        fetch(`${url}${this.props.match.params.id}`,{method:'DELETE'})
        .then((res) => res.json())
        this.props.history.push('/adminr');
            
        
    }
}

export default Harddelete ;