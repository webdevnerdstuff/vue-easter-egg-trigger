<script lang="ts" setup>
import {
	Props,
	Targets,
} from '@/plugin/types';
import {
	includes,
	isEqual,
	uniq,
} from 'lodash';
import { globalOptions } from './';


const emit = defineEmits(['triggered']);

// -------------------------------------------------- Props //
const props = withDefaults(defineProps<Props>(), {
	delay: 500,
	pattern: () => ['ArrowUp', 'ArrowUp', 'ArrowDown', 'ArrowDown', 'ArrowLeft', 'ArrowRight', 'ArrowLeft', 'ArrowRight', 'b', 'a'],
	persist: false,
	target: 'body',
	type: 'keydown',
});

const injectedOptions = inject(globalOptions, {});
const settings = reactive<Props>({ ...props, ...injectedOptions });

watchEffect(() => {
	Object.assign(settings, { ...props, ...injectedOptions });
});

let input = reactive<string[]>([]);
let listenElement = null as HTMLElement | null;
let timeout: ReturnType<typeof setTimeout> = setTimeout(() => { });
const mouseEvents: string[] = reactive([
	'click', // Works with multiple single clicks pattern
	'dblclick', // Only works with single double click pattern set
	'mouseup', // Works with multiple mouseup clicks pattern
	'mousedown', // Works with multiple mousedown clicks pattern
]);
const targets: Targets = reactive({
	classNames: [],
	ids: [],
	nodes: [],
});


onMounted(() => {
	addListener();
});


// Add event listeners //
function addListener(): void {
	const type = settings.type as keyof Props;
	listenElement = document.querySelector(settings.target as keyof Props);

	if (!listenElement) {
		throw new Error(`Element not found: ${settings.target}`);
	}

	if (settings.target === 'body') {
		listenElement.addEventListener(type, capturePattern as EventListener, true);
		return;
	}

	listenElement.addEventListener(type, capturePattern as EventListener, true);
}


// Capture the Keys Pattern //
function capturePattern(e: KeyboardEvent): void {
	const key = ref('');

	if (timeout !== null) {
		clearTimeout(timeout);
	}

	// -------------------- Keyboard Events //
	if (typeof e.key !== 'undefined') {
		key.value = e.key;
	}

	// -------------------- Mouse Events //
	if (includes(mouseEvents, e.type)) {
		const target = e.currentTarget as HTMLTextAreaElement;
		key.value = e.type;

		targets.nodes.push(target.nodeName.toLowerCase());
		targets.ids.push(target.id);
		targets.classNames.push(target.classList.value);
	}

	input.push(key.value);
	checkPattern(e);
}


// Check the Keys Pattern //
function checkPattern(e: Event | MouseEvent | KeyboardEvent): void {
	if (isEqual(settings.pattern, input)) {
		if (includes(mouseEvents, e.type)) {
			checkTarget();
			return;
		}

		emitEvent();
		return;
	}

	reset();
}


// Check Click Targets //
function checkTarget(): void {
	// Get clean egg target //
	const node = settings.target as keyof Props;
	const id = node.replace('#', '');
	const className = node.replace('.', '');

	// Reduce targets to unique values //
	const nodes = uniq(targets.nodes);
	const ids = uniq(targets.ids);
	const classNames = uniq(targets.classNames);

	// Targets array should reduce down to one value, and match the clean egg target //
	const nodeTargetsMatch = ref(nodes.length === 1 && nodes[0] === node);
	const idTargetsMatch = ref(ids.length === 1 && ids[0] === id);
	const classTargetsMatch = ref(classNames.length === 1 && includes(classNames[0], className));

	if (nodeTargetsMatch.value || idTargetsMatch.value || classTargetsMatch.value) {
		emitEvent();
	}

	reset();
}


// Reset //
function reset(): void {
	// Reset timeout and clear input keys //
	timeout = setTimeout(() => {
		clearTimeout(timeout);

		// Clean inputs and targets //
		input = [];
	}, Number(settings.delay));
}


// Emit Event and/or Callback //
function emitEvent(): void {
	if (settings.callback) {
		settings.callback(settings);
	}

	emit('triggered', props);

	if (!settings.persist) {
		destroyEvent(capturePattern as EventListener);
	}
}


// Destroy the event listener //
function destroyEvent(event: EventListener): void {
	if (listenElement) {
		listenElement.removeEventListener(settings.type as keyof Props, event, true);
	}
}
</script>

<template></template>
