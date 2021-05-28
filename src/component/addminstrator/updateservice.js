import React from 'react'
const delurl ="https://web-mm.herokuapp.com/deactiveservice/"

class Deleteservice extends React.Component{
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
            fetch(`${delurl}${this.props.match.params.id}`
            ,
            {
            method:'PUT',
            Headers:{
                "Accept":"application/json",
                "Content-Type":"application/json"
            },
            body:JSON.stringify({
                status:this.props.match.params.status,
                
            }) 
          })
          .then(this.props.history.push('/adminr/Adminservice'))
          
            
        }}
        
    }


export default  Deleteservice