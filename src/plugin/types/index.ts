/* eslint-disable no-unused-vars */
export type Entry<T> = {
	[K in keyof T]: [K, T[K]]
}[keyof T];


export interface Props {
	callback?: (settings: Props) => void;
	destroy?: boolean | undefined;
	delay?: number;
	pattern?: string[];
	target?: string;
	type?: string;
}
