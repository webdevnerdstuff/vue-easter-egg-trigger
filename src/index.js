import EasterEggComponent from './components/EasterEggComponent.vue';
import EasterEggTriggerCore from './plugin/index';

console.group('index.js');
console.log({ EasterEggTriggerCore });

let globalOptions = {};

const EasterEggTrigger = {
	install(Vue, options = {}) {
		if (Vue.prototype.$easterEgg || Vue.prototype.$easterEgg) {
			return;
		}

		// Set the Global options //
		globalOptions = options;

		Vue.component(EasterEggComponent.name, EasterEggComponent);

		// 1. Add global method or property
		Vue.globalEasterEggMethod = function() {
			// some logic ...
		};

		// 2. Add a global asset
		Vue.directive('easter-egg-trigger-directive', {
			bind(el, binding, vnode, oldVnode) {
				// some logic ...
			},
		});

		// 3. Inject some component options
		Vue.mixin({
			created() {
				// some logic ...
			},
		});

		// 4. add an instance method
		Vue.prototype.$easterEgg = function(methodOptions) {
			console.log('$easterEgg instance method loaded');
			EasterEggTriggerCore.init(globalOptions, methodOptions);
		};

		Vue.prototype.$easterEggTrigger = function(methodOptions) {
			EasterEggTriggerCore.init(globalOptions, methodOptions);
		};
	},
};

// Automatic installation if Vue has been added to the global scope.
if (typeof window !== 'undefined' && window.Vue) {
	window.Vue.use(EasterEggTrigger);
}

export default EasterEggTrigger;

console.groupEnd('index.js');
