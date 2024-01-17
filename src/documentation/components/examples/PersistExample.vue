<template>
  <v-col
    class="text-center"
    cols="12"
  >
    <v-btn
      class="persist-target"
      color="primary"
    >
      Click Me
    </v-btn>

    <VEasterEggTrigger
      :pattern="['click']"
      persist
      target=".persist-target"
      type="click"
      @triggered="triggered"
    />
  </v-col>

  <v-col
    class="text-center egg-triggered"
    :class="{ active: showActiveClass }"
    cols="12"
  >
    Listener not destroyed
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
    Click Me
  </v-btn>

  <VEasterEggTrigger
    :pattern="['click']"
    persist
    target=".destroy-target"
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
		desc: 'The listener is not destroyed after the event is triggered.',
		name: 'Persist Prop',
		script: scriptCode,
		template: templateCode,
	}
});
</script>
