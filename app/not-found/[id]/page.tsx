import { getBookData } from '@/app/api/book/getBook';
import { notFound } from 'next/navigation';
import React from 'react';

export default async function page({ params }: { params: { id: String } }) {
	const { id } = params;
	const bookData = await getBookData({ id });

	return (
		<div>
			<p className='font-bold my-3'>{bookData.name}</p>
			<p className='my-3'>{bookData.description}</p>
		</div>
	);
}
