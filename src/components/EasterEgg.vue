<template>
	<div
		id="easter-egg-container"
		:class="containerClass"
		@click="closeEasterEgg"
	>
		<div class="title">Click screen to close</div>
		<div class="unicorn-container">
			<img alt="Farting Unicorns" class="unicorn" src="../assets/unicorn.svg" />
		</div>
	</div>
</template>

<script setup lang="ts">
import { onMounted, ref } from 'vue';

const containerClass = ref('');
const emit = defineEmits(['closeEasterEgg']);

onMounted(() => {
	setTimeout(() => {
		containerClass.value = 'active';
	}, 0);
});

function closeEasterEgg() {
	containerClass.value = '';

	setTimeout(() => {
		emit('closeEasterEgg');
	}, 1000);
}
</script>

<style scoped>
#easter-egg-container {
	background-color: hsla(0, 0%, 0%, 0.8);
	display: flex;
	height: 100vh;
	justify-content: center;
	left: 0;
	opacity: 0;
	position: fixed;
	top: 0;
	transition: opacity 1s ease;
	width: 100vw;
	z-index: 999999;
}

#easter-egg-container.active {
	opacity: 1;
}

#easter-egg-container .title {
	color: #fff;
	font-weight: bold;
	font-size: 1rem;
	padding-top: 1em;
}

.unicorn-container {
	animation: flyingUnicornContainer 10s linear infinite;
	bottom: -100vh;
	height: 50vh;
	position: absolute;
	width: 150vw;
}

.unicorn {
	height: auto;
	position: absolute;
	right: 0;
	top: 0;
	transform-origin: bottom center;
	transform: rotate(115deg);
	width: 300px;
}

@keyframes flyingUnicornContainer {
	0% {
		transform: rotate(330deg);
	}

	100% {
		transform: rotate(210deg);
	}
}

@-webkit-keyframes flyingUnicornContainer {
	0% {
		transform: rotate(330deg);
	}

	100% {
		transform: rotate(210deg);
	}
}

@-moz-keyframes flyingUnicornContainer {
	0% {
		transform: rotate(330deg);
	}

	100% {
		transform: rotate(210deg);
	}
}
</style>
