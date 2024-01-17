<template>
  <v-col
    class="text-center"
    cols="12"
  >
    <v-btn
      class="three-click-target"
      color="primary"
      :disabled="showActiveClass"
    >
      Click Me 3 times
    </v-btn>

    <VEasterEggTrigger
      :pattern="['click', 'click', 'click']"
      target=".three-click-target"
      type="click"
      @triggered="triggered"
    />
  </v-col>

  <v-col
    class="text-center egg-triggered"
    :class="{ active: showActiveClass }"
    cols="12"
  >
    Class element clicked 3 times
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
  <v-btn class="three-click-target">
    Click Me 3 times
  </v-btn>

  <VEasterEggTrigger
    :pattern="['click', 'click', 'click']"
    target=".three-click-target"
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
		desc: 'Clicking on an element Class to trigger an event.',
		name: 'Element Class',
		script: scriptCode,
		template: templateCode,
	}
});
</script>
