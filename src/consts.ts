// Place any global data in this file.
// You can import this data from anywhere in your site by using the `import` keyword.

export const SITE_TITLE = 'Kaizen';
export const SITE_DESCRIPTION_INDEX = 'Software engineer & Hiker';
export const SITE_DESCRIPTION_BLOG = 'Writing, musing, and all that jazz';
export const SITE_DESCRIPTION = 'Writing, musing, and all that jazz';

export function withBase(path: string) {
	const base = import.meta.env.BASE_URL.endsWith('/')
		? import.meta.env.BASE_URL
		: `${import.meta.env.BASE_URL}/`;
	return `${base}${path.replace(/^\/+/, '')}`;
}