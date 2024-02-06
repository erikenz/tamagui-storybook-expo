import { ConfigContext, ExpoConfig } from "@expo/config"

export default ({ config }: ConfigContext): ExpoConfig => ({
	...config,
	owner: "erikenz",
	experiments: {
		tsconfigPaths: true,
		typedRoutes: true,
	},
	platforms: ["ios", "android"],
	name: "Tamagui Storybook",
	slug: "tamagui-storybook",
	runtimeVersion: {
		policy: "sdkVersion",
	},
})
