import { GraphQL } from '$lib/graphql';
import type { RequestData } from '$lib/stores';
import { json } from '@sveltejs/kit';
import type { RequestHandler } from './$types';

export const POST: RequestHandler = async ({ params: { type }, request }) => {
	const data: RequestData = await request.json();

	const { url, cache } = data;

	const graphql = new GraphQL(url);

	const _type = await graphql.type(type, cache.type);

	return json({ data: _type });
};
