<template>
  <v-col
    class="text-center"
    cols="12"
  >
    Konami Code: ↑ ↑ ↓ ↓ ← → ← → b a
  </v-col>

  <v-col
    class="text-center egg-triggered"
    :class="{ active: showActiveClass }"
    cols="12"
  >
    Konami Code Triggered
  </v-col>

  <VEasterEggTrigger @triggered="triggered" />
</template>

<script setup>
const emit = defineEmits(['triggered']);
const showActiveClass = ref(false);


function triggered() {
	showActiveClass.value = true;
	emit('triggered');
}

const templateCode = `<template>
  <VEasterEggTrigger @triggered="easterEggTriggered" />
</template>
`;

const scriptCode = `\<script setup\>
  function easterEggTriggered() {
    //... do something magical
  }
\</script\>`;

defineExpose({
	exampleCode: {
		desc: 'Using the konami code to trigger an event. This is the default pattern.',
		name: 'Konami Code',
		script: scriptCode,
		template: templateCode,
	}
});
</script>
