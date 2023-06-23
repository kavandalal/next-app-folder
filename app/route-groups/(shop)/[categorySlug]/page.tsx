import { getCategories, getCategory } from '@/app/api/categories/getCategories';
import { SkeletonCard } from '@/ui/skeleton-card';

export default async function Page({ params }: { params: { categorySlug: string } }) {
	const allcategories = await getCategories();

	const category = await getCategory({ slug: params.categorySlug });
	return (
		<div className='space-y-4'>
			<h1 className='text-xl font-medium text-gray-400/80'>All {category.name}</h1>

			<div className='text-white'>
				<p>
					This page is inside <code>route-groups&gt;(shop)&gt;[categorySlug]&gt;page.tsx</code>
				</p>
				<p>Here the (shop) is a folder in which its layout is defined</p>
				<p>Here the [categorySlug] is a common folder between {allcategories.map((i) => i.name).join(',')}</p>
			</div>
		</div>
	);
}
