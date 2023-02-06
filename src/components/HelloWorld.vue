<template>
	<div>
		<div>&nbsp;</div>
		<div>
			<header>
				<div>
					<svg
						aria-hidden="true"
						class="iconify iconify--logos logo vue"
						height="36"
						preserveAspectRatio="xMidYMid meet"
						role="img"
						viewBox="0 0 256 198"
						width="37.07"
						xmlns="http://www.w3.org/2000/svg"
						xmlns:xlink="http://www.w3.org/1999/xlink"
					>
						<path
							d="M204.8 0H256L128 220.8L0 0h97.92L128 51.2L157.44 0h47.36Z"
							fill="#41B883"
						></path>
						<path
							d="m0 0l128 220.8L256 0h-51.2L128 132.48L50.56 0H0Z"
							fill="#41B883"
						></path>
						<path
							d="M50.56 0L128 133.12L204.8 0h-47.36L128 51.2L97.92 0H50.56Z"
							fill="#35495E"
						></path>
					</svg>
				</div>
				<h1>
					Vue 2 Easter Egg Trigger
					<span v-if="clickH1Triggered">&nbsp;(clicked via component)</span>
				</h1>

				<a href="https://www.npmjs.com/package/vue-easter-egg-trigger">
					<img
						alt="NPM Package"
						src="https://img.shields.io/npm/v/vue-easter-egg-trigger?color=1867c0&logo=npm"
					/>
				</a>
				&nbsp;
				<a href="https://github.com/webdevnerdstuff/vue-easter-egg-trigger">
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
						Callback triggered
					</div>
				</div>

				<div class="callback-container">
					<button
						class="btn using-component"
						:disabled="clickedComponentTriggered"
					>
						Click using component
					</button>

					<div
						class="callback-triggered"
						:class="componentCallbackTriggeredClass"
					>
						Component callback triggered
					</div>
				</div>

				<button class="btn double-click-target" :disabled="dblclickTriggered">
					Double Click Target Element by Class
				</button>
			</div>

			<div class="konami-container">
				Konami Code ↑ ↑ ↓ ↓ ← → ← → b a
				<div class="konami-triggered" :class="konamiTriggeredClass">
					Konami code triggered
				</div>
			</div>

			<EasterEggComponent
				:pattern="['click']"
				target=".using-component"
				type="click"
				@callback="callbackEvent('using-component')"
				@triggered="triggeredEvent('using-component')"
			/>
		</div>

		<footer>&copy; 2022 WebDevNerdStuff</footer>

		<component :is="activeEasterEgg" @closeEasterEgg="closeEasterEgg" />
	</div>
</template>

<script>
import Vue from 'vue';
import EasterEgg from './EasterEgg.vue';

const EventBus = new Vue();
Object.defineProperties(Vue.prototype, {
	$bus: {
		get() {
			return EventBus;
		},
	},
});

export default {
	name: 'HelloWorldComponent',
	components: {
		EasterEgg,
	},
	props: {},
	data: () => ({
		activeEasterEgg: null,
		callbackTriggeredClass: '',
		clickClassTriggered: false,
		clickH1Triggered: false,
		clickIdTriggered: false,
		clickedComponentTriggered: false,
		componentCallbackTriggeredClass: '',
		dblclickTriggered: false,
		konamiTriggeredClass: '',
		logStyle: {},
	}),
	mounted() {
		this.logStyle = [
			'background-color: black',
			`border-image: linear-gradient(to right,
			hsl(0, 100%, 50%),
			hsl(39, 100%, 50%),
			hsl(60, 100%, 50%),
			hsl(120, 100%, 50%),
			hsl(180, 100%, 50%),
			hsl(240, 100%, 50%),
			hsl(300, 100%, 50%),
			hsl(360, 100%, 50%)
			) 1`,
			'border-style: solid',
			'border-width: 4px',
			'color: #fff',
			'font-weight: normal',
			'padding: 8px',
		];

		this.$bus.$on('id-target', (el) => {
			this.logResults(`${el} bus event`);
		});

		this.buildEggs();
	},
	methods: {
		buildEggs() {
			const $this = this;

			this.$easterEgg({
				name: 'id-target',
				pattern: ['click'],
				type: 'click',
				target: '#id-target',
				callback() {
					$this.triggered('clicked-id');
				},
				withBus: true,
			});

			this.$easterEgg({
				name: 'class-target',
				pattern: ['click'],
				type: 'click',
				target: '.class-target',
				callback() {
					$this.triggered('clicked-class');
					$this.callbackEvent('clicked-class');
				},
				triggered() {
					$this.triggeredEvent('clicked-class');
				},
			});

			this.$easterEgg({
				name: 'double-click-target',
				pattern: ['dblclick'],
				type: 'dblclick',
				target: '.double-click-target',
				callback() {
					$this.triggered('dblclick');
				},
			});

			this.$easterEgg({
				name: 'konami-code',
				callback() {
					$this.triggered('konami');
				},
			});
		},
		callbackEvent(el) {
			this.triggered(el, `${el} callback event`);
		},
		triggeredEvent(el) {
			this.logResults(`${el} triggered event`);
		},
		closeEasterEgg() {
			this.activeEasterEgg = null;
		},
		logResults(el) {
			// eslint-disable-next-line no-console
			console.log('%c%s', this.logStyle.join(';'), `triggered: ${el}`);
		},
		triggered(el, msg = null) {
			const message = msg || el;

			if (el === 'h1-clicked') {
				this.clickH1Triggered = true;
			}

			if (el === 'clicked-id') {
				this.clickIdTriggered = true;
			}

			if (el === 'clicked-class') {
				this.callbackTriggeredClass = 'active';
				this.clickClassTriggered = true;
			}

			if (el === 'using-component') {
				this.clickedComponentTriggered = true;
				this.componentCallbackTriggeredClass = 'active';
			}

			if (el === 'dblclick') {
				this.dblclickTriggered = true;
			}

			if (el === 'konami') {
				this.konamiTriggeredClass = 'active';
			}

			this.logResults(message);

			this.activeEasterEgg = EasterEgg;
		},
	},
};
</script>

<style scoped>
h1 {
	margin-bottom: 10px;
}

h1 span {
	font-size: 12px;
	font-weight: bold;
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
