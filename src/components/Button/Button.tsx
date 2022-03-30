const colorStyles = {
	primary: 'bg-black text-white hover:opacity-80',
	secondary: 'bg-white text-black hover:opacity-70',
	gradient: 'gradient border-transparent hover:opacity-80 text-black',
};

const sizeStyles = {
	sm: 'py-[12px] px-[20px]',
	md: 'py-[14px] px-[24px]',
	lg: 'py-[18px] px-[35px]',
};

const roundedStyles = {
	sm: 'rounded-sm',
	md: 'rounded',
	lg: 'rounded-lg',
	xl: 'rounded-xl',
	full: 'rounded-full',
};

export type ButtonProps = React.HTMLAttributes<HTMLButtonElement> & {
	color?: keyof typeof colorStyles;
	size?: keyof typeof sizeStyles;
	rounded?: keyof typeof roundedStyles;
	disabled?: boolean;
};

const Button: React.FC<ButtonProps> = ({
	children,
	size = 'lg',
	className = '',
	rounded = 'full',
	color = 'primary',
	disabled = false,
	...props
}) => {
	const customStyle = `${colorStyles[color]} ${sizeStyles[size]} ${roundedStyles[rounded]} ${className}`;

	return (
		<button
			data-testid='button'
			disabled={disabled}
			className={`border border-black disabled:opacity-80 disabled:cursor-not-allowed ${customStyle}`}
			{...props}
		>
			<span className='text-base font-bold'>{children}</span>
		</button>
	);
};

export default Button;
