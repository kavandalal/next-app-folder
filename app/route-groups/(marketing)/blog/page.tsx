export default function Page() {
	return (
		<div className='space-y-4'>
			<h1 className='text-xl font-medium text-gray-400/80'>Blog</h1>
			<div className='text-white'>
				<p>
					This page is inside <code>route-groups&gt;(marketing)&gt;blog&gt;page.tsx</code>
				</p>
				<p>Here the (marketing) is a folder in which its layout is defined</p>
			</div>
		</div>
	);
}
