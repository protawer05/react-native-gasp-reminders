import React, { FC } from 'react'
import Layout from '@/components/layout/Layout'
import ExerciseList from './exercises/ExerciseList'
import Logo from './Logo'
import ToggleReminders from './toggleReminders/ToggleReminders'

const Home: FC = () => {
	return (
		<Layout>
			<Logo />
			<ExerciseList />
			<ToggleReminders />
		</Layout>
	)
}

export default Home
