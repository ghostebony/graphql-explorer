import { writable } from 'svelte/store';
import { hashObject } from './utils';

export interface Data {
	current: string;
	cache: { schema: boolean; type: boolean };
	types: { [url: string]: Array<string> };
}

export interface RequestData {
	url: string;
	cache: Data['cache'];
}

function createOpenedDialogs() {
	const { subscribe, set, update } = writable<number[]>([]);

	return {
		subscribe,
		// eslint-disable-next-line @typescript-eslint/no-explicit-any
		open: (t: Record<string, any>) => {
			document.body.style.overflow = 'hidden';

			update((ts) => [hashObject(t), ...ts]);
		},
		// eslint-disable-next-line @typescript-eslint/no-explicit-any
		close: (t: Record<string, any>) => {
			update((ts) => {
				const index = ts.indexOf(hashObject(t));

				if (index > -1) {
					ts.splice(index, 1);
				}

				if (ts.length === 0) {
					document.body.style.overflow = '';
				}

				return ts;
			});
		},
		reset: () => set([])
	};
}

export const openedDialogs = createOpenedDialogs();

export const defaultValues: { data: Data } = {
	data: {
		current: '',
		cache: { schema: true, type: true },
		types: {}
	}
};

function createData() {
	const { subscribe, set, update } = writable<Data>(defaultValues.data);

	return {
		subscribe,
		set(value: Data) {
			for (const key of Object.keys(value)) {
				const e = value[key];

				localStorage.setItem(key, typeof e === 'string' ? e : JSON.stringify(e));
			}

			if (value.current && !(value.current in value.types)) {
				value.types[value.current] = [];

				localStorage.setItem('types', JSON.stringify(value.types));
			}

			set(value);
		},
		addType(type: string) {
			update((data) => {
				if (data.current) {
					const dataTypes = data.current in data.types ? data.types[data.current] : [];

					const newTypes = Array.from(new Set([type, ...dataTypes]));

					const types = { ...data.types, [data.current]: newTypes };

					localStorage.setItem('types', JSON.stringify(types));

					return { ...data, types };
				}

				return data;
			});
		}
	};
}

export const data = createData();
