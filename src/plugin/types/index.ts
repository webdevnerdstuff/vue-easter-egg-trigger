export interface OptionSettings {
	callback?: void;
	delay?: (string | number);
	pattern?: string[];
	target?: string;
	type?: string;
}

export type Entry<T> = {
	[K in keyof T]: [K, T[K]]
}[keyof T];
