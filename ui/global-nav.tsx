'use client';

import Link from 'next/link';
import { useSelectedLayoutSegment } from 'next/navigation';
import React, { useState } from 'react';
import clsx from 'clsx';
import { demos, type Item } from '../lib/demo-data';

function GlobalNavbar() {
	const [isOpen, setIsOpen] = useState(false);
	const close = () => setIsOpen(false);

	return (
		<div className='fixed top-0 z-10 flex w-full flex-col bg-gray-800 lg:bottom-0 lg:z-auto lg:w-72 lg:border-b-0 lg:border-r lg:border-gray-800'>
			<div className='flex h-14 items-center py-4 px-4 lg:h-auto'>
				<Link href='/' className='group flex w-full items-center gap-x-2.5' onClick={close}>
					<div className='h-7 w-7  group-hover:border-white/50 text-white'>
						Logo
					</div>
				</Link>
			</div>
			<button
				type='button'
				className='group absolute right-0 top-0 flex h-14 items-center gap-x-2 px-4 lg:hidden'
				onClick={() => setIsOpen(!isOpen)}>
				<div className='font-medium text-gray-100 group-hover:text-gray-400'>Menu</div>
				{isOpen && <>x</>}
			</button>
		
			<div
				className={clsx('overflow-y-auto lg:static lg:block', {
					'fixed inset-x-0 bottom-0 top-14 mt-px bg-black': isOpen,
					hidden: !isOpen,
				})}
			>
				<nav className='space-y-6 px-2 py-5 bg-gray-800'>
					{demos.map((section) => {
						return (
							<div key={section.name}>
								<div className='mb-2 px-3 font-semibold uppercase tracking-wider text-pink-600 text-lg'>
									<div>{section.name}</div>
								</div>

								<div className='space-y-1 '>
									{section.items.map((item) => (
										<GlobalNavItem key={item.slug} item={item} close={close} />
									))}
								</div>
							</div>
						);
					})}
				</nav>
			</div>
				{/* <Byline className="absolute hidden sm:block" /> */}
		</div>
	);
}

interface NavItemProp {
	item: Item;
	close: () => false | void;
}

function GlobalNavItem({ item, close }: NavItemProp) {
	const segment = useSelectedLayoutSegment();
	const isActive = item.slug === segment;

	return (
		<Link
			onClick={close}
			href={`/${item.slug}`}
			className={clsx('block rounded-md px-3 py-2 text-sm font-medium hover:text-pink-400', {
				'text-gray-400 hover:bg-gray-800': !isActive,
				'text-white bg-black/30 ': isActive,
			})}>
			{item.name}
		</Link>
	);
}

export default GlobalNavbar;
