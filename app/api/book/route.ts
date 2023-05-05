import type { Book } from './book';
import { NextResponse } from 'next/server';

const books: Book[] = [
	{
		id: '1',
		name: `Data Analytics Made Accessible`,
		description: `The chapters in this book are organized much like an introductory college course— in fact, many universities have adopted it as their textbook. It's an excellent introduction if you're just getting started in data analytics or wondering what data analytics is all about.`,
	},
	{
		id: '2',
		name: `Don't Make Me Think, Revisited: A Common Sense Approach to Web Usability`,
		description: `This book by Steve Krug was first published in 2000. After the 3rd Edition, the book "Don't Make Me Think, Revisited: A Common Sense Approach to Web Usability' contains new examples and a new chapter focusing on mobile usability.`,
	},
	{
		id: '3',
		name: `JavaScript: The Good Parts`,
		description:
			'It is designed in a way that anyone who is beginning to learn JavaScript can understand without any doubt. However, it also contains sections for those who are already seasoned Web developers but wish to learn more in the field.',
	},
];

export async function GET(request: Request) {
	const { searchParams } = new URL(request.url);
	const id = searchParams.get('id');
	const book = books.find((i) => i.id === String(id)) || null;

	const delay = searchParams.get('delay');
	if (delay) {
		await new Promise((resolve) => setTimeout(resolve, Number(delay)));
	}

	return NextResponse.json(book);
	// return new Response(JSON.stringify({ ok: true, book }), {
	// 	status: 200,
	// 	headers: {
	// 		'content-type': 'application/json',
	// 	},
	// });
}
