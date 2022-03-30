import Image from 'next/image';
import Button from '../Button/Button';
import Section from '../Section/Section';

const NavItem: React.FC<React.HTMLAttributes<HTMLAnchorElement>> = ({ children, ...props }) => {
	return (
		<a className='text-black cursor-pointer hover:text-gray-700 font-medium' {...props}>
			{children}
		</a>
	);
};

const Navbar: React.FC = () => {
	return (
		<div className='py-6'>
			<Section>
				<div className='flex justify-between'>
					<div className='flex flex-row gap-x-10'>
						<Image src='/astraflow.svg' width={170} height={30.95} />
						<div className='hidden lg:flex flex-row items-center gap-x-10'>
							<NavItem>Our Work</NavItem>
							<NavItem>Pricing</NavItem>
							<NavItem>Resources</NavItem>
							<NavItem>Contact Us</NavItem>
						</div>
					</div>
					<div className='hidden lg:flex'>
						<Button color='secondary'>Request a Logo</Button>
					</div>
				</div>
			</Section>
		</div>
	);
};

export default Navbar;
