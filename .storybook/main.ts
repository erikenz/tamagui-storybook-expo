import { StorybookConfig } from "@storybook/react-webpack5"
import { STORIES_PATHS } from "../constants"
const config: StorybookConfig = {
	stories: STORIES_PATHS,
	addons: [
		"@storybook/addon-links",
		"@storybook/addon-essentials",
		"@storybook/addon-react-native-web",
	],
	webpackFinal: async (config, { configType }) => {
		const { TamaguiPlugin } = require("tamagui-loader")

		config?.plugins?.push(
			new TamaguiPlugin({
				config: "../tamagui.config.ts",
				components: ["tamagui"],
			})
		)

		return config
	},
	typescript: {
		reactDocgen: "react-docgen",
	},
	framework: {
		name: "@storybook/react-webpack5",
		options: {},
	},
	env: (config) => ({
		...config,
		TAMAGUI_TARGET: "web",
	}),
	docs: {
		autodocs: true,
	},
}

export default config
