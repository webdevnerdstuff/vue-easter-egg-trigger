import '@/libraries/fontawesome';
import PlaygroundApp from './PlaygroundApp.vue';
import { createApp } from 'vue';
import { createPinia } from 'pinia';
import { registerPlugins } from '../../plugins';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import { createVEasterEggTrigger } from '../../plugin/index';


const app = createApp(PlaygroundApp);

app.use(createVEasterEggTrigger({
	// callback: () => {
	// 	console.log('global callback');
	// }
	// delay: 5000,
	// pattern: ['ArrowUp', 'ArrowUp', 'ArrowUp', 'ArrowUp'],
	// type: 'dblclick'
}));
app.use(createPinia());
app.component('font-awesome-icon', FontAwesomeIcon);

app.component('FaIcon', FontAwesomeIcon);

registerPlugins(app);

app.mount('#app');
