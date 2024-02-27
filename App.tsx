import { useFonts } from "expo-font"
import React, { useEffect } from "react"
import { useColorScheme } from "react-native"
import { TamaguiProvider } from "tamagui"
import StorybookUI from "./.ondevice"
import config from "./tamagui.config"

export default function App() {
	const [loaded, error] = useFonts({
		Inter: require("@tamagui/font-inter/otf/Inter-Medium.otf"),
		InterBold: require("@tamagui/font-inter/otf/Inter-Bold.otf"),
	})

	// Expo Router uses Error Boundaries to catch errors in the navigation tree.
	useEffect(() => {
		if (error) throw error
	}, [error])

	const scheme = useColorScheme()

	if (!loaded) {
		return null
	}

	return (
		<TamaguiProvider
			config={config}
			disableInjectCSS
			disableRootThemeClass
			defaultTheme={scheme === "dark" ? "dark" : "light"}>
			<StorybookUI />
		</TamaguiProvider>
	)
}
