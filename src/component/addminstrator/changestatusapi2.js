import React from 'react'
const delurll ="https://web-mm.herokuapp.com/activateservice/"

class Reactiveservice extends React.Component{
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
        if(this.props.match.params.id){
            fetch(`${delurll}${this.props.match.params.id}`
            ,
            { 
            method:'PUT',
            Headers:{
                "Accept":"application/json",
                "Content-Type":"application/json"
            }
          })
          .then(this.props.history.push('/adminr'))
          
            
        }}
        
    }


export default  Reactiveservice