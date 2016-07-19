import React,{ Component } from 'react';
import {
  StyleSheet,
  TabBarIOS,
  Text,
  ScrollView,
  View,
  Image,
StatusBar,
  TouchableOpacity
} from 'react-native' ;

import Icon from 'react-native-vector-icons/MaterialIcons';

import Button from './Component/Button';

import ScrollableTabView,{ScrollableTabBar} from 'react-native-scrollable-tab-view'
import HomePage from './Container/Home';
import ContactPage from './Container/Contact';
import MePage from './Container/Me';

export default class ArticleIndex extends Component {

    constructor(props) {
		super(props);
    }


	componentWillReceiveProps(){
		return false;
	}

	shouldComponentUpdate(nextProps,nextState){
		return true;
	}

  render() {

    return (

		<View style={Styles.container} >

			<ScrollableTabView
					  scrollWithoutAnimation ={true}
					   initialPage={0}
					   renderTabBar={() => <ScrollableTabBar tabStyle={Styles.tabStyle} textStyle={Styles.textStyle} tabsContainerStyle={Styles.tabsContainerStyle} style={{borderColor:'transparent',borderWidth:0}} />}
						 tabBarUnderlineColor="#fff"
					   tabBarBackgroundColor="#fff"
					   tabBarActiveTextColor="#4285f4"
					 tabBarInactiveTextColor ="#666"
					   tabBarPosition='top'>

					   <HomePage tabLabel="推荐" />
					   <ContactPage tabLabel="联系人" />
					   <MePage tabLabel="我的"/>

				</ScrollableTabView>
		</View>
				
    );
  };
};


var Styles = StyleSheet.create({
	container:{
		flex: 1,
	},
	textStyle:{
		marginTop:30,
		height:20,
		fontSize:14,
	},
	tabsContainerStyle:{

	},
	tabStyle:{
	},
});

