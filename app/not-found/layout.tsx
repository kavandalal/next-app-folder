import { Boundary } from '@/ui/boundary';
import { TabGroup } from '@/ui/tab-group';
import React from 'react';

type Props = {};

export const metadata = {
	title: 'Loading Page',
};

export default async function Layout({ children }: { children: React.ReactNode }) {
	const tabs = [
		{ name: '1', slug: '1' },
		{ name: '2', slug: '2' },
		{ name: '3', slug: '3' },
		{ name: 'Not Found', slug: '4' },
	];

	return (
		<div className='space-y-9'>
			<div className='text-white'>
				<TabGroup
					path='/not-found'
					items={[
						{
							text: 'Home',
						},
						...tabs.map((x) => ({
							text: x.name,
							slug: x.slug,
						})),
					]}
				/>
				<div className='py-6'>{children}</div>
			</div>
		</div>
	);
}
