import type { Preview } from "@storybook/react"
import React from "react"
import { useColorScheme } from "react-native"
import { TamaguiProvider, Theme } from "tamagui"
import config from "../tamagui.config"

const preview: Preview = {
	parameters: {
		actions: { argTypesRegex: "^on[A-Z].*" },
		controls: {
			matchers: {
				color: /(background|color)$/i,
				date: /Date$/,
			},
		},
	},
	decorators: [
		(Story) => {
			const scheme = useColorScheme()
			return (
				<TamaguiProvider
					config={config}
					defaultTheme={scheme === "dark" ? "dark" : "light"}>
					<Story />
				</TamaguiProvider>
			)
		},
	],
}
export default preview
