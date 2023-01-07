import { View, Text } from 'react-native'
import React, { FC, PropsWithChildren } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { useSafeAreaInsets } from 'react-native-safe-area-context'
import Constants from 'expo-constants'
const Layout: FC<PropsWithChildren<unknown>> = ({ children }) => {
	const { top } = useSafeAreaInsets()
	return (
		<SafeAreaView className='flex-1 bg-[#1D1C21]'>
			<View
				style={{
					padding: Constants.platform?.android ? top / 5 : top * 1.6,
				}}
				className='bg-[#1D1C21]'
			>
				{children}
			</View>
		</SafeAreaView>
	)
}

export default Layout
