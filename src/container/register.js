import React, {Component} from 'react'
import {register} from '../redux/regReducer.js'
import {connect} from 'react-redux'

class Register extends Component{
	constructor(props){
		super(props);
		this.state={
			name:'',
			id:'',
			pwd:'',
			pwdRepeat:'',
		}
		this.handleRegister=this.handleRegister.bind(this);
	}
	handleChange(key,value){
		console.log(key,value);
		this.setState({[key]:value})
		
	}
	handleRegister(){
		
		console.log(this.props.registerStatus);
		this.props.register(this.state);
	}
	render(){
		return (
			<div>
			<h2>Register Page {this.props.registerStatus.regReducer.msg}</h2>
			<div>Name</div>
			<input placeholder="input your name" onChange={e=>this.handleChange("name",e.target.value)}></input>
			<div>id</div>
			<input placeholder="input your id" onChange={e=>this.handleChange("id",e.target.value)}></input>
			<div>password</div>
			<input type="password" placeholder="input your password" onChange={e=>this.handleChange("pwd",e.target.value)}></input>
			<div>password again</div>
			<input type="password" placeholder="input your password again" onChange={e=>this.handleChange("pwdRepeat",e.target.value)}></input>
			<button onClick={this.handleRegister}>submit</button>
			</div>

		)
	}
}
const mapStatetoProps=(state)=>{
	return {registerStatus:state}
}
const actionCreators={register}
Register=connect(mapStatetoProps,actionCreators)(Register);
export default Register