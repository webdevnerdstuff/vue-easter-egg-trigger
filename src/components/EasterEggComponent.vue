<template>
	<div @callback="callback" @triggered="triggered"></div>
</template>

<script>
import Vue from 'vue';
import EasterEggTriggerCore from '../plugin/index';

export default {
	name: 'EasterEggComponent',
	props: {
		destroyBus: {
			default: false,
			type: Boolean,
		},
		name: {
			default: 'easter-egg-component',
			type: String,
		},
		pattern: {
			default: () => ['ArrowUp', 'ArrowUp', 'ArrowDown', 'ArrowDown', 'ArrowLeft', 'ArrowRight', 'ArrowLeft', 'ArrowRight', 'b', 'a'],
			type: Array,
		},
		target: {
			default: 'div',
			type: String,
		},
		type: {
			default: 'keydown',
			type: String,
		},
		withBus: {
			default: true,
			type: Boolean,
		},
	},
	data: () => ({
		defaultOptions: {
			delay: 500,
		},
		options: {},
	}),
	mounted() {
		this.buildOptions();
	},
	methods: {
		buildOptions() {
			this.options = {
				callback: this.callback,
				destroyBus: this.destroyBus,
				name: this.name,
				pattern: this.pattern,
				target: this.target,
				triggered: this.triggered,
				type: this.type,
				withBus: this.withBus,
			};

			this.init();
		},
		callback() {
			this.$emit('callback', this.options);
		},
		init() {
			EasterEggTriggerCore.init(Vue, this.defaultOptions, this.options);
		},
		triggered() {
			this.$emit('triggered', this.options);
		},
	},
};
</script>
