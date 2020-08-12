import React, { Component } from 'react';
import { View, Text, StatusBar } from 'react-native'


export class InfoScreen extends Component {
	render() {
		return (
			<View>
			<View style={{backgroundColor:'black'}}>
                <StatusBar barStyle='dark-content' hidden = { false } />
				<Text style={{ fontSize: 20, margin: 20, color: 'white', textAlign: 'center' }}>Welcome to 'To Do App'.{"\n"}We Thank you for using it!</Text>
			</View>
			<View>
				<Text style={{ fontSize: 20, margin: 20, color: 'black', textAlign: 'center', marginTop: 50 }}>This App was created by Mynk, it started as Basic Developement and Learning Project, and further became tool for Proper Managed Lifestyle.{"\n"}</Text>
			</View>
			<View style={{width:'80%',backgroundColor:'lightgrey',margin:'10%'}}>
				<Text style={{ fontSize: 30, margin: 20, color: '#5859f2', textAlign: 'center', margin: 50, letterSpacing:2, fontStyle: 'italic' }}>Never Miss Any Task!</Text>
			</View>
			</View>
		)
	}
}
 
export default InfoScreen;