export default function NotFound() {
	const codeStyle = 'underline underline-offset-2 mx-2';
	return (
		<div>
			<p className='text-lg'>
				404 Not Found (IN
				<code className={codeStyle}>@/app/not-found/not-found.tsx</code>)
			</p>
			<ul className='p-5 m-auto list-disc'>
				<li>
					<p>Here the notFound() in next/navigation is called from the common getData() function.</p>
				</li>
				<li>
					<p>
						and <code className={codeStyle}>not-found.tsx</code>
						is in
						<code className={codeStyle}>@/app/not-found/[id]/not-found.tsx</code>
						which is the closest to the point of failure{' '}
					</p>
				</li>
				<li>
					If the <code className={codeStyle}>not-found.tsx</code>
					was not found in
					<code className={codeStyle}>@/app/not-found/[id]</code>
					then it would check
					<code className={codeStyle}>@/app/not-found/</code>
					and so on until it finds the
					<code className={codeStyle}>not-found.tsx</code>
					file
				</li>
			</ul>
		</div>
	);
}
