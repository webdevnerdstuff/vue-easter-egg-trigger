<template>
	<v-row>
		<v-col
			id="playground"
			cols="12"
		>
			<h2 :class="classes.h2">
				<a
					:class="classes.headerA"
					href="#playground"
				>#</a>
				Developer Playground
			</h2>

			<h3 class="mb-2 text-secondary">Setup the Playground</h3>

			<VCodeBlock
				class="mb-6"
				code="git clone git@github.com:webdevnerdstuff/vue-easter-egg-trigger"
				:highlightjs="codeBlockSettings.plugin === 'highlightjs'"
				lang="plain"
				:prismjs="codeBlockSettings.plugin === 'prismjs'"
				:theme="codeBlockSettings.theme"
			>
				<template #label>
					First clone the <a
						:href="store.links.github"
						target="blank"
					>repository:</a>
				</template>
			</VCodeBlock>

			<VCodeBlock
				code="pnpm i && pnpm play"
				:highlightjs="codeBlockSettings.plugin === 'highlightjs'"
				lang="plain"
				:prismjs="codeBlockSettings.plugin === 'prismjs'"
				:theme="codeBlockSettings.theme"
			>
				<template #label>
					Next run the following command to setup the Playground:
				</template>
			</VCodeBlock>
		</v-col>

		<v-col cols="12">
			This will create a file for you to adjust and play with.
			<br />
			<code class="ic">/src/playground/PlaygroundPage.vue</code>
		</v-col>
	</v-row>
</template>

<script setup>
import { computed, inject } from 'vue';
import { useCoreStore } from '@/stores/index';

const props = defineProps({
	codeBlockOptions: {
		required: true,
		type: Object,
	},
});


const codeBlockSettings = computed(() => props.codeBlockOptions);
const classes = inject('classes');
const store = useCoreStore();
</script>
