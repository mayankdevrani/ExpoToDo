import React from 'react'
import { StyleSheet } from 'react-native'
import { Icon, Fab } from 'native-base'

const FloatingInfoButton = ({ actionOnPress }) => (
	<Fab direction='up' style={styles.button} position='bottomLeft' onPress={actionOnPress}>
		<Icon name='ios-information' />
	</Fab>
)

const styles = StyleSheet.create({
	button: {
		backgroundColor: '#5859f2',
	}
})

export default FloatingInfoButton