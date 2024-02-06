import { withBackgrounds } from "@storybook/addon-ondevice-backgrounds"
import type { Preview } from "@storybook/react"
import React from "react"
import { View } from "react-native"
import { TamaguiProvider } from "tamagui"

const preview: Preview = {
	decorators: [
		withBackgrounds,
		(Story) => (
			<TamaguiProvider>
				<Story />
			</TamaguiProvider>
		),
	],
	parameters: {
		controls: {
			matchers: {
				color: /(background|color)$/i,
				date: /Date$/,
			},
		},
	},
}

export default preview
