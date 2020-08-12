import React from 'react'
import { createStackNavigator, createAppContainer } from 'react-navigation'
import HomeScreen from '../screens/HomeScreen'
import AddTaskScreen from '../screens/AddTaskScreen'
import InfoScreen from '../screens/InfoScreen'

const StackNav = createStackNavigator(
	{
		Home: {
			screen: HomeScreen
		},
		AddTask: {
			screen: AddTaskScreen
		},
		Info: {
			screen: InfoScreen
		}
	},
	{
		mode: 'modal'
	}
)

const RootNavigator = createAppContainer(StackNav)

export default RootNavigator
