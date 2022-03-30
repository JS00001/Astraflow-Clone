import Button from '../Button/Button';
import Section from '../Section/Section';

const Pricing: React.FC = () => {
	return (
		<Section className='bg-slate-50 py-24'>
			<div className='flex flex-col items-center mb-10'>
				<h2 className='text-5xl font-bold tracking-tight mb-4 text-center max-w-2xl'>
					Choose the right package that works for your business
				</h2>
				<p className='text-lg'>We offer 3 different types of packages.</p>
			</div>

			<div className='grid md:grid-cols-2 lg:grid-cols-3 gap-5'>
				<PricingCard
					title='Bronze'
					price='$495'
					description='Bestu suited for small businesses, start-ups and entrepreneurs who need an identity.'
					included={[
						'Client Brainstorm',
						'2 Rounds of Revisions',
						'1 Initial Logo Design',
						'Files Provided: JPEG, PNG, SVG, etc.',
						'Full brand guidelines',
					]}
					theme='light'
				/>

				<PricingCard
					title='Silver'
					price='$895'
					description='Medium sized businesses who require a quality custom brand that will take them to the next level.'
					included={[
						'Client Brainstorm',
						'3 Rounds of Revisions',
						'2 Initial Logo Sketch Designs',
						'Files Provided: JPEG, PNG, SVG, etc.',
						'Full brand guidelines + Mockups',
					]}
					theme='dark'
				/>

				<PricingCard
					title='Gold'
					price='$1295'
					description='Large and Medium businesses looking for authenticity in their brand.'
					included={[
						'Client Brainstorm',
						'4 Rounds of Revisions',
						'3 Initial Logo Sketch Designs',
						'Files Provided: JPEG, PNG, SVG, etc.',
						'Full brand guidelines + Mockups',
						'Logo Guideline',
					]}
					theme='light'
				/>
			</div>
		</Section>
	);
};

type PricingCardProps = {
	title: string;
	price: string;
	description: string;
	included: string[];
	theme: 'dark' | 'light';
};

const PricingCard: React.FC<PricingCardProps> = ({
	title,
	price,
	description,
	included,
	theme,
}) => {
	const colorStyle = {
		light: 'bg-white',
		dark: 'bg-[#111528] text-white',
	};

	const buttonColor = theme == 'dark' ? 'gradient' : 'primary';
	const titleStyle = theme == 'dark' && 'bg-clip-text text-transparent gradient';

	return (
		<div
			className={`border-gray-200 border rounded-3xl p-10 flex flex-col gap-y-2 ${colorStyle[theme]}`}
		>
			<h3 className='text-xl font-black tracking-tighter'>{title}</h3>
			<h2 className={`text-4xl font-black ${titleStyle}`}>{price}</h2>
			<p className='text-base'>{description}</p>

			<Button rounded='lg' size='md' className='mt-5' color={buttonColor}>
				Get Started
			</Button>

			<p className='mt-10 font-semibold'>What's Included:</p>
			{included.map((item, key) => (
				<p key={key}>{item}</p>
			))}

			<p className='mt-10 font-semibold'>1-2 Weeks Delivery</p>
		</div>
	);
};

export default Pricing;
