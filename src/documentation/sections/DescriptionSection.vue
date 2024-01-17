<template>
	<v-row>
		<v-col
			id="description"
			cols="12"
		>
			<h2 :class="classes.h2">
				<a
					:class="classes.headerA"
					href="#description"
				>#</a>
				Description
			</h2>
		</v-col>

		<v-col cols="12">
			Presenting the Vue Easter Egg Trigger, a tool that discreetly injects a touch of unexpectedness into Vue.js
			projects. This unassuming plugin, which operates on both keystrokes (with click events also available), brings
			hidden surprises to your applications.
		</v-col>

		<v-col cols="12">
			Picture users navigating through your Vue.js application, tapping out secret combinations akin to the infamous
			<a
				:href="links.konamiCode"
				target="_blank"
			>Konami code</a>. Suddenly, a magical farting unicorn appears. While we must issue a PSA that this majestic creature
			isn't included, the plugin serves as an invitation for developers to infuse similar unexpected elements into their
			projects.
		</v-col>

	</v-row>
</template>

<script setup>
import { inject } from 'vue';


const classes = inject('classes');
const links = inject('links');
</script>
