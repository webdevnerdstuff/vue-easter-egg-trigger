<template>
	<v-app-bar
		class="top-app-bar"
		color="primary"
		density="compact"
		fixed
	>
		<v-app-bar-nav-icon
			v-if="!isPlayground"
			class="nav-drawer-btn me-2 ms-3"
			:height="iconSize.height"
			:width="iconSize.width"
			@click.stop="toggleDrawer"
		>
			<v-icon icon="mdi:mdi-menu"></v-icon>
		</v-app-bar-nav-icon>
		<v-app-bar-nav-icon
			v-else
			class="nav-drawer-btn me-2 ms-3"
			:height="iconSize.height"
			:href="`/${store.packageName}/`"
			:width="iconSize.width"
		>
			<v-icon icon="mdi:mdi-home"></v-icon>
		</v-app-bar-nav-icon>

		<div class="site-title">Vue Easter Egg Trigger</div>

		<v-spacer></v-spacer>

		<v-btn
			class="me-2"
			:height="iconSize.height"
			:href="links.github"
			icon
			target="_blank"
			:width="iconSize.width"
		>
			<v-icon icon="mdi:mdi-github" />
		</v-btn>

		<v-btn
			class="me-2"
			:height="iconSize.height"
			:href="links.npm"
			icon
			target="_blank"
			:width="iconSize.width"
		>
			<v-icon icon="mdi:mdi-npm" />
		</v-btn>

		<v-btn
			class="me-3"
			:height="iconSize.height"
			icon
			:width="iconSize.width"
			@click="setTheme"
		>
			<v-icon
				v-if="themeName === 'dark'"
				icon="mdi:mdi-weather-night"
			/>
			<v-icon
				v-else
				icon="mdi:mdi-weather-sunny"
			/>
		</v-btn>
	</v-app-bar>
</template>

<script setup>
import { onMounted, ref } from 'vue';
import { useCoreStore } from '@/stores/index';
import { useTheme } from 'vuetify';

const emit = defineEmits(['changedTheme', 'updatedDrawer']);

defineProps({
	isPlayground: {
		default: false,
		type: Boolean,
	},
});

onMounted(() => {
	getTheme();
});

const store = useCoreStore();
const theme = useTheme();

const links = store.links;
const themeName = ref('dark');
const drawer = ref(true);

const iconSize = ref({
	height: 32,
	width: 32,
});

function getTheme() {
	themeName.value = store.getTheme();
	if (!themeName.value) {
		setTheme();
		return false;
	}

	theme.global.name.value = themeName.value;
	emit('changedTheme', themeName.value);
}

function setTheme() {
	themeName.value = store.setTheme(themeName.value);
	theme.global.name.value = themeName.value;
}

function toggleDrawer() {
	emit('updatedDrawer', drawer.value);
}
</script>

<style lang="scss">
</style>
