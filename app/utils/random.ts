import { exercises } from '@/components/screens/home/exercises/exercises.data'

export const randomExercise = () => {
	const randomIndex = Math.floor(Math.random() * exercises.length)
	const exercise = exercises[randomIndex]
	return exercise[0].toUpperCase() + exercise.slice(1)
}
