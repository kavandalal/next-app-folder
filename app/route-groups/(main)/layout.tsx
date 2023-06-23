import { getCategories } from '@/app/api/categories/getCategories';
import { Boundary } from '@/ui/boundary';
import { TabGroup } from '@/ui/tab-group';
import React from 'react';

export default async function Layout({ children }: { children: React.ReactNode }) {
	const categories = await getCategories();

	return (
		<Boundary labels={['main layout']} color='orange' animateRerendering={false}>
			<div className='space-y-9 text-white'>
				<p>
					All the sub pages inside this are in the folder route-groups, but for each page if you want to assign
					different layout you can do that by making category wise folder names inside round brackets()
				</p>
				<div className='flex justify-between'>
					<TabGroup
						path='/route-groups'
						items={[
							{
								text: 'Home',
							},
							...categories.map((x) => ({
								text: x.name,
								slug: x.slug,
							})),
							{ text: 'Checkout', slug: 'checkout' },
							{ text: 'Blog', slug: 'blog' },
						]}
					/>

					{/* <div className="self-start">
            <ClickCounter />
          </div> */}
				</div>

				<div>{children}</div>
			</div>
		</Boundary>
	);
}
