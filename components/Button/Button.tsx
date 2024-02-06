import { Button as TButton } from "tamagui"

export type ButtonProps = {
	text: string
	onPress: () => void
}

export const Button = ({ text, onPress }: ButtonProps) => {
	return <TButton onPress={onPress}>{text}</TButton>
}

export type MyButtonProps = {
	onPress: () => void
	text: string
}
