import axios from 'axios'
const initState={
	flag: 'failed'
}
export function loginReducer(state, action){
	switch(action.type){
		case 'Login_Success':
			return {flag:'succeed'};
		case 'Login_Failed':
			return {flag:'failed'};
		default: return initState;
	}
}
export function login({id,pwd}){
	return dispatch=>axios.get('user.json')
	.then(res=>{
		//console.log(id+pwd)
		if(res.data.find(a=>{return a.id===id&&a.pwd===pwd})===undefined) 
			return dispatch({type:'Login_Failed'})
		else return dispatch({type:'Login_Success'})
	})
	
}