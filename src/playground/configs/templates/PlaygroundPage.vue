<template>
	<v-col
		class="offset-4 mt-15 pt-15"
		cols="4"
	>
		<v-card
			class="pt-5"
			elevation="5"
		>
			<v-container>
				<v-row>
					<v-col
						class="text-center mb-4"
						cols="12"
					>
						<v-btn
							id="id-target"
							color="primary"
							:disabled="clickIdTriggered"
						>
							Click Target Element by ID
						</v-btn>

						<VEasterEggTrigger
							:pattern="['click']"
							target="#id-target"
							type="click"
							@triggered="triggered('clicked-id')"
						/>
					</v-col>

					<v-col
						class="text-center"
						cols="12"
					>
						<v-btn
							class="class-target"
							color="primary"
							:disabled="clickClassTriggered"
						>
							Triggered by Class
						</v-btn>

						<VEasterEggTrigger
							:callback="callback"
							:pattern="['click', 'click', 'click']"
							target=".class-target"
							type="click"
							@triggered="triggered('clicked-class')"
						/>

						<div
							class="callback-triggered"
							:class="callbackTriggeredClass"
						>
							Class element clicked
						</div>
					</v-col>

					<v-col
						class="text-center"
						cols="12"
					>
						<v-btn
							class="double-click-target"
							color="primary"
							:disabled="dblclickTriggered"
						>
							Double Click Target Element by Class
						</v-btn>

						<VEasterEggTrigger
							:pattern="['dblclick']"
							target=".double-click-target"
							type="dblclick"
							@triggered="triggered('dblclick')"
						/>
					</v-col>

					<v-col
						class="text-center"
						cols="12"
					>
						Konami Code ↑ ↑ ↓ ↓ ← → ← → b a
						<div
							class="konami-triggered"
							:class="konamiTriggeredClass"
						>
							Konami Code Triggered
						</div>

						<VEasterEggTrigger @triggered="triggered('konami')" />
					</v-col>

					<v-col
						class="text-center"
						cols="12"
					>
						Pattern ↓ ↓ ↓ ↓
						<div
							class="pattern-triggered"
							:class="patternTriggeredClass"
						>
							Pattern Triggered
						</div>

						<VEasterEggTrigger
							:pattern="['ArrowDown', 'ArrowDown', 'ArrowDown', 'ArrowDown']"
							@triggered="triggered('pattern')"
						/>
					</v-col>
				</v-row>
			</v-container>
		</v-card>
	</v-col>

	<component
		:is="activeEasterEgg"
		@close-easter-egg="closeEasterEgg"
	/>
</template>

<script setup lang="ts">
import EasterEgg from '@/components/EasterEgg.vue';

const activeEasterEgg = ref<object | null>(null);
const callbackTriggeredClass = ref('');
const clickClassTriggered = ref(false);
const clickIdTriggered = ref(false);
const dblclickTriggered = ref(false);
const konamiTriggeredClass = ref('');
const patternTriggeredClass = ref('');

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

	if (el === 'pattern') {
		patternTriggeredClass.value = 'active';
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

<style scoped lang="scss">
.callback-triggered {
	font-size: 0.8rem;
}

.callback-triggered,
.konami-triggered,
.pattern-triggered {
	opacity: 0;
	transition: opacity 0.5s ease;

	&.active {
		opacity: 1;
	}
}
</style>
