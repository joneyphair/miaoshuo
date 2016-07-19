import React, { Component , PropTypes} from 'react';

import {
	StyleSheet,
	Text,
	View,
	TouchableOpacity,
	LayoutAnimation,
	RecyclerViewBackedScrollView,
	TouchableNativeFeedback
} from 'react-native';

import Example from '../Example';


class Button extends Component{

    constructor(props) {
        super(props);
    }

	componentWillUnmount(){

	}

	componentWillReceiveProps(nextProps) {
	}

	_handle(){
		const { navigator } = this.props;
			if(navigator) {
				navigator.push({
					name:this.props.navRoute
				});
			}
	}

	_toExample(){

		let {navigator,title} = this.props;

			title = title || 'Example';

			if(navigator) {
				navigator.push({
					name:'Example',
					params:{
						title:title
					}
				});
			}
	}

	render(){

		if(this.props.navRoute){
			return <TouchableOpacity {...this.props} onPress={this._handle.bind(this)} >
					{this.props.children}
			</TouchableOpacity>;
		}

		if(!this.props.onPress){

			return <TouchableOpacity {...this.props} onPress={this._toExample.bind(this)} >
					{this.props.children}
			</TouchableOpacity>;
		}

		return <TouchableOpacity {...this.props} >
				{this.props.children}
		</TouchableOpacity>;
	}

}

export default Button;
