<template>
	<div>
		<EasterEgg />
	</div>
</template>

<script>
import Vue from 'vue';
import EasterEgg from '@components/EasterEgg.vue';

const EventBus = new Vue();

Object.defineProperties(Vue.prototype, {
	$bus: {
		get() {
			return EventBus;
		},
	},
});

export default {
	name: 'App',
	components: {
		EasterEgg,
	},
};
</script>
