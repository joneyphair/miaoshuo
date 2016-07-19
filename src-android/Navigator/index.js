import React,{ Component } from 'react';

import App from '../App';
const config = {

	'App':{
		component:App
	},

}

function NavigatorConstructor(route,navigator){

	const  Component = config[route.name].component;

	return <Component {...route.params} navigator={navigator} />

}

module.exports = NavigatorConstructor;




