import React from  'react' 
const url = "https://web-mm.herokuapp.com/postabout"

class Editabout extends React.Component{
    constructor(){
        super()
        this.state={
            Picture:'',
            content:'',
            skillcontent:'',
            name:''
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
                    Picture:this.state.Picture,
                    content:this.state.content,
                    skillcontent:this.state.skillcontent,
                    name:this.state. name,

                }) 
            })
            .then(this.props.history.push('/adminr/Adminabout'))
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
                  <center> <h1> Edit About Page </h1> </center>
                <form>
                    <div class="mb-3">
                        <label for="formFile" class="form-label">My Pic Change</label>
                        <input class="form-control" type="file" name="Picture" value={this.state.Picture} onChange={this.handelchange}/>
                    </div>
                    <div class="mb-3">
                        <label for="exampleInputPassword1" class="form-label"> About Me </label>
                        <input type="text" class="form-control" name="content" value={this.state.content} onChange={this.content}/>
                    </div> 
                    <div class="mb-3">
                        <label for="exampleInputPassword1" class="form-label"> About Skills </label>
                        <input type="text" class="form-control"name="skillcontent" value={this.state.skillcontent} onChange={this.handelchange}/>
                    </div>
                    <div class="mb-3">
                        <label for="formFile" class="form-label"> Skill Logo Name </label>
                        <input type="text" class="form-control" name="name" value={this.state.name} onChange={this.handelchange}/>
                    </div>
                        <center> <button type="submit" class="btn btn-primary" onClick={this.  handelsubmit} style={{padding:'1%',fontSize:'20px', marginBottom:'4%',marginTop:'1%'}}>Submit</button> </center>    
                </form>
                </div>
            </div>
        )
    }
   
}

export default Editabout ;