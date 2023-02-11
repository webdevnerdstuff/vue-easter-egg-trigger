import Vue from 'vue';
import App from './App.vue';
import './assets/style.css';
import EasterEggTrigger from './index';

Vue.use(EasterEggTrigger);

Vue.config.productionTip = false;

new Vue({
	name: 'App',
	render: (h) => h(App),
}).$mount('#app');
