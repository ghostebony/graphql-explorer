import { GraphQLClient } from 'graphql-request';
import fs from 'node:fs/promises';
import schemaQuery from './queries/schema';
import typeQuery from './queries/type';

export class GraphQL {
	private client: GraphQLClient;

	private cacheFolder: string;

	public constructor(baseUrl: string, headers?: HeadersInit) {
		this.client = new GraphQLClient(baseUrl, { headers });

		this.cacheFolder = `./cache/${baseUrl
			.replace(/(^\w+:|^)\/\//, '')
			.replace(/[?#].*$/, '')
			.replace(/\W/gi, '_')}`;

		fs.mkdir(this.cacheFolder, { recursive: true });
	}

	public schema = async (type: 'Query' | 'Mutation' | 'Subscription', useCache = true) => {
		const cache = this.cache(type);

		if (useCache) {
			const cached = await cache.get();

			if (cached) {
				return cached;
			}
		}

		return cache.set(await this.client.request<schemaQuery>(schemaQuery, { type }));
	};

	public type = async (name: string, useCache = true) => {
		const cache = this.cache(name);

		if (useCache) {
			const cached = await cache.get();

			if (cached) {
				return cached;
			}
		}

		return cache.set(await this.client.request<typeQuery>(typeQuery, { name }));
	};

	private cache(key: string) {
		const cacheFolder = this.cacheFolder;

		return {
			async set(value: schemaQuery | typeQuery) {
				fs.writeFile(`${cacheFolder}/${key}.json`, JSON.stringify(value));

				return value;
			},
			async get() {
				try {
					const buffer = await fs.readFile(`${cacheFolder}/${key}.json`);

					const str = buffer.toString();

					return JSON.parse(str) as schemaQuery | typeQuery;
				} catch {
					return;
				}
			}
		};
	}
}
