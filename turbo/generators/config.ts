import type { PlopTypes } from "@turbo/gen"

// Learn more about Turborepo Generators at https://turbo.build/repo/docs/core-concepts/monorepos/code-generation
const COMPONENTS_PATH = "components"

export default function generator(plop: PlopTypes.NodePlopAPI): void {
	// A simple generator to add a new React component to the internal UI library
	plop.setGenerator("component", {
		description: "Adds a new react component",
		prompts: [
			{
				type: "input",
				name: "name",
				message: "What is the name of the component?",
				validate: (input) => {
					if (!input) {
						return "Component name is required"
					}
					return true
				},
			},
			{
				type: "input",
				name: "category",
				message: "What should be the the category of the component?",
			},
			{
				type: "input",
				name: "path",
				message:
					"What should be the path of the component? (empty is default path)",
			},
		],
		actions: (data) => {
			if (data && data.path !== "") {
				data.path = `/${data.path}`
			}
			if (data && data.category !== "") {
				data.category = `${data.category}/`
			}
			return [
				{
					type: "add",
					path: `${COMPONENTS_PATH}{{path}}/{{pascalCase name}}/{{pascalCase name}}.tsx`,
					templateFile: "templates/component.hbs",
				},
				{
					type: "add",
					path: `${COMPONENTS_PATH}{{path}}/{{pascalCase name}}/{{pascalCase name}}.stories.tsx`,
					templateFile: "templates/story.hbs",
				},
			]
		},
	})
}
