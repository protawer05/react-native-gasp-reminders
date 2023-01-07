import Home from '@/components/screens/home/Home'
import { StatusBar } from 'expo-status-bar'
import { SafeAreaProvider } from 'react-native-safe-area-context'

export default function App() {
	return (
		<>
			<SafeAreaProvider>
				<Home />
			</SafeAreaProvider>
			<StatusBar style='dark' />
		</>
	)
}
