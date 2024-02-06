import type { Meta, StoryObj } from "@storybook/react"

import React from "react"
import { View } from "react-native"
import { MyButton as Button } from "./MyButton"
// import { Button } from "./Button"

const meta = {
	title: "ui/Button",
	component: Button,
	args: {
		text: "Hello world!",
	},
} satisfies Meta<typeof Button>

export default meta

type Story = StoryObj<typeof meta>

export const Basic: Story = {}
