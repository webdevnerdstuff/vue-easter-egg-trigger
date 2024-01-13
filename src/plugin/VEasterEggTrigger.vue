<script lang="ts" setup>
import {
	// Entry,
	Props,
	// Targets,
} from '@/plugin/types';
import {
	// findIndex,
	isEqual,
} from 'lodash';
import { globalOptions } from './';


const emit = defineEmits(['triggered']);

// -------------------------------------------------- Props //
const props = withDefaults(defineProps<Props>(), {
	delay: 500,
	destroy: true,
	pattern: () => ['ArrowUp', 'ArrowUp', 'ArrowDown', 'ArrowDown', 'ArrowLeft', 'ArrowRight', 'ArrowLeft', 'ArrowRight', 'b', 'a'],
	target: 'body',
	type: 'keydown',
});


const injectedOptions = inject(globalOptions, {});
const settings = reactive<Props>({ ...props, ...injectedOptions });

watchEffect(() => {
	Object.assign(settings, { ...props, ...injectedOptions });
});

let timeout: ReturnType<typeof setTimeout> = setTimeout(() => { });
let input = reactive<string[]>([]);
let listenElement = null as HTMLElement | null;


onMounted(() => {
	layEggs();
});


// Initiate the plugin //
function layEggs() {
	addListener();
}


// Add event listeners //
function addListener() {
	const type = settings.type as keyof Props;
	listenElement = document.querySelector(settings.target as string);

	if (!listenElement) {
		throw new Error(`Element not found: ${settings.target}`);
	}

	if (settings.target === 'body') {
		listenElement.addEventListener(type, capturePattern as EventListener, false);
		return;
	}

	listenElement.addEventListener(type, emitMouseEvent as EventListener, false);
}


// Capture the Keys Pattern //
function capturePattern(e: KeyboardEvent) {
	const key = ref('');

	if (timeout !== null) {
		clearTimeout(timeout);
	}

	// -------------------- Keyboard Events //
	if (typeof e.key !== 'undefined') {
		key.value = e.key;
	}

	input.push(key.value);
	checkPattern();
}


// Check the Keys Pattern //
function checkPattern() {
	if (isEqual(settings.pattern, input)) {
		emitEvent();
		return;
	}

	reset();
}


// Reset //
function reset() {
	// Reset timeout and clear input keys //
	timeout = setTimeout(() => {
		clearTimeout(timeout);

		// Clean inputs and targets //
		input = [];
	}, Number(settings.delay));
}


// Emit Event and/or Callback //
function emitEvent() {
	completeHatching(capturePattern as EventListener);
}

function emitMouseEvent() {
	completeHatching(emitMouseEvent);
}


// Complete the process //
function completeHatching(event: EventListener) {
	if (settings.callback) {
		settings.callback(settings);
	}

	emit('triggered', props);

	if (props.destroy) {
		listenElement?.removeEventListener(settings.type as keyof Props, event, false);
	}
}
</script>

<template></template>
