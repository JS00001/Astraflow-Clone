import Navbar from '@/components/Navbar/Navbar';
import Hero from '@/components/Hero/Hero';
import Benefits from '@/components/Benefits/Benefits';
import Pricing from '@/components/Pricing/Pricing';

export default function Home() {
	return (
		<div>
			<Navbar />
			<Hero />
			<Benefits />
			<Pricing />
		</div>
	);
}
