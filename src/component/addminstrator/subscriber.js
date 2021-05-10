import React from 'react';
import '../addminstrator/subscriber.css'
const Sub=() =>{
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
                    <table className="table table-responsive">
                        <thead>
                            <tr>
                            {/* <th> OrderId </th> */}
                            <th> Name </th>
                            <th> E-mail </th>
                            <th> Gender </th>
                            <th> city </th>
                            <th> Message </th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td> Ruchika </td>
                                <td>ruchi@gmail.com </td>
                                <td>Female </td>
                                <td> churu </td>
                                <td> hello </td>
                            </tr>
                            <tr>
                                <td> Ruchika </td>
                                <td>ruchi@gmail.com </td>
                                <td>Female </td>
                                <td> churu </td>
                                <td> hello </td>
                            </tr>
                            
                        </tbody>
                    </table>
                </div>
                
            </div>
        )
    
}

export default Sub ;