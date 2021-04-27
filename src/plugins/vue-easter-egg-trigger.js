import Vue from 'vue';
import _ from '@assets/lodash.custom';

const defaultEggOptions = {
	callback: null,
	destroyBus: false,
	keys: false,
	name: 'easter-egg',
	pattern: false,
	target: 'html',
	withBus: true,
};

let easterEggs = [];

const EasterEggTrigger = {
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
	install(vueObject, opts) {
		const vueObj = vueObject;

		// Set the Global options //
		this.options = { ...this.options, ...opts };

		// Add an instance method //
		vueObj.prototype.$easterEgg = function(methodOptions) {
			EasterEggTrigger.setEggOptions(methodOptions);
			EasterEggTrigger.callAddListener();
		};

		vueObj.prototype.$easterEggTrigger = function(methodOptions) {
			EasterEggTrigger.setEggOptions(methodOptions);
			EasterEggTrigger.callAddListener();
		};
	},
	setEggOptions(opts) {
		easterEggs.push({ ...defaultEggOptions, ...opts });
	},
	callAddListener() {
		Object.values(easterEggs).forEach((egg) => {
			const newEgg = egg;

			if (!newEgg.keys && !newEgg.pattern) {
				newEgg.keys = this.options.keys;
				newEgg.pattern = this.options.pattern;
			}
		});

		this.addListener();
	},
	addListener() {
		document.addEventListener(this.options.type, this.capturePattern, false);
	},
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
		if (_.includes(EasterEggTrigger.options.mouseEvents, e.type)) {
			key = e.type;

			EasterEggTrigger.targets.nodes.push(e.target.nodeName.toLowerCase());
			EasterEggTrigger.targets.ids.push(e.target.id);
			EasterEggTrigger.targets.classNames.push(e.target.classList.value);
		}

		EasterEggTrigger.input.push(key);
		EasterEggTrigger.checkPattern(e);
	},
	checkPattern(e) {
		Object.values(easterEggs).forEach((egg) => {
			// Check Keyboard Events //
			if (_.isEqual(egg?.keys, this.input) || _.isEqual(egg?.pattern, this.input)) {
				// Check Targets if Mouse Events //
				if (_.includes(this.options.mouseEvents, e.type)) {
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
		}, this.options.delay);
	},
	emit(egg) {
		if (Object.keys(easterEggs).length === 1) {
			document.removeEventListener(this.options.type, this.capturePattern, false);
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
	rebuild(usedEgg) {
		const currentEggs = easterEggs;
		easterEggs = [];

		// Remove usedEgg from easterEggs  //
		const idx = _.findIndex(currentEggs, (egg) => egg.name === usedEgg.name);
		currentEggs.splice(idx, 1);

		Object.values(currentEggs).forEach((egg) => {
			this.setEggOptions(egg);
		});
	},
	timeout: null,
	input: [],
	targets: {
		nodes: [],
		ids: [],
		classNames: [],
	},
};

// Automatic installation if Vue has been added to the global scope.
if (typeof window !== 'undefined' && window.Vue) {
	window.Vue.use(EasterEggTrigger);
}

export default EasterEggTrigger;
