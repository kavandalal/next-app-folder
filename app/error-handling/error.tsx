'use client';

import React from 'react';

export default function Error({ error, reset }: any) {
	return (
		<div className='text-white'>
			<p className='my-3 '>
				Error Message
				<span className='text-red-600'>{error?.message}</span>
			</p>
			<p className='my-3'>there was a error in the code</p>
			<p className='my-3'>to go to the previous working step</p>
			<p className='my-3'>
				<button onClick={() => reset()} className='rounded border-2 px-2 py-1 '>
					Reset
				</button>
			</p>
		</div>
	);
}
