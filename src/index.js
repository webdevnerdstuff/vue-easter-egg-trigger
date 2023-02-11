import EasterEggComponent from './components/EasterEggComponent.vue';
import EasterEggTriggerCore from './plugin/index';

const globalOptions = {
	delay: 500,
};

const EasterEggTrigger = {
	install(Vue, options = {}) {
		if (Vue.prototype.$easterEgg || Vue.prototype.$easterEgg) {
			return;
		}

		// Set the Global options //
		globalOptions.delay = options.delay || globalOptions.delay;

		// Add Component //
		Vue.component(EasterEggComponent.name, EasterEggComponent);

		// Add Instance Methods //
		Vue.prototype.$easterEgg = function(methodOptions) {
			EasterEggTriggerCore.init(Vue, globalOptions, methodOptions);
		};

		Vue.prototype.$easterEggTrigger = function(methodOptions) {
			EasterEggTriggerCore.init(Vue, globalOptions, methodOptions);
		};
	},
};

// Automatic installation if Vue has been added to the global scope.
if (typeof window !== 'undefined' && window.Vue) {
	window.Vue.use(EasterEggTrigger);
}

export default EasterEggTrigger;
