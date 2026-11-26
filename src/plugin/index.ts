import type { Props } from './types';
import type { App } from 'vue';
import VEasterEggTrigger from './VEasterEggTrigger.vue';


export const globalOptions = Symbol();

export function createVEasterEggTrigger(options: Props = {}) {
	return (app: App) => {
		app.provide(globalOptions, options);

		app.component('EasterEggTrigger', VEasterEggTrigger);
		app.component('VEasterEggTrigger', VEasterEggTrigger);
	};
}

export default VEasterEggTrigger;

const EasterEggTrigger = VEasterEggTrigger;

export {
	EasterEggTrigger,
	VEasterEggTrigger,
};
