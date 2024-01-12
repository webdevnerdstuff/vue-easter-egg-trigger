import { createApp } from 'vue';
import '@/style.css';
import App from '@/App.vue';
import EasterEggTrigger from '@/index';

const app = createApp(App);

app.use(EasterEggTrigger);
app.mount('#app');
