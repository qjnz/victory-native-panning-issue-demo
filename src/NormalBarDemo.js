import React from 'react'
import { VictoryBar, VictoryChart, VictoryTheme, VictoryZoomContainer } from 'victory-native'

const data = [
	{ month: 1, earnings: 13000 },
	{ month: 2, earnings: 16500 },
	{ month: 3, earnings: 14250 },
	{ month: 4, earnings: 19000 },
	{ month: 5, earnings: 18500 },
	{ month: 6, earnings: 17900 },
	{ month: 7, earnings: 20000 },
	{ month: 8, earnings: 16590 },
	{ month: 9, earnings: 18680 },
	{ month: 10, earnings: 16740 },
	{ month: 11, earnings: 21000 },
	{ month: 12, earnings: 19850 },
]

export function NormalBarDemo() {
	return (
		<VictoryChart
			width={350}
			theme={VictoryTheme.material}
			containerComponent={<VictoryZoomContainer allowZoom={false} zoomDimension="x" zoomDomain={{ x: [1, 6] }} />}
		>
			<VictoryBar
				data={data}
				x="month"
				y="earnings"
				barWidth={30}
				events={[
					{
						target: 'data',
						eventHandlers: {
							onPressIn: () => {
								return [
									{
										target: 'data',
										mutation: (props) => {
											console.log('onPressIn', props.style)

											return {
												style: { fill: 'blue' },
											}
										},
									},
								]
							},
							onPress: () => {
								return [
									{
										target: 'data',
										mutation: (props) => {
											console.log(`onPress`)
										},
									},
								]
							},
							onPressOut: () => {
								return [
									{
										target: 'data',
										mutation: (props) => {
											console.log(`onPressOut`)
										},
									},
								]
							},
						},
					},
				]}
			/>
		</VictoryChart>
	)
}
