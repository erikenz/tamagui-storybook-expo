import { config as configV3 } from "@tamagui/config/v3"
import { createTamagui } from "tamagui"

const config = createTamagui({
	...configV3,
	onlyAllowShorthands: true,
})

export type Conf = typeof config

declare module "tamagui" {
	interface TamaguiCustomConfig extends Conf {}
}

export default config
