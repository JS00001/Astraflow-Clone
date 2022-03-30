import Image from 'next/image';
import Section from '../Section/Section';

const Benefits: React.FC = () => {
	return (
		<Section className='bg-slate-50 py-24'>
			<h2 className='text-4xl font-extrabold tracking-tight text-gray-400'>Benefits</h2>
			<h2 className='text-5xl font-bold tracking-tight mb-10'>We see a problem & we fix it.</h2>

			<div className='gap-4 lg:grid lg:grid-cols-5 mb-4'>
				<div className='mb-4 bg-white col-span-4 py-24 px-5 rounded-3xl md:pl-10 md:pr-36 lg:mb-0'>
					<h2 className='font-bold text-4xl tracking-tight mb-4'>
						<span className='line-through text-gray-500'>Just a logo</span> A stunning identity.
					</h2>
					<p className='mt-10 md:w-5/6 '>
						We design beautiful brands that speak to the hearts and minds of your consumers. A good
						brand isn't only beautiful, it tells a clear story and speaks to the unique value of
						your product to set your brand apart from the noise.
					</p>
				</div>

				<div className='grid grid-cols-2 gap-4 lg:grid-rows-2 lg:grid-cols-none'>
					<div className='bg-white rounded-3xl flex flex-col items-center justify-center py-4'>
						<p className=' text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-b from-purple-900 to-purple-400'>
							25+
						</p>
						<p>Happy Clients</p>
					</div>
					<div className='bg-white rounded-3xl flex items-center justify-center flex-col  py-4'>
						<p className=' text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-b from-blue-900 to-blue-400'>
							100%
						</p>
						<p>Passion</p>
					</div>
				</div>
			</div>

			<div className='grid md:grid-cols-2 gap-4'>
				<BenefitsCard
					image='/benefits-1.svg'
					title='Lightning-fast delivery'
					description='Get your logo design package back within two weeks of purchase. Word.'
				/>
				<BenefitsCard
					image='/benefits-2.svg'
					title='Multiple revisions'
					description='We’re not happy until you’re 100% satisfied.'
				/>
				<BenefitsCard
					image='/benefits-3.svg'
					title='Smooth Collaboration'
					description='Easily track the process using Slack or Discord.'
				/>
				<BenefitsCard
					image='/benefits-4.svg'
					title='Customer-first principle'
					description='We make sure your branding will appeal to the right kind of people!'
				/>
				<BenefitsCard
					image='/benefits-5.svg'
					title='Goal Oriented'
					description='We go beyond to exceed all your expectations.'
				/>
				<BenefitsCard
					image='/benefits-6.svg'
					title='Non-Profit Love'
					description='Registrered non-profits receive 50% off on all packages.'
				/>
			</div>

			<div className='grid md:grid-cols-3 gap-4 py-4'>
				<div className='bg-[#111528] rounded-3xl flex flex-col gap-y-3 items-center justify-center min-h-[416px]'>
					<h2 className='text-4xl font-bold tracking-tight w-1/2 text-center flex justify-center text-transparent bg-clip-text gradient'>
						Pixel-perfect
					</h2>
					<p className='text-lg w-3/5 text-center text-purple-300'>
						Your SVG and EPS logo files let you scale your logo to any size
					</p>
					<Image src='/waves.svg' width={591} height={162} />
				</div>

				<div className='relative rounded-3xl  min-h-[416px] bg-[#FBFBFB] pt-20 px-10 pb-10 md:col-span-2'>
					<h2 className='text-4xl font-bold tracking-tighter w-64 z-10 inline-block align-middle'>
						Full brand guideline
					</h2>
					<img
						className='z-0 absolute left-1/4 top-0 bottom-0 right-0 w-[670px]'
						src='https://uploads-ssl.webflow.com/615e1039e4188175442dcc09/61601853a694ce186df3c5dc_styleguide.gif'
						loading='lazy'
						alt='Logo branding Design Style Guide'
					></img>
				</div>
			</div>
		</Section>
	);
};

type BenefitsCardProps = {
	title: string;
	description: string;
	image: string;
};

const BenefitsCard: React.FC<BenefitsCardProps> = ({ title, description, image }) => {
	return (
		<div className='bg-white rounded-3xl flex flex-col items-center gap-y-5 justify-center p-10 min-h-[416px]'>
			<Image src={image} width={101} height={101} />
			<h2 className='text-4xl font-bold tracking-tight w-1/2 text-center flex justify-center'>
				{title}
			</h2>
			<p className='text-lg w-3/5 text-center'>{description}</p>
		</div>
	);
};

export default Benefits;
