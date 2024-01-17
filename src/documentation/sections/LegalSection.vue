<template>
	<v-row>
		<v-col
			id="legal"
			cols="12"
		>
			<h2 :class="classes.h2">
				<a
					:class="classes.headerA"
					href="#legal"
				>#</a>
				Legal
			</h2>
		</v-col>

		<v-col cols="12">
			<p>
				The Easter egg image was created by <a
					:href="links.cutiefulCritters"
					target="_blank"
				>CutiefulCritters</a> and is licensed under the "My spouse allowed me to use this image" license. The unicorn
				image was created by <a
					:href="links.christineWulf"
					target="_blank"
				>Christine Wulf</a> and has been licensed under the Adobe Stock <a :href="links.adobeTerms">Standard
					License</a>.
			</p>
		</v-col>
	</v-row>
</template>

<script setup>
import { inject } from 'vue';


const classes = inject('classes');
const links = inject('links');
</script>
