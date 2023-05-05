import './globals.css';
import { Inter } from 'next/font/google';
import GlobalNavbar from '../ui/global-nav';
import { AddressBar } from '../ui/address-bar';
import { Metadata } from 'next';

export const metadata: Metadata = {
	title: {
		default: 'Next.js App Router',
		template: '%s | Next.js Dynamic',
	},
	description: 'Custom description written by Kavan',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
	return (
		<html lang='en' className='[color-scheme:dark]'>
			<body className='min-h-screen bg-slate-400 overflow-y-scroll pb-36'>
				<GlobalNavbar />
				<div className='lg:pl-72'>
					<div className='mx-auto max-w-4xl space-y-8 px-2 pt-20 lg:py-8 lg:px-8'>
						<div className='rounded-lg bg-vc-border-gradient p-px shadow-lg shadow-black/20'>
							<div className='rounded-lg bg-gray-800 p-3.5 lg:p-6 shadow-md'>
								<AddressBar />
							</div>
						</div>

						<div className='rounded-lg bg-vc-border-gradient p-px shadow-lg shadow-black/20'>
							<div className='rounded-lg bg-gray-800 p-3.5 lg:p-6'>{children}</div>
						</div>
						{/* <Byline className="fixed sm:hidden" /> */}
					</div>
				</div>
			</body>
		</html>
	);
}
