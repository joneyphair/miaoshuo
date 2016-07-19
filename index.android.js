import React, { Component } from 'react';
import {Provider} from 'react-redux';


import {
  AppRegistry,
  StyleSheet,
  Text,
  ScrollView,
  View,
  Navigator,
  BackAndroid,
  ToastAndroid
} from 'react-native' ;

import NavigatorConstructor from './src-android/Navigator';

class MiaoShuo extends Component {

    constructor(props) {
		super(props);
		this.returnBack = 0;
    }

	_renderScene(route,navigator){

		this._navigator = navigator;
		if(route.component){
			var Component = route.component;
			return <Component navigator={navigator} {...route.params} />
		}

		return NavigatorConstructor(route,navigator);

	}

	_configureScene(route){

		let configureScene = 'FloatFromRight';
		if(route.configureScene){
			configureScene = route.configureScene;
		}
		return Navigator.SceneConfigs[configureScene];
	}

	componentWillMount(){

	}

	componentDidMount(){

		var _this = this;

		var navigator = this._navigator;

		BackAndroid.addEventListener('hardwareBackPress', function() {
			if (navigator && navigator.getCurrentRoutes().length > 1) {
				navigator.pop();
				return true;
			}

			if(_this.returnBack>=1){
				return false;
			}
			ToastAndroid.show('再点击一次退出应用', ToastAndroid.SHORT);
			++_this.returnBack;
			return true;
		});
	}

	componentWillUnmount() {
		BackAndroid.removeEventListener('hardwareBackPress');
	}

	render() {

		return (
				<Navigator
				initialRoute={{ name: 'App'}}
				configureScene={this._configureScene.bind(this)}
				renderScene={this._renderScene.bind(this)} />
		);
	};

};

AppRegistry.registerComponent('miaoshuo', () => MiaoShuo);
