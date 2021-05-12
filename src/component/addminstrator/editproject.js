import React from  'react' 

const Editproject =() =>{
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
            <div className="container" style={{marginTop:'-10%'}}>
              <center> <h1> Edit Project Page </h1> </center>
            <form>
            <div class="mb-3">
                    <label for="exampleInputPassword1" class="form-label"> Project Name </label>
                    <input type="text" class="form-control" id="exampleInputPassword1"/>
                </div> 
                <div class="mb-3">
                    <label for="formFile" class="form-label"> Project Picture </label>
                    <input class="form-control" type="file" id="formFile"/>
                </div>
                <div class="mb-3">
                    <label for="exampleInputPassword1" class="form-label"> Details </label>
                    <input type="text" class="form-control" id="exampleInputPassword1"/>
                </div> 
                <div class="mb-3">
                    <label for="exampleInputPassword1" class="form-label"> Purpose </label>
                    <input type="text" class="form-control" id="exampleInputPassword1"/>
                </div>
                <div class="mb-3">
                    <label for="formFile" class="form-label"> Which time  started </label>
                    <input type="text" class="form-control" id="exampleInputPassword1"/>
                </div>
                <div class="mb-3">
                    <label for="exampleInputPassword1" class="form-label"> Technology </label>
                    <input type="text" class="form-control" id="exampleInputPassword1"/>
                </div>
                <div class="mb-3">
                    <label for="exampleInputPassword1" class="form-label"> Project Link </label>
                    <input type="text" class="form-control" id="exampleInputPassword1"/>
                </div>
                    <center> <button type="submit" class="btn btn-primary" style={{padding:'1%',fontSize:'20px', marginBottom:'4%',marginTop:'1%'}}>Submit</button> </center>    
            </form>
            </div>
        </div>
    )
}

export default Editproject ;