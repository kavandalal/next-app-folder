import { getBaseUrl } from '@/lib/getBaseUrl';
import type { Book } from './book';
import { notFound } from 'next/navigation';

export const getBookData = async ({ id, delay }: { id: String; delay?: Number }) => {
	const result = await fetch(`${getBaseUrl()}/api/book${id ? '?id=' + id : ''}${delay ? '&delay=' + delay : ''}`);

	if (!result.ok) {
		// Render the closest `error.js` Error Boundary
		throw new Error('Something went wrong!');
	}

	const data = (await result.json()) as Book;

	if (!data) {
		// Render the closest `not-found.js` Error Boundary
		notFound();
	}

	return data;
};
