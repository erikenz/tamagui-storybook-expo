import type { Meta, StoryObj } from "@storybook/react"

import React from "react"
import { View } from "react-native"
// import {  Button } from "./MyButton"
import { Button } from "./Button"

const meta = {
	title: "ui/Button",
	component: Button,
	argTypes: {
		onPress: { action: "pressed the button" },
	},
	args: {
		text: "Hello world!!!",
		onPress: () => console.log("Button pressed"),
	},
} satisfies Meta<typeof Button>

export default meta

type Story = StoryObj<typeof meta>

export const Basic: Story = {}
