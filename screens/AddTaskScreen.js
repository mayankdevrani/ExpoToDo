import React, { Component } from 'react'
import { View, StatusBar } from 'react-native'
import { Form, Item, Input, Button, Text as NBText } from 'native-base'
import Header from '../components/Header'

export class AddTaskScreen extends Component {
	state = {
		text: ''
	}

	onChangeText = event => {
		this.setState({ task: event.nativeEvent.text })
	}

	onAddTask = () => {
		this.props.navigation.state.params.saveItem(this.state.task)
		this.props.navigation.goBack()
	}

	render() {
		return (
			<View>
				<View style={{ margin: 4 }}>
				< StatusBar
				barStyle = "dark-content"
				hidden = { false }
				/>
					<Form>
						<Item>
							<Input
								placeholder='Enter A New Task...'
								value={this.state.task}
								autoFocus
								clearButtonMode='always'
								autoCorrect={false}
								onChange={this.onChangeText}
								onSubmitEditing={this.onAddTask}
								returnKeyType={'done'}
							/>
						</Item>
					</Form>
				</View>
				<View style={{ marginTop: 20 }}>
					<Button
						style={{ backgroundColor: '#5067FF', margin: 25, justifyContent: 'center' }}
						onPress={this.onAddTask}
					>
						<NBText style={{ fontWeight: 'bold' }}>Add Task</NBText>
					</Button>
				</View>
			</View>
		)
	}
}

export default AddTaskScreen
