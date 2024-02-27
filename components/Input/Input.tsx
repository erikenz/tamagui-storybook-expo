import { Input, SizableText, XStack } from "tamagui"

export type InputProps = {
	children?: React.ReactNode
}

export const CustomInput = ({ children }: InputProps) => {
	return (
		<XStack>
			<Input />
		</XStack>
	)
}
