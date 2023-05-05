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
		// { name: 'Not Found', slug: '4' },
	];

	return (
		<div className='space-y-9'>
			<div className='text-white'>
				<TabGroup
					path='/loading'
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
				<p className='my-5'>This is the page to demonstrate Loading in Next 13 with app folder</p>
				<p className='my-5'>
					Only the first time you open the new data tab loading will come then it will check the cache{' '}
				</p>
				<>{children}</>
			</div>
		</div>
	);
}
