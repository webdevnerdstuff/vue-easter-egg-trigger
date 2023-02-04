console.log('EasterEggTriggerCore.js loaded');

// ---------------------------------------- Globals //
const mouseEvents = [
	'click', // Works with multiple single clicks pattern
	'dblclick', // Only works with single double click pattern set
	'mouseup', // Works with multiple mouseup clicks pattern
	'mousedown', // Works with multiple mousedown clicks pattern
];

const EasterEggTriggerCore = {
	// ---------------------------------------- Defaults //
	pluginOptions: {
		callback: null,
		delay: 500,
		destroyBus: false,
		name: 'easter-egg',
		pattern: ['ArrowUp', 'ArrowUp', 'ArrowDown', 'ArrowDown', 'ArrowLeft', 'ArrowRight', 'ArrowLeft', 'ArrowRight', 'b', 'a'],
		target: 'div',
		type: 'keydown',
		withBus: true,
	},
	input: [],
	methodOptions: {},
	options: {},
	targets: {
		nodes: [],
		ids: [],
		classNames: [],
	},
	timeout: () => { },

	/*
	 ---------------------------------------- Init
	? Initializes the plugin
	*/
	init(globalOptions, methodOptions) {
		console.groupCollapsed('EasterEggTriggerCore', '------------------------------- Core Init');
		console.log({ globalOptions, methodOptions });

		// Merge user and global //
		this.pluginOptions = { ...this.pluginOptions, ...globalOptions, ...methodOptions };

		console.log(this.pluginOptions);
		this.layEggs();
	},

	/*
	 ---------------------------------------- Lay Eggs
	? Adds Eggs to Easter Eggs
	*/
	layEggs() {
		// easterEggsTriggerEggs.push(this.eggOptions);

		// this.callAddListener();

		this.hatched();
	},

	/*
	 ---------------------------------------- Hatch
	? Easter Egg Hatched
	*/
	hatched() {
		console.log('HATCHED');
		console.groupEnd('EasterEggTriggerCore');
	},
};

export default EasterEggTriggerCore;
