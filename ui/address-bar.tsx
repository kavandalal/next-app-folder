'use client';

import React from 'react';
import clsx from 'clsx';
import { usePathname } from 'next/navigation';

export const AddressBar = ({}: {}) => {
	const pathname = usePathname();

	return (
		<div>
			{pathname
				? pathname
						.split('/')
						.slice(1)
						.map((segment) => {
							return (
								<React.Fragment key={segment}>
									<span>
										<span
											key={segment}
											className='animate-[highlight_1s_ease-in-out_1] rounded-full px-1.5 py-0.5 text-gray-100'>
											{segment}
										</span>
									</span>

									<span className='text-gray-600'>/</span>
								</React.Fragment>
							);
						})
				: null}
		</div>
	);
};
