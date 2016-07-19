import React, { Component , PropTypes} from 'react';
import { connect } from 'react-redux';
import {bindActionCreators} from 'redux';

import {
	StyleSheet,
	Text,
	View,
	ListView,
	Image,
	TouchableOpacity,
	TouchableNativeFeedback,
	LayoutAnimation,
	RecyclerViewBackedScrollView,
	Dimensions
} from 'react-native';

import Icon from 'react-native-vector-icons/MaterialIcons';
import Button from '../Button';

const { height, width } = Dimensions.get('window');

class KrNavigatorBar extends Component{

	static PropTypes = {
		title:React.PropTypes.string
	}

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
		<View style={Styles.tools}>

					<Button  onPress={this._back.bind(this)}>
						<Icon name="keyboard-backspace" style={Styles.toolsIcon}/>
					</Button>

					<Text style={Styles.toolsTitle}>{this.props.title}</Text>

					<Text style={Styles.toolsIcon}></Text>
				</View>
		);
	}

}


const Styles = StyleSheet.create({
	tools:{
		height:50,
		backgroundColor:'#4285f4',
		flexDirection:'row',
		paddingLeft:10,
		paddingRight:10,
		justifyContent:'flex-start',
		alignItems:'center',
		borderBottomWidth:1,
		borderColor:'#eee'
	},
	toolsIcon:{
		color:'#fff',
		width:50,
		fontSize:30,
		textAlign:'center',
	},
	toolsTitle:{
		flex:1,
		fontSize:18,
		color:'#fff',
		textAlign:'center'
	}
});


export default KrNavigatorBar;
