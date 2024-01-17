<template>
	<v-row>
		<v-col
			id="examples"
			cols="12"
		>
			<h2 :class="classes.h2">
				<a
					:class="classes.headerA"
					href="#examples"
				>#</a>
				Examples
			</h2>
		</v-col>

		<v-col
			id="examples-key-events"
			:class="h2Classes"
		>
			<h2><a
					class="text-secondary"
					href="#examples-key-events"
				>Key Event Examples</a></h2>
		</v-col>

		<ExampleContainer
			:code="getTemplateCode('KonamiExampleRef')"
			:codeBlockOptions="codeBlockOptions"
		>
			<KonamiExample
				ref="KonamiExampleRef"
				@triggered="triggered('konami')"
			/>
		</ExampleContainer>

		<ExampleContainer
			:code="getTemplateCode('PatternExampleRef')"
			:codeBlockOptions="codeBlockOptions"
		>
			<PatternExample
				ref="PatternExampleRef"
				@triggered="triggered('pattern')"
			/>
		</ExampleContainer>

		<v-col
			id="examples-mouse-events"
			:class="h2Classes"
		>
			<h2><a
					class="text-secondary"
					href="#examples-mouse-events"
				>Mouse Event Examples</a></h2>
			<p>
				Available types of Mouse Events: <code class="ic">click</code>, <code class="ic">dblclick</code>, <code
					class="ic">mouseup</code>, <code class="ic">mousedown</code>. When using <code class="ic">dblclick</code> the
				pattern will only work with one double click. Ex. pattern: <code class="ic">['dblclick']</code>.
				<br>
				<br>
				Mouse events require the <code class="ic">target</code> property to be set.
			</p>
		</v-col>

		<ExampleContainer
			:code="getTemplateCode('ClickIdExampleRef')"
			:codeBlockOptions="codeBlockOptions"
		>
			<ClickIdExample
				ref="ClickIdExampleRef"
				@triggered="triggered('clicked-id')"
			/>
		</ExampleContainer>

		<ExampleContainer
			:code="getTemplateCode('ClickClassExampleRef')"
			:codeBlockOptions="codeBlockOptions"
		>
			<ClickClassExample
				ref="ClickClassExampleRef"
				@triggered="triggered('clicked-class')"
			/>
		</ExampleContainer>

		<ExampleContainer
			:code="getTemplateCode('DblClickClassExampleRef')"
			:codeBlockOptions="codeBlockOptions"
		>
			<DblClickClassExample
				ref="DblClickClassExampleRef"
				@triggered="triggered('dblclick')"
			/>
		</ExampleContainer>

		<ExampleContainer
			:code="getTemplateCode('MultipleClickClassExampleRef')"
			:codeBlockOptions="codeBlockOptions"
		>
			<MultipleClickClassExample
				ref="MultipleClickClassExampleRef"
				@triggered="triggered('dblclick')"
			/>
		</ExampleContainer>

		<ExampleContainer
			:code="getTemplateCode('ClickDomExampleRef')"
			:codeBlockOptions="codeBlockOptions"
		>
			<ClickDomExample
				ref="ClickDomExampleRef"
				@triggered="triggered('dblclick')"
			/>
		</ExampleContainer>

		<ExampleContainer
			:code="getTemplateCode('PersistExampleRef')"
			:codeBlockOptions="codeBlockOptions"
		>
			<PersistExample
				ref="PersistExampleRef"
				@triggered="triggered('dblclick')"
			/>
		</ExampleContainer>

		<component
			:is="activeEasterEgg"
			@close-easter-egg="closeEasterEgg"
		/>
	</v-row>
</template>

<script setup>
import { inject } from 'vue';
import EasterEgg from '@/components/EasterEgg.vue';
import {
	ClickClassExample,
	ClickDomExample,
	ClickIdExample,
	DblClickClassExample,
	ExampleContainer,
	KonamiExample,
	MultipleClickClassExample,
	PatternExample,
	PersistExample,
} from '@/documentation/components/examples';

defineProps({
	codeBlockOptions: {
		required: true,
		type: Object,
	},
});

const activeEasterEgg = ref(null);
const classes = inject('classes');
const h2Classes = ref('offset-lg-2 offset-xl-1 v-col-sm-12 v-col-lg-8 v-col-xl-10 mb-0 pb-0');

const ClickClassExampleRef = ref(null);
const ClickDomExampleRef = ref(null);
const ClickIdExampleRef = ref(null);
const DblClickClassExampleRef = ref(null);
const KonamiExampleRef = ref(null);
const MultipleClickClassExampleRef = ref(null);
const PatternExampleRef = ref(null);
const PersistExampleRef = ref(null);

const refElements = ref({
	ClickClassExampleRef,
	ClickDomExampleRef,
	ClickIdExampleRef,
	DblClickClassExampleRef,
	KonamiExampleRef,
	MultipleClickClassExampleRef,
	PatternExampleRef,
	PersistExampleRef,
});

function getTemplateCode(exampleName) {
	const el = refElements.value[exampleName];
	const example = el?.exampleCode ?? { code: '', desc: undefined, name: undefined, template: '' };

	return example;
}

function triggered() {
	activeEasterEgg.value = markRaw(EasterEgg);
}

function closeEasterEgg() {
	activeEasterEgg.value = null;
}
</script>


<style lang="scss">
.egg-triggered {
	opacity: 0;
	transition: opacity 0.5s ease;

	&.active {
		opacity: 1;
	}
}
</style>


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
