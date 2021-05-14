// import React from 'react'
// import About from '../about/about'
// const url ="https://web-mm.herokuapp.com/Service"

// class Aboutapi extends React.Component{
//     constructor(){
//         super()
//         this.state={
//             services:''
//         }
//     }
//     render(){
//         return(
//             <React.Fragment>
//                 <About Service={this.state.services} />
//             </React.Fragment>
//         )
//     }

//     componentDidMount(){
//         fetch(url,{method:'GET'})
//         .then((res) => res.json())
//         .then((data) => {
//             this.setState({services:data})
//         })
//     }
// }



// export default Aboutapi ;