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
export function login(pass){
	return {type:pass==true?'Login_Success':'Login_Failed'}
}