import React, {Component} from 'react'
import {connect} from 'react-redux'
import {login} from '../redux/loginReducer'
import axios from 'axios'
class Auth extends Component{
	constructor(props){
		super(props);
		this.state={
			pass:false,
		}
	}
	componentDidMount(){
	   axios.get('user.json')
      .then(res => {
      	console.log(res);
      	this.setState({pass: res.data.find(obj=>obj.id==='jx').pwd==='123'})
      	console.log(this.props)
      });
	}
	render(){
	  return(
	  	<div>
			<h1>
			Login page {this.props.loginStatus.loginReducer.flag}
			</h1>
			<button onClick={()=>this.props.login(this.state.pass)}>login true</button>
		</div>)
	}
	
}
const mapStatetoProps=(state)=>{
	return {loginStatus:state}
}
const actionCreators={login}
Auth=connect(mapStatetoProps,actionCreators)(Auth);
export default Auth;

