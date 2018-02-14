import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {Provider} from 'react-redux';
import thunk from 'redux-thunk';
import {createStore, applyMiddleware,compose} from'redux';
import reducer from'./redux/reducer'
import {BrowserRouter,Route,Redirect,Switch} from 'react-router-dom';
import registerServiceWorker from './registerServiceWorker';




const store= createStore(reducer,compose(applyMiddleware(thunk),window.devToolsExtension?window.devToolsExtension():()=>{}));
console.log(store.getState());
ReactDOM.render(
	<Provider store={store}>
	<App />
	</Provider>, document.getElementById('root'));
registerServiceWorker();
