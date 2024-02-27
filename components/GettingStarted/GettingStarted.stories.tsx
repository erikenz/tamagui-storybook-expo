import type { Meta, StoryObj } from "@storybook/react"
import { GettingStarted } from "./GettingStarted"

const meta = {
	title: "GettingStarted",
	component: GettingStarted,
	args: {},
	argTypes: {},
} satisfies Meta<typeof GettingStarted>

export default meta

type Story = StoryObj<typeof meta>

export const Basic: Story = {}
