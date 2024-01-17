import '@/libraries/fontawesome';
import App from './App.vue';
import { createApp } from 'vue';
import { createPinia } from 'pinia';
import { registerPlugins } from './plugins';
import { createVEasterEggTrigger } from './plugin';
import { createVCodeBlock } from '@wdns/vue-code-block';


const app = createApp(App);

app.use(createVEasterEggTrigger());
app.use(createVCodeBlock({
	codeBlockRadius: '10px',
}));
app.use(createPinia());

registerPlugins(app);

app.mount('#app');
