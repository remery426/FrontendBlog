import React from 'react';
import axios from 'axios';
import { Redirect } from 'react-router';

class Login extends React.Component{
  constructor(props) {
  super(props);
  this.state = {
    errors: '',
    redirect: false
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  async handleSubmit(event){
    event.preventDefault()
    let user = await axios.post('https://hidden-forest-93026.herokuapp.com/login',{username:event.target.username.value,password:event.target.password.value})
    console.log(user.data)
    if(user.data){
      this.setState({
        errors:"",
        redirect: true
      })
    }
    else{
      this.setState({
        errors:"Something went wrong if you already have an account make sure your password is correct. Otherwise this username may be taken"
      })
    }
  }
  render(){
    if (this.state.redirect) {
    return <Redirect to='/'/>;
  }

    return(
      <div>
      <h1> Login/Register</h1>
        <p> Please enter a username and password to continue </p>
        <p style = {{color:"red"}}> {this.state.errors} </p>
        <form onSubmit={this.handleSubmit}>
        <label> Username: </label>
        <input placeholder="Username" name="username" />
        <label> Password: </label>
        <input placeholder="Password"  name="password"/>
        <input className="waves-effect waves-light btn red"  type="submit" value = "Submit"/>
        </form>
      </div>
    )
  }
}
export default Login
