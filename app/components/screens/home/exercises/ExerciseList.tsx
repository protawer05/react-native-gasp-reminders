import { View, Text } from 'react-native'
import React from 'react'
import { exercises } from './exercises.data'

const ExerciseList = () => {
	return (
		<View className='mt-8 ml-5'>
			{exercises.map(name => (
				<Text
					key={name}
					className='text-lg text-white opacity-40 mb-2.5 capitalize'
				>
					- {name}
				</Text>
			))}
		</View>
	)
}

export default ExerciseList
