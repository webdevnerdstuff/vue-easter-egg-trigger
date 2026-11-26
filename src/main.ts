import '@/libraries/fontawesome';
import { createVCodeBlock } from '@wdns/vue-code-block';
import { createPinia } from 'pinia';
import { createApp } from 'vue';
import App from './App.vue';
import { createVEasterEggTrigger } from './plugin';
import { registerPlugins } from './plugins';


const app = createApp(App);

app.use(createVEasterEggTrigger());
app.use(createVCodeBlock({
	codeBlockRadius: '10px',
}));
app.use(createPinia());

registerPlugins(app);

app.mount('#app');
