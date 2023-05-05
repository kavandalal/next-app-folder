import React from 'react';
import ErrorButton from './ErrorButton';

type Props = {};

export default function Page({}: Props) {
	return (
		<div className='text-white'>
			<p className='my-3'>Error Handling Example</p>
			<ErrorButton />
		</div>
	);
}
