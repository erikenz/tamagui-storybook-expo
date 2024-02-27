import { StorybookConfig } from "@storybook/react-native"
import { STORIES_PATHS } from "../constants"
const main: StorybookConfig = {
	stories: STORIES_PATHS,
	addons: [
		"@storybook/addon-ondevice-controls",
		"@storybook/addon-ondevice-actions",
	],
}

export default main
