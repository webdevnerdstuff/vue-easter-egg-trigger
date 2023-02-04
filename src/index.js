import EasterEggComponent from './components/EasterEggComponent.vue';
import EasterEggTriggerCore from './plugin/index';

let defaultOptions = {
	callback: null,
	delay: 500,
	destroyBus: false,
	name: 'easter-egg',
	pattern: ['ArrowUp', 'ArrowUp', 'ArrowDown', 'ArrowDown', 'ArrowLeft', 'ArrowRight', 'ArrowLeft', 'ArrowRight', 'b', 'a'],
	pattern: false,
	target: 'div',
	type: 'keydown',
	withBus: true,
};

const EasterEggTrigger = {
	install(Vue, options = {}) {
		if (Vue.prototype.$easterEgg || Vue.prototype.$easterEgg) {
			return;
		}

		// Set the Global options //
		defaultOptions = { ...defaultOptions, ...options };


		Vue.component(EasterEggComponent.name, EasterEggComponent);

		// 1. Add global method or property
		Vue.globalEasterEggMethod = function() {
			// some logic ...
		};

		// 2. Add a global asset
		Vue.directive('easter-egg-trigger-directive', {
			bind(el, binding, vnode, oldVnode) {
				// some logic ...
			}
		});

		// 3. Inject some component options
		Vue.mixin({
			created: function() {
				// some logic ...
			}
		});

		// 4. add an instance method
		Vue.prototype.$easterEgg = function(methodOptions) {
			EasterEggTriggerCore.init(Vue, defaultOptions, methodOptions);
		};

		Vue.prototype.$easterEggTrigger = function(methodOptions) {
			EasterEggTriggerCore.init(Vue, defaultOptions, methodOptions);
		};
	},
};

// Automatic installation if Vue has been added to the global scope.
if (typeof window !== 'undefined' && window.Vue) {
	window.Vue.use(EasterEggTrigger);
}

export default EasterEggTrigger;
