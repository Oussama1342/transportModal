import React, { Component } from "react";
import axios from 'axios';
import  { Link } from 'react-router-dom'
import Acceuil from './Acceuil'
import AuthentifService from '../services/AuthentifService'
export class AuthentifDash extends Component{

  constructor() {
    super();

    this.state = {
      username: "",
      password: "", 
      bureau :"rt"
    };
    this.login = this.login.bind(this);
  }

  
  handleFormSubmit = event => {
    event.preventDefault();

    const endpoint = "http://localhost:8080/login";

    const username = this.state.username;
    const password = this.state.password;

    const user_object = {
      username: username,
      password: password
    };

    axios.post(endpoint, user_object).then(res => {
      console.log(res.data)
      localStorage.setItem("authorization", res.data.username);
 
    });
  };
  componentDidMount(){
   
  }
 login(){
  console.log(this.state.bureau)
  AuthentifService.login(this.state.username, this.state.password).then((res) =>{

    localStorage.setItem("authorization" , res.data.token)
 })
 }

  onChange = (e) =>
  this.setState({ [e.target.name]: e.target.value });


    render(){
        return(
<div classname="wrapper">
  <div className="container">
    <div className="d-flex justify-content-center h-100">
      <div className="card">
        <div className="card-headers">
          <h3>Sign In</h3>
      
        </div>
        <div className="card-body">
      
            <div className="input-group form-group">
              <div className="input-group-prepend">
                <span className="input-group-text"><i className="fas fa-user" /></span>
              </div>
              <input type="text" className="form-control" placeholder="username" name="username"  value={this.state.username} onChange={e => this.setState({username: e.target.value}) }   />
            </div>
            <div className="input-group form-group">
              <div className="input-group-prepend">
                <span className="input-group-text"><i className="fas fa-key" /></span>
              </div>
              <input type="password" className="form-control" placeholder="password" name="password" value={this.state.password} onChange={e => this.setState({password: e.target.value}) } />
            </div>
            <div className="row align-items-center remember">
              <input type="checkbox" />Remember Me
            </div>
            <div className="form-group">
              <input type="submit" defaultValue="Login" onClick={this.login}  className="btn float-right login_btn"  />
            </div>
      
        </div>
        <div className="card-footer">
          <div className="d-flex justify-content-center links">
            Don't have an account?<a href="#">Sign Up</a>
          </div>
          <div className="d-flex justify-content-center">
            <a href="#">Forgot your password?</a>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>



        )
    }
}
export default AuthentifDash