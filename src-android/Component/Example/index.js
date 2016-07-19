import React, { Component , PropTypes} from 'react';

import Icon from 'react-native-vector-icons/MaterialIcons';
import ActionButton from 'react-native-action-button';

import {
	StyleSheet,
	Text,
	View,
	TextInput,
	ScrollView,
	ListView,
	Image,
	TouchableOpacity,
	RefreshControl,
	LayoutAnimation,
	RecyclerViewBackedScrollView,
	ActivityIndicatorIOS,
} from 'react-native';


import KrNavigatorBar from '../KrNavigatorBar';

export default class Example extends Component{

    constructor(props) {
        super(props);
    }


	_back(){

		let { navigator } = this.props;

		if(navigator) {
			setTimeout(function(){
				navigator.pop();
			},50);
		}

	}

    render() {

		return (
			<View style={Styles.container}>
				<KrNavigatorBar title={this.props.title} navigator={this.props.navigator} />

				<ScrollView>
				</ScrollView>
				<ActionButton buttonColor="rgba(231,76,60,1)">
					<ActionButton.Item buttonColor='#9b59b6' title="返回" onPress={this._back.bind(this)}>
						<Icon name="keyboard-backspace" style={Styles.actionButtonIcon} />
					</ActionButton.Item>
				</ActionButton>
			</View>
		);
	}

}

const Styles = StyleSheet.create({
	container: {
		flex:1,
		backgroundColor:'#fff'
	},
	actionButtonIcon: {
		fontSize: 20,
		height: 22,
		color: 'white',
  },
});
