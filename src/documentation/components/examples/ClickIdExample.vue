<template>
  <v-col
    class="text-center"
    cols="12"
  >
    <v-btn
      id="id-target"
      color="primary"
      :disabled="showActiveClass"
    >
      Click Me
    </v-btn>

    <VEasterEggTrigger
      :pattern="['click']"
      target="#id-target"
      type="click"
      @triggered="triggered"
    />
  </v-col>

  <v-col
    class="text-center egg-triggered"
    :class="{ active: showActiveClass }"
    cols="12"
  >
    ID element clicked
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
  <v-btn id="id-target">
    Click Me
  </v-btn>

  <VEasterEggTrigger
    :pattern="['click']"
    target="#id-target"
    type="click"
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
		desc: 'Clicking on an element ID to trigger an event.',
		name: 'Element ID',
		script: scriptCode,
		template: templateCode,
	}
});
</script>
