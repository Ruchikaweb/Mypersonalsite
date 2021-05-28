import React from 'react';
import '../addminstrator/subscriber.css'
const Sub= (props) =>{
        const List = ({Listing}) => {
            if(Listing){
                return Listing.map((item) => {
                    return(
                        <tr>
                            <td>{item.name}</td>
                            <td> {item.email}</td>
                            <td> {item.gender} </td>
                            <td> {item.city}</td>
                            <td>{ item.message} </td>
                        </tr>
                    )
                })
            } 
            else{
                return(
                    <div>
                        <img src="/images/loader.gif"/>
                    </div>
                )
            }
        } 
        return(
            <div>
                <div id="headstyle">
                    <div className="row">
                        <div className="col-md-6 col-6 col-xxl-6 mx-auto">
                        <figure>
                                <img src="\images/pp.png" id="adminimg" alt="aa"/>
                            </figure>
                            
                        </div>
                        <div className="col-md-4 col-4 col-xxl-6 mx-auto">
                            <p id="edit"> “A successful website does three things:
                                It attracts the right kinds of visitors.
                                Guides them to the main services or product you offer.
                                Collect Contact details for future ongoing relation.” </p>
                        </div>
                    </div>
                </div>
                 <div className="container" id="subcss">
                    <h3>  <center> Subscribers </center> </h3>
                    <table className="table table-responsive" id="tablestylee">
                        <thead>
                            <tr>
                            <th> Name </th>
                            <th> E-mail </th>
                            <th> Gender </th>
                            <th> city </th>
                            <th> <p id="messagestyel"> Message </p>  </th>
                            </tr>
                        </thead>
                        <tbody>
                            {List(props)}
                        </tbody>
                    </table>
                </div>
                
            </div>
        )
    
}

export default Sub ;

