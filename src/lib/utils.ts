import type { Data } from './stores';

export const request = async (endpoint: string, data: { url: string; cache: Data['cache'] }) => {
	const response = await fetch(endpoint, {
		method: 'POST',
		body: JSON.stringify(data)
	});

	const { data: __type } = await response.json();

	return __type;
};

export const toTitleCase = (str: string) => str.charAt(0).toUpperCase() + str.slice(1);

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const hashObject = (obj: Record<string, any>) => {
	const str = JSON.stringify(obj);

	let h = 0;
	let i = str.length;
	while (i > 0) h = ((h << 5) - h + str.charCodeAt(--i)) | 0;
	return h;
};
