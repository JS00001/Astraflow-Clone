import Button from '../Button/Button';
import Section from '../Section/Section';

const Hero: React.FC = () => {
	return (
		<Section className='h-[90vh] flex items-center pb-[110px]'>
			<div className='grid lg:grid-cols-5'>
				<div className='col-span-3 flex flex-col gap-y-5'>
					<h1 className=' text-6xl font-bold tracking-tighter leading-tight mt-5'>
						We make your{' '}
						<span className=' text-indigo-400 border rounded-full px-4 border-black'>logo</span> and{' '}
						<span className=' text-cyan-400 border rounded-full px-4 border-black'>brand</span>{' '}
						stand out from the crowd.
					</h1>
					<p className='text-xl w-4/5'>
						We create compelling brands for startups, companies, and organizations. With German
						quality.
					</p>
					<Button color='secondary' className=' self-start'>
						Request a Logo
					</Button>
				</div>
				<div></div>
			</div>
		</Section>
	);
};

export default Hero;
