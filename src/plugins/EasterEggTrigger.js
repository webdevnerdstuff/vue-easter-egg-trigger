import EasterEggTriggerCore from './EasterEggTriggerCore';

const EasterEggTrigger = {
	install(Vue, options = {}) {
		if (Vue.prototype.$easterEgg || Vue.prototype.$easterEgg) {
			return;
		}

		// Set the Global options //
		this.options = { ...this.options, ...options };

		// Add an instance methods //
		Vue.prototype.$easterEgg = function(eggOptions) {
			EasterEggTriggerCore.init(EasterEggTrigger.options, eggOptions);
		};

		Vue.prototype.$easterEggTrigger = function(eggOptions) {
			EasterEggTriggerCore.init(EasterEggTrigger.options, eggOptions);
		};
	},
	options: {
		delay: 500,
		keys: ['ArrowUp', 'ArrowUp', 'ArrowDown', 'ArrowDown', 'ArrowLeft', 'ArrowRight', 'ArrowLeft', 'ArrowRight', 'b', 'a'],
		mouseEvents: [
			'click', // Works with multiple single clicks pattern
			'dblclick', // Only works with single double click pattern set
			'mouseup', // Works with multiple mouseup clicks pattern
			'mousedown', // Works with multiple mousedown clicks pattern
		],
		pattern: [38, 38, 40, 40, 37, 39, 37, 39, 66, 65],
		type: 'keydown',
	},
};

export default EasterEggTrigger;
