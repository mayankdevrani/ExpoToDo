import React from 'react'
import { Header as NBHeader, Body, Title } from 'native-base'

const Header = () => {
	return (
		<NBHeader style={{ backgroundColor: '#5859f2' }}>
			<Body style={{paddingTop:80}}>
				<Title style={{ color: '#ffffff', fontSize: 35, height: 100 }}>To Do List</Title>
			</Body>
		</NBHeader>
	)
}

export default Header
