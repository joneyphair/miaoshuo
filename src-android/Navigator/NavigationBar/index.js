import React, { Component , PropTypes} from 'react';
import { connect } from 'react-redux';
import {bindActionCreators} from 'redux';


import {
	StyleSheet,
	Text,
	View,
	TextInput,
	ScrollView,
	ListView,
	Image,
	TouchableOpacity,
	TouchableHighlight,
	RefreshControl,
	LayoutAnimation,
	RecyclerViewBackedScrollView,
	ActivityIndicatorIOS,
	StatusBar,
	Dimensions,
} from 'react-native';

import Icon from 'react-native-vector-icons/Ionicons';

const { height, width } = Dimensions.get('window');

export default class NavigatorBar extends Component{

    constructor(props) {
        super(props);
    }

	_back(){

		const { navigator } = this.props;

		if(navigator) {
			navigator.pop();
		}

	}

    render() {

		return (

			<View style={Styles.container}>
				<View style={Styles.tools}>
					<Icon name="ios-return-left" style={Styles.toolsIcon}  onPress={this._back.bind(this)} />
					<Text style={Styles.toolsTitle}>评论列表</Text>
					<Text style={Styles.toolsIcon}></Text>
				</View>
			</View>
		);
	}

}


const Styles = StyleSheet.create({

	container: {
		flex:1,
		backgroundColor:'#fff'
	},

	tools:{
		height:40,
		backgroundColor:'rgba(255,255,255,.2)',
		flexDirection:'row',
		marginTop:25,
		paddingLeft:10,
		paddingRight:10,
	},
	toolsIcon:{
		width:50,
		fontSize:30,
		textAlign:'center'
	}
});

