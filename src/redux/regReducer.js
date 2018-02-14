import axios from 'axios'
const initState={
	isAuth:false,
	name:'',
	id:'',
	pwd:'',
	pwdRepeat:'',
	msg:''
}
//reducer
export function regReducer(state=initState, action){
	switch(action.type){
		case 'regSuccess': return {...state, isAuth:true,...action.payload}
		case 'regFail': return {...state,isAuth:false, msg: action.msg}
		default : return state;
	}
}
//actions
function regSuccess(data){
	return {type:'regSuccess', payload:data}
}
function errMsg(msg){
	return {msg,type:'regFail'}
}
export function register({name, id,pwd,pwdRepeat}){
	console.log(name);
	if(!name||!id||!pwd){
		return errMsg('name id pwd are required')
	}
	if(pwd!==pwdRepeat){
		return errMsg('the two passwords are not same')
	}
	
	return dispatch=>
		axios.post('/register',{name,id,pwd})
		.then(res=>{
			if(res.status==200){
				dispatch(regSuccess({name,id,pwd}))
			}else{
				dispatch(errMsg('error msg'));
			}
		})
	
}