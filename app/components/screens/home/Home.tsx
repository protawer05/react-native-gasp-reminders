import { View, Text } from 'react-native'
import React, { FC } from 'react'
import Layout from '@/components/layout/Layout'
import { exercises } from './exercises/exercises.data'

const Home: FC = () => {
	return (
		<Layout>
			<View className='items-center'>
				<Text className='text-3xl font-semibold text-primary'>
					Gasp Reminders
				</Text>
			</View>

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

			<Text>Home</Text>
		</Layout>
	)
}

export default Home
