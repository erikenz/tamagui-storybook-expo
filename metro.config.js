const path = require("path")
const { getDefaultConfig } = require("expo/metro-config")
const { generate } = require("@storybook/react-native/scripts/generate")

const projectRoot = __dirname
// Uncomment if you are using a monorepo setup
// const workspaceRoot = path.resolve(__dirname, "../..")

/** @type {import('expo/metro-config').MetroConfig} */
const config = getDefaultConfig(__dirname, {
	isCSSEnabled: true,
})

// Add the additional `cjs` extension to the resolver
config.resolver.sourceExts.push("cjs")
// 2. Let Metro know where to resolve packages and in what order
config.resolver.nodeModulesPaths = [
	path.resolve(projectRoot, "node_modules"),
	// Uncomment if you are using a monorepo setup
	// path.resolve(workspaceRoot, "node_modules"),
]
// 3. Force Metro to resolve (sub)dependencies only from the `nodeModulesPaths`
config.resolver.disableHierarchicalLookup = false

generate({
	configPath: path.resolve(__dirname, "./.ondevice"),
	// useJs: true,
})

config.transformer = {
	...config.transformer,
	unstable_allowRequireContext: true,
}
config.transformer.minifierPath = require.resolve("metro-minify-terser")

config.resolver.sourceExts.push("mjs")

module.exports = config
