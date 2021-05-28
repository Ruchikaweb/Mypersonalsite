import React from  'react' 
const url= "https://web-mm.herokuapp.com/Postservice"
const geturl ="https://web-mm.herokuapp.com/Services/"
const updateurl = "https://web-mm.herokuapp.com/updateservice/"

class Editservice  extends React.Component{
    constructor(){
        super()

        this.state = {
            name:'',
            thumb:'',
            content:'',
            contentt:''
        }
    }

    handelsubmit = () => {
        if(this.props.match.params.id){
            fetch(`${updateurl}${this.props.match.params.id}`,
                {
                    method:'PUT',
                    headers:{
                        'Accept':'application/json',
                        'Content-Type':'application/json'
                    },
                    body:JSON.stringify({
                        name:this.state.name,
                        thumb:this.state.thumb,
                        content:this.state.content,
                        contentt:this.state.contentt
                    }) 
                })
                .then(this.props.history.push('/adminr/Adminservice'))
        }
        else{
            console.log(">>>>>>>",this.state)
        fetch(url,
            {
                method:'POST',
                headers:{
                    'Accept':'application/json',
                    'Content-Type':'application/json'
                },
                body:JSON.stringify({
                    name:this.state.name,
                    thumb:this.state.thumb,
                    content:this.state.content,
                    contentt:this.state.contentt,
                    isActive:true
                }) 
            })
            .then(this.props.history.push('/adminr/Adminservice'))
        }
        
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
                    <center> <h1> Edit Service Page </h1> </center>
                    <form>
                        <div class="mb-3">
                            <label for="exampleInputPassword1" class="form-label"> Project Name </label>
                            <input type="text" class="form-control" name="name" value={this.state.name} onChange={this.handelchange}/>
                        </div> 
                        <div class="mb-3">
                            <label for="formFile" class="form-label">Picture Url </label>
                            <input type="text" class="form-control" name="thumb" value={this.state.thumb} onChange={this.handelchange}/>
                        </div>
                        <div class="mb-3">
                            <label for="exampleInputPassword1" class="form-label"> Content </label>
                            <input type="text" class="form-control" name="content" value={this.state.content} onChange={this.handelchange}/>
                        </div> 
                        <div class="mb-3">
                            <label for="exampleInputPassword1" class="form-label">  contentt </label>
                            <input type="text" class="form-control" name="contentt" value={this.state. contentt} onChange={this.handelchange}/>
                        </div> 
                       
                        <center> <button type="submit" class="btn btn-primary" onClick={this.handelsubmit} style={{padding:'1%',fontSize:'20px', marginBottom:'4%',marginTop:'1%'}}>Submit</button> </center>    
                    </form>
                </div>
            </div>
        )
    }
    componentDidMount(){
        if(this.props.match.params.id){
            fetch(`${geturl}${this.props.match.params.id}`,{method:'GET'})
            .then((res) => res.json())
            .then((data) => {
            this.setState({name:data[0].name})
            this.setState({thumb:data[0].thumb})
            this.setState({content:data[0].content})
            this.setState({contentt:data[0].contentt})
        })
        }
        
    }
   
}

export default Editservice ;