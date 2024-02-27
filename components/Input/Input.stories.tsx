import type { Meta, StoryObj } from "@storybook/react"
import { Input } from "./Input"

const meta = {
	title: "ui/Input",
	component: Input,
	args: {},
	argTypes: {},
} satisfies Meta<typeof Input>

export default meta

type Story = StoryObj<typeof meta>

export const Basic: Story = {}
