import Image from 'next/image';
import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] });

export default function Home() {
	return (
		<div className=''>
			<span className='text-white/80'>this is in page.tsx</span>
		</div>
	);
}
