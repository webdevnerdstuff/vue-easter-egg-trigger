import { findIndex, includes, isEqual, uniq } from 'lodash';

// ---------------------------------------- Globals //
/*
	* mouseEvents
	? 'click' 		works with multiple single clicks pattern
	? 'dblclick' 	only works with single double click pattern set
	? 'mouseup' 	works with multiple mouseup clicks pattern
	? 'mousedown' works with multiple mousedown clicks pattern
*/
const mouseEvents = [
	'click',
	'dblclick',
	'mouseup',
	'mousedown',
];
let easterEggsTriggerEggs = [];
let EasterEggTriggerVueObj = null;
let $this = null;

const EasterEggTriggerCore = {
	defaultOptions: {
		callback: null,
		destroyBus: true,
		name: 'easter-egg',
		pattern: ['ArrowUp', 'ArrowUp', 'ArrowDown', 'ArrowDown', 'ArrowLeft', 'ArrowRight', 'ArrowLeft', 'ArrowRight', 'b', 'a'],
		target: 'div',
		triggered: null,
		type: 'keydown',
		withBus: false,
	},
	pluginOptions: {},
	input: [],
	methodOptions: {},
	options: {},
	targets: {
		classNames: [],
		ids: [],
		nodes: [],
	},
	timeout: () => { },

	/* ---------------------------------------- Init
	? Initializes the plugin
	*/
	init(Vue, globalOptions, methodOptions) {
		EasterEggTriggerVueObj = Vue;

		// Merge user and global //
		this.pluginOptions = { ...this.defaultOptions };
		this.pluginOptions = { ...this.pluginOptions, ...methodOptions, ...globalOptions };
		$this = this;

		this.layEggs();
	},

	/* ---------------------------------------- Lay Eggs
	? Adds Eggs to Easter Eggs
	*/
	layEggs() {
		easterEggsTriggerEggs.push(this.pluginOptions);

		this.collectEggs();
	},

	/* ---------------------------------------- Collect Eggs
	? Add eggs to global easterEggsTriggerEggs array
	*/
	// Loop through eggs and call add event listener //
	collectEggs() {
		Object.values(easterEggsTriggerEggs).forEach((egg) => {
			const newEgg = egg;

			if (!newEgg.pattern) {
				newEgg.pattern = this.pluginOptions.pattern;
			}

			if (!newEgg.target) {
				newEgg.target = this.pluginOptions.target;
			}
		});

		this.addListener();
	},

	/* ---------------------------------------- Add Listener
	? Create and add event listener
	*/
	addListener() {
		document.body.addEventListener(this.pluginOptions.type, this.capturePattern, false);
	},

	/* ---------------------------------------- Capture Pattern
	? Capture the Keys or Click Pattern
	*/
	capturePattern(e) {
		let key = '';

		if ($this.timeout !== null) {
			clearTimeout($this.timeout);
		}

		// -------------------- Keyboard Events //
		if (e.key !== undefined) {
			key = e.key;
		}

		// -------------------- Mouse Events //
		if (includes(mouseEvents, e.type)) {
			const target = e.target;
			key = e.type;

			if (key === 'dblclick') {
				$this.input = [];
			}

			$this.targets.nodes.push(target.nodeName.toLowerCase());
			$this.targets.ids.push(target.id);
			$this.targets.classNames.push(target.classList.value);
		}

		$this.input.push(key);
		$this.checkPattern(e);

		return false;
	},

	/* ---------------------------------------- Check Pattern
	? Check the Keys or Click Pattern
	*/
	checkPattern(e) {
		// No eggs exist, so return false if eventlistener is triggered //
		if (easterEggsTriggerEggs.length === 0) {
			return false;
		}

		Object.values(easterEggsTriggerEggs).forEach((egg) => {
			if (isEqual(egg.pattern, this.input)) {
				// Check Targets if Mouse Events //
				if (includes(mouseEvents, e.type)) {
					this.checkMouseTarget(egg);
					return false;
				}

				this.emitEvent(egg);
			}

			return false;
		});

		this.reset();
		return false;
	},

	/* ---------------------------------------- Check Target Element
	? Checks the mouse event target
	*/
	checkMouseTarget(egg) {
		// Get clean egg target //
		const node = egg.target;
		const id = egg.target.replace('#', '');
		const className = egg.target.replace('.', '');

		// Reduce targets to unique values //
		const nodes = uniq(this.targets.nodes);
		const ids = uniq(this.targets.ids);
		const classNames = uniq(this.targets.classNames);

		// Targets array should reduce down to one value, and match the clean egg target //
		const nodeTargetsMatch = nodes.length === 1 && nodes[0] === node;
		const idTargetsMatch = ids.length === 1 && ids[0] === id;
		const classTargetsMatch = classNames.length === 1 && includes(classNames[0], className);

		if (nodeTargetsMatch || idTargetsMatch || classTargetsMatch) {
			this.emitEvent(egg);
		}

		this.reset();
	},

	/* ---------------------------------------- Emit Event
	? Emit Bus Event and/or Callback/Triggered Events
	*/
	emitEvent(egg) {
		if (Object.keys(easterEggsTriggerEggs).length === 1) {
			document.body.removeEventListener(egg.type, this.capturePattern, false);
		}

		this.rebuild(egg);

		if (egg.callback) {
			egg.callback(egg);
		}

		if (egg.triggered) {
			egg.triggered(egg);
		}

		if (egg.withBus) {
			new EasterEggTriggerVueObj().$bus.$emit(`${egg.name}`, egg.name);

			// Auto destroy $bus.$on //
			if (egg.destroyBus) {
				new EasterEggTriggerVueObj().$bus.$off(`${egg.name}`);
			}
		}

		return false;
	},

	/* ---------------------------------------- Rebuild
	? Rebuild the easter egg
	*/
	rebuild(usedEgg) {
		const currentEggs = easterEggsTriggerEggs;
		easterEggsTriggerEggs = [];

		// Remove usedEgg from easterEggsTriggerEggs  //
		const idx = findIndex(currentEggs, (egg) => egg.name === usedEgg.name);
		currentEggs.splice(idx, 1);

		Object.values(currentEggs).forEach((egg) => {
			this.layEggs(egg);
		});

		easterEggsTriggerEggs = currentEggs;
	},

	/* ---------------------------------------- Reset
	? Reset the timeout and input pattern
	*/
	reset() {
		// Reset timeout and clear input keys //
		this.timeout = setTimeout(() => {
			clearTimeout(this.timeout);

			// Clean inputs and targets //
			this.input = [];
			this.targets = {
				classNames: [],
				ids: [],
				nodes: [],
			};
		}, this.pluginOptions.delay);
	},
};

export default EasterEggTriggerCore;