<template>
	<div>
		<div>&nbsp;</div>
		<div>
			<header>
				<div>
					<svg
						xmlns="http://www.w3.org/2000/svg"
						xmlns:xlink="http://www.w3.org/1999/xlink"
						aria-hidden="true"
						role="img"
						class="iconify iconify--logos logo vue"
						width="37.07"
						height="36"
						preserveAspectRatio="xMidYMid meet"
						viewBox="0 0 256 198"
					>
						<path
							fill="#41B883"
							d="M204.8 0H256L128 220.8L0 0h97.92L128 51.2L157.44 0h47.36Z"
						></path>
						<path
							fill="#41B883"
							d="m0 0l128 220.8L256 0h-51.2L128 132.48L50.56 0H0Z"
						></path>
						<path
							fill="#35495E"
							d="M50.56 0L128 133.12L204.8 0h-47.36L128 51.2L97.92 0H50.56Z"
						></path>
					</svg>
				</div>
				<h1>Vue 2 Easter Egg Trigger</h1>
				<a href="https://github.com/webdevnerdstuff/vue-easter-egg-trigger">
					<img
						src="https://img.shields.io/github/package-json/v/webdevnerdstuff/vue-easter-egg-trigger"
					/>
				</a>
				<h5>
					by <a href="https://github.com/webdevnerdstuff">WebDevNerdStuff</a>
				</h5>
			</header>

			<div class="buttons">
				<button id="id-target" class="btn">Click Target Element by ID</button>

				<div class="callback-container">
					<button class="btn class-target">
						Click Target Element by Class w/callback
					</button>

					<div class="callback-triggered">Callback Triggered</div>
				</div>

				<button class="btn double-click-target">
					Double Click Target Element by Class
				</button>
			</div>

			<div class="konami-container">
				Konami Code ↑ ↑ ↓ ↓ ← → ← → b a
				<div class="konami-triggered">Konami Code Triggered</div>
			</div>
		</div>

		<footer>&copy; 2022 WebDevNerdStuff</footer>
	</div>
</template>

<script>

export default {
	name: 'HelloWorldComponent',
	components: {},
	props: {},
	data: () => ({}),
	computed: {},
	watch: {},
	mounted() { },
	methods: {
	},
};
</script>

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
