<template>
	<div style="font-family: 'Open Sans', sans-serif; padding: 20px 0">
		<div class="container">
			<div class="row">
				<div cols="12">
					<h1 class="mb-4">Easter Egg Trigger</h1>
				</div>
			</div>
			<div class="row">
				<div cols="12">
					<table class="table table-bordered">
						<thead>
							<tr>
								<th style="width: 50%">Type</th>
								<th style="width: 50%">Result</th>
							</tr>
						</thead>
						<tbody>
							<tr>
								<td>Key:</td>
								<td v-html="msg.key"></td>
							</tr>
							<tr>
								<td>Mouse:</td>
								<td v-html="msg.mouse"></td>
							</tr>
							<tr>
								<td>
									Mouse Node Target
									<b style="color: #00f; cursor: pointer; display: inline">
										Node b</b
									>:
								</td>
								<td v-html="msg.node"></td>
							</tr>
							<tr>
								<td>
									Mouse ID Target:
									<span
										id="id-target"
										style="color: #00f; cursor: pointer; display: inline"
										>#idTarget</span
									>
									<!-- <br />
									<pre class="prettyprint lang-js" :style="codeStyle">
										const parentThis = this;

										this.$easterEgg({
										&nbsp;&nbsp;&nbsp;&nbsp;name: 'instance-id-target',
										&nbsp;&nbsp;&nbsp;&nbsp;pattern: ['dblclick'],
										&nbsp;&nbsp;&nbsp;&nbsp;target: '#id-target',
										&nbsp;&nbsp;&nbsp;&nbsp;callback() {
										&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;parentThis.msg.id = 'triggered';
										&nbsp;&nbsp;&nbsp;&nbsp;},
										&nbsp;&nbsp;&nbsp;&nbsp;withBus: false,
										});
									</pre
									> -->
								</td>
								<td v-html="msg.id"></td>
							</tr>
							<tr>
								<td>
									Mouse Class Target:
									<span
										class="class-target"
										style="color: #00f; cursor: pointer; display: inline"
										>#idTarget</span
									>
									<!--<br />
									<pre class="prettyprint lang-js" :style="codeStyle">
										const parentThis = this;

										this.$easterEgg({
										&nbsp;&nbsp;&nbsp;&nbsp;name: 'instance-class-target',
										&nbsp;&nbsp;&nbsp;&nbsp;pattern: ['dblclick'],
										&nbsp;&nbsp;&nbsp;&nbsp;target: '.class-target',
										&nbsp;&nbsp;&nbsp;&nbsp;callback() {
										&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;parentThis.msg.class = 'triggered';
										&nbsp;&nbsp;&nbsp;&nbsp;},
										&nbsp;&nbsp;&nbsp;&nbsp;withBus: false,
										});
									</pre
									> -->
								</td>
								<td v-html="msg.class"></td>
							</tr>
						</tbody>
					</table>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
import Vue from 'vue';
import EasterEggTrigger from '@plugins/EasterEggTrigger';

const eventType = 'keydown';
// const eventType = 'dblclick';

Vue.use(EasterEggTrigger, {
	type: eventType,
});

export default {
	name: 'EasterEgg',
	props: {},
	data: () => ({
		checkMark: '<i class="fas fa-check text-success"></i>',
		msg: {
			class: '',
			id: '',
			key: '',
			mouse: '',
			node: '',
		},
	}),
	computed: {
		codeStyle() {
			return `
			background-color: #eee;
			border-color: #ddd !important;
			border-radius: 5px;
			padding: 10px 20px !important;
			white-space: pre-line;
			margin: 20px;
			text-align: left;
			width: auto;
			z-index: 0;`;
		},
	},
	created() {
		if (eventType === 'dblclick') {
			this.mouseInstanceEvents();
			return false;
		}

		this.keyInstanceEvents();
		return false;
	},
	methods: {
		consoleInfo(text) {
			console.info(`%c${text}`, 'background: #000; color: #0f0; font-weight: bold; padding: 10px;');
		},
		keyInstanceEvents() {
			const parentThis = this;

			this.$bus.$on('easter-egg', () => {
				this.consoleInfo('Konami');
			});

			this.$easterEgg();

			// Key Event with Callback & no Bus //
			this.$easterEgg({
				name: 'instance-key-event-no-bus',
				pattern: ['ArrowUp', 'ArrowUp'],
				callback() {
					parentThis.consoleInfo('Callback: Key');
					parentThis.msg.key = `${parentThis.checkMark} Callback`;
				},
				withBus: false,
			});

			// Key Event with Callback & Bus //
			this.$bus.$on('instance-key-event-bus', () => {
				this.consoleInfo('$bus: Key Bus');
				this.msg.key += ' & Bus';
			});

			this.$easterEgg({
				name: 'instance-key-event-bus',
				pattern: ['ArrowDown', 'ArrowDown'],
				callback() {
					parentThis.consoleInfo('Callback: Key Event');
					parentThis.msg.key = `${parentThis.checkMark} Callback`;
				},
			});

			// Key Event with Bus & no Callback //
			this.$bus.$on('instance-key-bus', () => {
				this.consoleInfo('$bus: Key Bus');
				this.msg.key = `${this.checkMark} Bus`;
			});

			this.$easterEgg({
				name: 'instance-key-bus',
				pattern: ['ArrowLeft', 'ArrowLeft'],
			});
		},
		mouseInstanceEvents() {
			const parentThis = this;

			// Mouse Event with Callback & Bus event //
			this.$bus.$on('instance-mouse-callback-bus', () => {
				this.consoleInfo('$bus: Easter Egg Instance with Callback & Bus');
				this.msg.mouse += ' & Bus';
			});

			this.$easterEgg({
				name: 'instance-mouse-callback-bus',
				pattern: ['dblclick'],
				callback() {
					parentThis.consoleInfo('Callback: Mouse Event');
					parentThis.msg.mouse = `${parentThis.checkMark} Callback`;
				},
			});

			// Mouse Event using Node Target //
			this.$easterEgg({
				name: 'instance-node-target',
				pattern: ['dblclick'],
				target: 'b',
				callback() {
					parentThis.consoleInfo('Callback: Mouse Event with Node target');
					parentThis.msg.node = parentThis.checkMark;
				},
				withBus: false,
			});

			// Mouse Event using ID Target //
			this.$easterEgg({
				name: 'instance-id-target',
				pattern: ['dblclick'],
				target: '#id-target',
				callback() {
					parentThis.consoleInfo('Callback: Mouse Event with ID target');
					parentThis.msg.id = parentThis.checkMark;
				},
				withBus: false,
			});

			// Mouse Event using Class Target //
			this.$easterEgg({
				name: 'instance-class-target',
				pattern: ['dblclick'],
				target: '.class-target',
				callback() {
					parentThis.consoleInfo('Callback: Mouse Event with Class target');
					parentThis.msg.class = parentThis.checkMark;
				},
				withBus: false,
			});
		},
	},
};
</script>
