import React from 'react'
import { StyleSheet, View } from 'react-native'
import { StackedBarDemo, NormalBarDemo } from './src'

export default function App() {
	return (
		<View style={styles.container}>
			<NormalBarDemo />
			<StackedBarDemo />
		</View>
	)
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
		backgroundColor: '#f5fcff',
	},
})
