<template>
  <v-col
    class="text-center"
    cols="12"
  >
    <v-btn
      class="double-click-target"
      color="primary"
      :disabled="showActiveClass"
    >
      Double Click Me
    </v-btn>

    <VEasterEggTrigger
      :pattern="['dblclick']"
      target=".double-click-target"
      type="dblclick"
      @triggered="triggered"
    />
  </v-col>

  <v-col
    class="text-center egg-triggered"
    :class="{ active: showActiveClass }"
    cols="12"
  >
    Class element double clicked
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
  <v-btn class="class-target">
    Double Click Me
  </v-btn>

  <VEasterEggTrigger
    :pattern="['dblclick']"
    target=".class-target"
    type="dblclick"
    @triggered="easterEggTriggered"
  />
</template>
`;

const scriptCode = `\<script setup\>
  function easterEggTriggered() {
    //... do something magical
  }
\</script\>`;

defineExpose({
	exampleCode: {
		desc: 'Double clicking on an element Class to trigger an event.',
		name: 'Double Click',
		script: scriptCode,
		template: templateCode,
	}
});
</script>
