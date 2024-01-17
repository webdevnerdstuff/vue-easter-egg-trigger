<template>
	<v-row class="text-center">
		<v-col
			class="my-3"
			cols="12"
			style="height: 200px; position: relative; width: 100%;"
		>
			<v-img
				class="header-egg"
				:class="{ active: eggCracked }"
				height="200"
				src="../assets/egg.png"
				title="Vue Easter Egg Trigger"
				width="200"
			/>
			<v-img
				v-if="eggCracked"
				class="header-egg"
				:class="{ active: eggCracked }"
				height="200"
				src="../assets/egg-cracked.png"
				title="Vue Easter Egg Trigger"
				width="200"
			/>

			<VEasterEggTrigger
				:pattern="['dblclick']"
				target=".header-egg"
				type="dblclick"
				@triggered="eggClicked"
			/>
		</v-col>

		<v-col class="mb-4">
			<h1 class="v-heading text-h3 text-sm-h3 mb-1">
				Vue Easter Egg Trigger
			</h1>
			<p class="mb-4 text-grey-darken-1">by WebDevNerdStuff</p>
			<v-chip
				color="primary"
				size="small"
				variant="outlined"
			>
				v{{ componentVersion }}
			</v-chip>
		</v-col>
	</v-row>

	<!-- Installation -->
	<v-row id="installation">
		<v-col
			class="mb-5"
			cols="12"
		>
			<h2 :class="classes.h2">
				<a
					:class="classes.headerA"
					href="#installation"
				>#</a>
				Installation
			</h2>

			<v-row>
				<v-col cols="12">
					<VCodeBlock
						code="pnpm add @wdns/vue-easter-egg-trigger"
						:highlightjs="codeBlockSettings.plugin === 'highlightjs'"
						lang="plain"
						:prismjs="codeBlockSettings.plugin === 'prismjs'"
						:theme="codeBlockSettings.theme"
					>
						<template #label>
							Using <a
								:href="links.pnpm"
								target="_blank"
							>pnpm</a>:
						</template>
					</VCodeBlock>
				</v-col>
				<v-col cols="12">
					<VCodeBlock
						code="npm i @wdns/vue-easter-egg-trigger"
						highlightjs
						lang="plain"
					>
						<template #label>Using npm:</template>
					</VCodeBlock>
				</v-col>
			</v-row>
		</v-col>
	</v-row>

	<!-- Description -->
	<DescriptionSection />

	<!-- Usage -->
	<UsageSection :codeBlockOptions="codeBlockOptions" />

	<!-- Example -->
	<ExampleSection :codeBlockOptions="codeBlockOptions" />

	<!-- Props -->
	<PropsSection />

	<!-- Events -->
	<EventsSection :codeBlockOptions="codeBlockOptions" />

	<!-- Playground -->
	<PlaygroundSection :codeBlockOptions="codeBlockOptions" />

	<!-- Dependencies -->
	<DependenciesSection />

	<!-- License -->
	<LicenseSection />

	<!-- Legal -->
	<LegalSection />

	<component
		:is="activeEasterEgg"
		@close-easter-egg="closeEasterEgg"
	/>
</template>

<script setup>
import { inject, provide, reactive, ref } from 'vue';
import packageInfo from '../../package.json';
import {
	DependenciesSection,
	DescriptionSection,
	EventsSection,
	ExampleSection,
	LegalSection,
	LicenseSection,
	PlaygroundSection,
	PropsSection,
	UsageSection,
} from '@/documentation/sections';
import EasterEgg from '@/components/EasterEgg.vue';


const props = defineProps({
	codeBlockOptions: {
		required: true,
		type: Object,
	},
});

const codeBlockSettings = computed(() => props.codeBlockOptions);
const links = inject('links');

const classes = reactive({
	appLink: 'app-link text-decoration-none primary--text font-weight-medium d-inline-block font-weight-bold',
	h2: 'text-primary v-heading text-h4 text-sm-h4 mb-2',
	h3: 'text-blue-darken-2 v-heading text-h5 text-sm-h5 mb-0',
	headerA: 'text-decoration-none text-right text-md-left d-none d-sm-flex',
});
const componentVersion = ref(packageInfo.version);

provide('classes', classes);

const eggCracked = ref(false);
const activeEasterEgg = ref(null);

function eggClicked() {
	activeEasterEgg.value = markRaw(EasterEgg);
	eggCracked.value = true;
}

function closeEasterEgg() {
	activeEasterEgg.value = null;
}
</script>

<style lang="scss" scoped>
:deep(pre),
:deep(code) {
	&.ic {
		background-color: rgb(255 255 255 / 10%) !important;
		border-radius: 3px;
		font-size: 85%;
		font-weight: normal;
		padding: 0.2em 0.4em;
	}
}

.header-egg {
	cursor: pointer;
	height: 200px;
	left: 50%;
	position: absolute;
	transform: translateX(-50%);
	width: 200px;

	&.active {
		cursor: default;
	}
}
</style>

<style lang="scss">
.v-theme--light {
	pre,
	code {
		&.ic {
			background-color: rgb(0 0 0 / 10%) !important;
		}
	}
}
</style>
