<script setup lang="ts">
import { markRaw, ref } from 'vue';
import EasterEgg from '@/components/EasterEgg.vue';

const activeEasterEgg = ref(null);
const callbackTriggeredClass = ref('');
const clickClassTriggered = ref(false);
const clickIdTriggered = ref(false);
const dblclickTriggered = ref(false);
const konamiTriggeredClass = ref('');

function triggered(el) {
	if (el === 'clicked-id') {
		clickIdTriggered.value = true;
	}

	if (el === 'clicked-class') {
		clickClassTriggered.value = true;
	}

	if (el === 'dblclick') {
		dblclickTriggered.value = true;
	}

	if (el === 'konami') {
		konamiTriggeredClass.value = 'active';
	}

	activeEasterEgg.value = markRaw(EasterEgg);
}

function callback() {
	callbackTriggeredClass.value = 'active';
}

function closeEasterEgg() {
	activeEasterEgg.value = null;
}
</script>

<template>
	<div>&nbsp;</div>
	<div>
		<header>
			<div>
				<img alt="Vue logo" class="logo vue" src="../assets/vue.svg" />
			</div>
			<h1>Vue 3 Easter Egg Trigger</h1>

			<a href="https://www.npmjs.com/package/vue3-easter-egg-trigger">
				<img
					alt="NPM Package"
					src="https://img.shields.io/npm/v/vue3-easter-egg-trigger?color=1867c0&logo=npm"
				/>
			</a>
			&nbsp;
			<a href="https://github.com/webdevnerdstuff/vue3-easter-egg-trigger">
				<img
					alt="@WebDevNerdStuff"
					src="https://img.shields.io/badge/GitHub-WebDevNerdStuff-brightgreen.svg?logo=github"
				/>
			</a>

			<h5>
				by <a href="https://github.com/webdevnerdstuff">WebDevNerdStuff</a>
			</h5>
		</header>

		<div class="buttons">
			<button id="id-target" class="btn" :disabled="clickIdTriggered">
				Click Target Element by ID
			</button>

			<div class="callback-container">
				<button class="btn class-target" :disabled="clickClassTriggered">
					Click Target Element by Class w/callback
				</button>

				<div class="callback-triggered" :class="callbackTriggeredClass">
					Callback Triggered
				</div>
			</div>

			<button class="btn double-click-target" :disabled="dblclickTriggered">
				Double Click Target Element by Class
			</button>
		</div>

		<div class="konami-container">
			Konami Code ↑ ↑ ↓ ↓ ← → ← → b a
			<div class="konami-triggered" :class="konamiTriggeredClass">
				Konami Code Triggered
			</div>
		</div>
	</div>

	<footer>&copy; 2022 WebDevNerdStuff</footer>

	<EasterEggTrigger
		:pattern="['click']"
		target="#id-target"
		type="click"
		@triggered="triggered('clicked-id')"
	/>

	<EasterEggTrigger
		:pattern="['dblclick']"
		target=".double-click-target"
		type="dblclick"
		@triggered="triggered('dblclick')"
	/>

	<EasterEggTrigger
		:callback="callback"
		:pattern="['click']"
		target=".class-target"
		type="click"
		@triggered="triggered('clicked-class')"
	/>

	<EasterEggTrigger @triggered="triggered('konami')" />

	<component :is="activeEasterEgg" @close-easter-egg="closeEasterEgg" />
</template>

<style scoped>
h1 {
	margin-bottom: 10px;
}

h5 {
	margin: 0 0 20px 0;
}
.buttons {
	align-items: center;
	display: flex;
	flex-direction: column;
}

.btn {
	display: block;
	margin-bottom: 30px;
}

.callback-container {
	display: flex;
	justify-content: center;
	margin-bottom: 30px;
	position: relative;
}

.callback-container .btn {
	margin-bottom: 0;
}

.callback-triggered {
	bottom: -25px;
	font-size: 0.8rem;
	opacity: 0;
	position: absolute;
	transition: opacity 0.5s ease;
}

.callback-triggered.active {
	opacity: 1;
}

.konami-container {
	color: #fff;
}

.konami-triggered {
	opacity: 0;
	transition: opacity 0.5s ease;
}

.konami-triggered.active {
	opacity: 1;
}
</style>
