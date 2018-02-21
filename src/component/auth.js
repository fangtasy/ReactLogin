import React, {Component} from 'react'
import {connect} from 'react-redux'
import {login} from '../redux/loginReducer'
import axios from 'axios'
class Auth extends Component{
	constructor(props){
		super(props);
		this.state={
			id:'',
			pwd:''
		}
	}
	componentDidMount(){
	   axios.get('user.json')
      .then(res => {
      	console.log(res);
      	this.setState({id: '11',pwd:'321'})
      	console.log(this.props)
      });
	}
	render(){
	  return(
	  	<div>
			<h1>
			Login page {this.props.loginStatus.loginReducer.flag}
			</h1>
			<button onClick={()=>this.props.login(this.state)}>login true</button>
		</div>)
	}
	
}
const mapStatetoProps=(state)=>{
	return {loginStatus:state}
}
const actionCreators={login}
Auth=connect(mapStatetoProps,actionCreators)(Auth);
export default Auth;

