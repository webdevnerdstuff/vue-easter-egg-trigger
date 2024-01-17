<template>
	<v-col
		v-if="code.name"
		:id="`${getHrefId}`"
		class="v-col-12 offset-lg-2 offset-xl-1 v-col-sm-12 v-col-lg-8 v-col-xl-10 mb-0 pb-0"
	>
		<h3 class="text-info mb-1"><a
				class="text-info"
				:href="`#${getHrefId}`"
			>{{ code.name }}</a></h3>
	</v-col>

	<v-col
		v-if="code.desc"
		class="v-col-12 offset-lg-2 offset-xl-1 v-col-sm-12 v-col-lg-8 v-col-xl-10 mt-0 pt-0"
	>
		<div v-html="code.desc"></div>
	</v-col>

	<v-col class="v-col-12 offset-lg-2 offset-xl-1 v-col-sm-12 v-col-lg-8 v-col-xl-10">
		<v-sheet
			border
			class="overflow-hidden"
			rounded
		>
			<v-lazy
				v-model="hasRendered"
				min-height="44"
			>
				<v-sheet class="overflow-hidden">
					<v-toolbar
						border="b"
						class="px-1"
						flat
						height="44"
					>
						<v-fade-transition hide-on-leave>
							<div v-if="showCode">
								<v-btn
									:active="template === 'template'"
									class="ma-1"
									size="small"
									@click="template = 'template'"
								>Template</v-btn>
								<v-btn
									:active="template === 'script'"
									class="ma-1"
									size="small"
									@click="template = 'script'"
								>Script</v-btn>
							</div>
						</v-fade-transition>
						<v-spacer />
						<v-btn
							density="comfortable"
							icon
							@click="showCodeBlocks"
						>
							<v-icon :icon="showCode ? 'mdi-chevron-up' : 'mdi:mdi-code-tags'"></v-icon>
						</v-btn>
					</v-toolbar>
				</v-sheet>
			</v-lazy>

			<div class="d-flex flex-column">
				<v-expand-transition v-if="hasRendered">
					<v-window
						v-show="showCode"
						v-model="template"
					>
						<v-window-item value="template">
							<v-theme-provider>
								<VCodeBlock
									:code="code.template"
									:highlightjs="codeBlockSettings.plugin === 'highlightjs'"
									lang="html"
									:prismjs="codeBlockSettings.plugin === 'prismjs'"
									:theme="codeBlockSettings.theme"
								>
								</VCodeBlock>
							</v-theme-provider>
						</v-window-item>
						<v-window-item value="script">
							<v-theme-provider>
								<VCodeBlock
									:code="code.script"
									:highlightjs="codeBlockSettings.plugin === 'highlightjs'"
									lang="html"
									:prismjs="codeBlockSettings.plugin === 'prismjs'"
									:theme="codeBlockSettings.theme"
								>
								</VCodeBlock>
							</v-theme-provider>
						</v-window-item>
					</v-window>
				</v-expand-transition>

				<v-theme-provider
					class="pb-2 pt-4 rounded-b"
					:class="showCode && 'border-t'"
					with-background
				>
					<v-col class="offset-md-4 offset-lg-3 offset-xl-4 v-col-sm-12 v-col-md-4 v-col-lg-6 v-col-xl-4">
						<slot name="default" />
					</v-col>
				</v-theme-provider>
			</div>
		</v-sheet>

	</v-col>
</template>

<script setup>

const emit = defineEmits(['closePicker']);
const props = defineProps({
	code: {
		required: true,
		type: Object,
	},
	codeBlockOptions: {
		required: true,
		type: Object,
	},
});

const codeBlockSettings = computed(() => props.codeBlockOptions);
const hasRendered = ref(true);
const showCode = ref(false);
const template = ref('template');

function showCodeBlocks() {
	showCode.value = !showCode.value;
	emit('closePicker', showCode.value);
}

const getHrefId = computed(() => {
	const id = props.code.name?.toLowerCase().replace(/\s+/g, '-');

	return `examples-${id}`;
})

</script>

<style lang="scss">
.v-code-block {
	pre {
		margin: 0 !important;
	}
}
</style>
