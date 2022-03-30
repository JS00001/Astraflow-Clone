export type SectionProps = React.HTMLAttributes<HTMLDivElement>;

const Section: React.FC<SectionProps> = ({ className = '', children, ...props }) => {
	return (
		<div className={className} {...props}>
			<div className={`container mx-auto px-5 lg:px-10 xl:px-32`}>{children}</div>
		</div>
	);
};

export default Section;
