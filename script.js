class Signin extends React.Component{

  state = {
    username: "",
    password: "",
    msgflag: false,

  };

  addmsg=()=>{

    this.setState((pre)=>{
      return {
        msgflag: true
      }

    })
  } 

  render(){
    if(this.state.msgflag){
      return (
        this.rendermsg()
      )
      
    }
    else{
      return (
        this.rendersignin()
      )
      
    }

  }

  rendermsg(){
    return (
      <div>
        <Message username={this.state.username} page={"SignUp"}/>
      </div>
    )
  }

  rendersignin(){
    return (
      <div>
        <form >
          <h1>Login</h1>
          <p> </p>

          <p>Username</p>
          <input class="txt" onChange={this.updateUsername} value={this.state.username} />
          <p> </p>

          <p>Password</p>
          <input class="txt" onChange={this.updatePassword} value={this.state.password}/>
          <p> </p>

          <button class="btn" onClick={this.addmsg}>Sign In</button>
          <p> </p>
          <p> </p>
          <p>To go to SignUp page, click below </p>


        </form>
      </div>
    );
  }

  updateUsername = (event) => {
    this.setState({
      username: event.target.value
    })
  }

  updatePassword = (event) => {
    this.setState({
      password: event.target.value
    })
  } 


}

class Signup extends React.Component{

  state = {
    username: "",
    password: "",
    mobileno: "",
    dob: "",
    msgflag: false,

  };

  addmsg=()=>{

    this.setState((pre)=>{
      return {
        msgflag: true
      }

    })
  } 

  render(){
    if(this.state.msgflag){
      return (
        this.rendermsg()
      )
      
    }
    else{
      return (
        this.rendersignup()
      )
      
    }

  }

  rendermsg(){
    return (
      <div>
        <Message username={this.state.username} page={"SignIn"}/>
      </div>

    )
  }

  rendersignup(){
    return (
      <div>
        <form >
          <h1>Signup</h1>
          <p> </p>
          <p>Username</p>
          <input class="txt" onChange={this.updateUsername} value={this.state.username} />
          <p> </p>

          <p>Password</p>
          <input class="txt" onChange={this.updatePassword} value={this.state.password}/>
          <p> </p>

          <p>Mobile No</p>
          <input class="txt" onChange={this.updateMobileno} value={this.state.mobileno}/>
          <p> </p>

          <p>Date of Birth</p>
          <input class="txt" onChange={this.updateDob} value={this.state.dob}/>
          <p> </p>

          <button class="btn" onClick={this.addmsg}>Sign Up</button>
          <p> </p>
          <p>To go to SignIn page, click below </p>


        </form>
      </div>
    );
  }

  updateUsername = (event) => {
    this.setState({
      username: event.target.value
    })
  }

  updatePassword = (event) => {
    this.setState({
      password: event.target.value
    })
  }

  updateMobileno = (event) => {
    this.setState({
      mobileno: event.target.value
    })
  }

  updateDob = (event) => {
    this.setState({
      dob: event.target.value
    })
  }

}

class Message extends React.Component{
  render(){
    return (
      <div>
        <h1>Welcome, {this.props.username}</h1>
        <p> </p>
        <p>To go to {this.props.page} page, click below</p>        
      </div>
    )
  }
}


class App extends React.Component{

  state={
    array:[<Signin/>,<Signup/>] ,
    count:0
  }


  add=()=>{

    this.setState((pre)=>{
      if(pre.count===1){
        return {
          count:0
        }

      }
      else{
        return{
          count:pre.count+1 
        }
      }
    })
  } 

  render(){
    return(
      <div>
        <div>{this.state.array[ this.state.count]}</div>
        <button class="btn" onClick={this.add}>Click Here</button>
      </div>
    )
  }

}


ReactDOM.render( <App/> , document.getElementById('root'));