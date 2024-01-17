<template>
  <v-col
    class="text-center"
    cols="12"
  >
    Pattern Code: u n i c o r n
  </v-col>

  <v-col
    class="text-center egg-triggered"
    :class="{ active: showActiveClass }"
    cols="12"
  >
    Pattern Triggered
  </v-col>

  <VEasterEggTrigger
    :pattern="['u', 'n', 'i', 'c', 'o', 'r', 'n']"
    @triggered="triggered"
  />
</template>

<script setup>
const emit = defineEmits(['triggered']);
const showActiveClass = ref(false);


function triggered() {
	showActiveClass.value = true;
	emit('triggered');
}

const templateCode = `<template>
  <VEasterEggTrigger
  :pattern="['u', 'n', 'i', 'c', 'o', 'r', 'n']"
  @triggered="easterEggTriggered" />
</template>
`;

const scriptCode = `\<script setup\>
  function easterEggTriggered() {
    //... do something magical
  }
\</script\>`;

defineExpose({
	exampleCode: {
		desc: 'Using the supplied pattern to trigger an event.',
		name: 'Keypress Pattern',
		script: scriptCode,
		template: templateCode,
	}
});
</script>
