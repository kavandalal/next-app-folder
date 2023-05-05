'use client';

import React, { useState } from 'react';

type Props = {};

export default function ErrorButton({}: Props) {
	const [clicked, setClicked] = useState(false);

	if (clicked) {
		throw new Error('----⚠☠☠☠⚠----');
	}

	return (
		<button
			className='rounded border-2 p-2 my-3'
			onClick={() => {
				setClicked(true);
			}}>
			Trigger Error
		</button>
	);
}
