import React, { FC } from "react";
import cn from "classnames";

interface Props extends Omit<React.DetailedHTMLProps<React.ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>, "type"> {
	title: string;
	type: "primary" | "secondary";
	className?: string;
	disabled?: boolean;
	onClick: (event: React.MouseEvent<HTMLButtonElement>) => void;
}

const Button: FC<Props> = ({ title, type, className, disabled, onClick, ...props }) => {
	return (
		<button className={cn(type, className)} disabled={disabled} onClick={onClick} {...props}>
			{title}
		</button>
	);
};

export default Button;
