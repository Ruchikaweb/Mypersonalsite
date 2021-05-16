import React from  'react' 
const url = "https://web-mm.herokuapp.com/Postproject"
 
class Editproject extends React.Component{
    constructor(){
        super()

        this.state={
            projectname:'',
            image:'',
            details:'',
            purpose:'',
            Whichtimestarted:'',
            technology:'',
            link:''
        }

    }

    handelsubmit = () => {
        console.log(">>>>>>>",this.state)
        fetch(url,
            {
                method:'POST',
                headers:{
                    'Accept':'application/json',
                    'Content-Type':'application/json'
                },
                body:JSON.stringify({
                    projectname:this.state. projectname,
                    image:this.state.image,
                    details:this.state.details,
                    purpose:this.state. purpose,
                    Whichtimestarted:this.state.Whichtimestarted,
                    technology:this.state.  technology,
                    link:this.state.link

                }) 
            })
            .then(this.props.history.push('/adminr'))
    }
 
    handelchange=(event)=>{
        this.setState({[event.target.name]:event.target.value})
    }

    render(){

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
                        <input type="text" class="form-control" name="projectname" value={this.state.projectname} onChange={this.handelchange}/>
                    </div> 
                    <div class="mb-3">
                        <label for="formFile" class="form-label"> Project Picture url </label>
                        <input class="text"  class="form-control" name="image" value={this.state.image} onChange={this.handelchange}/>
                    </div>
                    <div class="mb-3">
                        <label for="exampleInputPassword1" class="form-label"> Details </label>
                        <input type="text" class="form-control" name="details" value={this.state.details} onChange={this.handelchange}/>
                    </div> 
                    <div class="mb-3">
                        <label for="exampleInputPassword1" class="form-label"> Purpose </label>
                        <input type="text" class="form-control" name="purpose" value={this.state.purpose} onChange={this.handelchange}/>
                    </div>
                    <div class="mb-3">
                        <label for="formFile" class="form-label"> Which time  started </label>
                        <input type="text" name="Whichtimestarted" class="form-control" value={this.state. Whichtimestarted} onChange={this.handelchange}/>
                    </div>
                    <div class="mb-3">
                        <label for="exampleInputPassword1" class="form-label"> Technology </label>
                        <input type="text" name="technology" class="form-control" value={this.state.technology} onChange={this.handelchange} />
                    </div>
                    <div class="mb-3">
                        <label for="exampleInputPassword1" class="form-label"> Project Link </label>
                        <input type="text" name="link" class="form-control" value={this.state.link} onChange={this.handelchange}/>
                    </div>
                        <center> <button type="submit" class="btn btn-primary" onClick={this.handelsubmit} style={{padding:'1%',fontSize:'20px', marginBottom:'4%',marginTop:'1%'}}>Submit</button> </center>    
                </form>
                </div>
            </div>
        )
    }
    
}

export default Editproject ;