import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {Provider} from 'react-redux';
import thunk from 'redux-thunk';
import {createStore, applyMiddleware,compose} from'redux';
import {BrowserRouter,Route,Redirect,Switch} from 'react-router-dom';
import registerServiceWorker from './registerServiceWorker';

const initState={
	flag: 'failed'
}

function reducer(state=initState,action){
	switch(action.type){
		case 'Login_Success':
			return {...state, flag:'succeed'};
		case 'Login_Failed':
			return {...state, flag:'failed'};
		default: return initState;
	}
}
const store= createStore(reducer,compose(applyMiddleware(thunk),window.devToolsExtension?window.devToolsExtension():()=>{}));
store.dispatch({type:'Login_Success'});
console.log(store.getState());
ReactDOM.render(
	<Provider store={store}>
	<App />
	</Provider>, document.getElementById('root'));
registerServiceWorker();
