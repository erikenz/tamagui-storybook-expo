import {
	Anchor,
	H1,
	H2,
	H3,
	H4,
	Paragraph,
	SizableText,
	Stack,
	YStack,
} from "tamagui"

export type GettingStartedProps = {
	children?: React.ReactNode
}

export const GettingStarted = ({ children }: GettingStartedProps) => {
	return (
		<YStack gap="$4">
			<H1>Storybook template for Tamagui using Expo</H1>
			<H2>Get started</H2>
			<H3>Components</H3>
			<H4>Generate component</H4>
			<Paragraph>
				<code>bun gen</code>
			</Paragraph>
			<H2>Resources</H2>
			<Paragraph>
				<Anchor
					href="https://storybook.js.org/tutorials/intro-to-storybook/react-native/en/get-started/"
					target="_blank">
					Getting Started with Storybook
				</Anchor>
			</Paragraph>
			<Paragraph>
				<Anchor href="https://tamagui.org/" target="_blank">
					Tamagui
				</Anchor>
			</Paragraph>
			<Paragraph>
				<Anchor
					href="https://github.com/dohomi/tamagui-kitchen-sink"
					target="_blank">
					Tamagui Kitchen Sink
				</Anchor>
			</Paragraph>
		</YStack>
	)
}
