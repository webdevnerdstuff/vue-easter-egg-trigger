import Vue from 'vue';
import _ from '@assets/lodash.custom';

let easterEggs = [];

const EasterEggTrigger = {
	timeout: null,
	input: [],
	targets: {
		nodes: [],
		ids: [],
		classNames: [],
	},

	// Options //
	defaultEggOptions: {
		callback: null,
		destroyBus: false,
		keys: false,
		name: 'easter-egg',
		pattern: false,
		target: 'html',
		withBus: true,
	},
	eggOptions: {},
	pluginOptions: {},

	// Initiate Eggs //
	init(pluginOptions = {}, eggOptions = {}) {
		// Set Options //
		this.pluginOptions = pluginOptions;
		this.eggOptions = { ...this.defaultEggOptions, ...eggOptions };

		this.layEggs();
	},

	// Adds Eggs to Easter Eggs //
	layEggs() {
		easterEggs.push(this.eggOptions);

		this.callAddListener();
	},

	// Call the add listener //
	callAddListener() {
		Object.values(easterEggs).forEach((egg) => {
			const newEgg = egg;

			if (!newEgg.keys && !newEgg.pattern) {
				newEgg.keys = this.pluginOptions.keys;
				newEgg.pattern = this.pluginOptions.pattern;
			}
		});

		this.addListener();
	},

	// Create add event listener //
	addListener() {
		document.addEventListener(this.pluginOptions.type, this.capturePattern, false);
	},

	// Capture the Keys or Click Pattern //
	capturePattern(e) {
		let key = '';

		if (EasterEggTrigger.timeout !== null) {
			clearTimeout(EasterEggTrigger.timeout);
		}

		// -------------------- Keyboard Events //
		if (e.key !== undefined) {
			// String //
			key = e.key;
		}
		else if (e.keyCode !== undefined) {
			// Fallback Depreciated (Int) //
			key = e.keyCode;
		}

		// -------------------- Mouse Events //
		if (_.includes(EasterEggTrigger.pluginOptions.mouseEvents, e.type)) {
			key = e.type;

			EasterEggTrigger.targets.nodes.push(e.target.nodeName.toLowerCase());
			EasterEggTrigger.targets.ids.push(e.target.id);
			EasterEggTrigger.targets.classNames.push(e.target.classList.value);
		}

		EasterEggTrigger.input.push(key);
		EasterEggTrigger.checkPattern(e);
	},

	// Check the Keys or Click Pattern //
	checkPattern(e) {
		Object.values(easterEggs).forEach((egg) => {
			// Check Keyboard Events //
			if (_.isEqual(egg?.keys, this.input) || _.isEqual(egg?.pattern, this.input)) {
				// Check Targets if Mouse Events //
				if (_.includes(this.pluginOptions.mouseEvents, e.type)) {
					this.checkTarget(e, egg);
					return false;
				}

				this.emit(egg);
			}

			return false;
		});

		this.reset();
		return false;
	},

	// Check Click Targets //
	checkTarget(e, egg) {
		// Get clean egg target //
		const node = egg.target;
		const id = egg.target.replace('#', '');
		const className = egg.target.replace('.', '');

		// Reduce targets to unique values //
		const nodes = _.uniq(this.targets.nodes);
		const ids = _.uniq(this.targets.ids);
		const classNames = _.uniq(this.targets.classNames);

		// Targets array should reduce down to one value, and match the clean egg target //
		const nodeTargetsMatch = nodes.length === 1 && nodes[0] === node;
		const idTargetsMatch = ids.length === 1 && ids[0] === id;
		const classTargetsMatch = classNames.length === 1 && _.includes(classNames[0], className);

		if (nodeTargetsMatch || idTargetsMatch || classTargetsMatch) {
			this.emit(egg);
		}

		this.reset();
	},

	// Reset //
	reset() {
		// Reset timeout and clear input keys //
		this.timeout = setTimeout(() => {
			clearTimeout(this.timeout);

			// Clean inputs and targets //
			this.input = [];
			this.targets = {
				nodes: [],
				ids: [],
				classNames: [],
			};
		}, this.pluginOptions.delay);
	},

	// Emit Bus Event and/or Callback //
	emit(egg) {
		if (Object.keys(easterEggs).length === 1) {
			document.removeEventListener(this.pluginOptions.type, this.capturePattern, false);
		}
		else {
			this.rebuild(egg);
		}

		if (egg.callback) {
			egg.callback(egg);

			if (!egg.withBus) {
				return false;
			}
		}

		new Vue().$bus.$emit(`${egg.name}`);

		// Auto destroy $bus.$on //
		if (egg.destroyBus) {
			new Vue().$bus.$off(`${egg.name}`);
		}

		return false;
	},

	// Rebuild the Easter Eggs //
	rebuild(usedEgg) {
		const currentEggs = easterEggs;
		easterEggs = [];

		// Remove usedEgg from easterEggs  //
		const idx = _.findIndex(currentEggs, (egg) => egg.name === usedEgg.name);
		currentEggs.splice(idx, 1);

		Object.values(currentEggs).forEach((egg) => {
			this.layEggs(egg);
		});

		easterEggs = currentEggs;
	},
};

export default EasterEggTrigger;
