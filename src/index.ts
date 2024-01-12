import { App, Plugin } from 'vue';
import { EasterEggTrigger } from '@/plugin';

const install = (app: App) => {
	app.component('EasterEggTrigger', EasterEggTrigger);
};

EasterEggTrigger.install = install;

export default EasterEggTrigger as unknown as Plugin;
