<template>
  <v-col
    class="text-center"
    cols="12"
  >
    This is a clickable <strong style="cursor: pointer;">strong</strong> DOM element

    <VEasterEggTrigger
      :pattern="['click']"
      target="strong"
      type="click"
      @triggered="triggered"
    />
  </v-col>

  <v-col
    class="text-center egg-triggered"
    :class="{ active: showActiveClass }"
    cols="12"
  >
    <code class="ic">strong</code> DOM element clicked
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
  This is a clickable <strong style="cursor: pointer;">strong</strong> DOM element

  <VEasterEggTrigger
    :pattern="['click']"
    target="strong"
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
		desc: 'Clicking on a DOM element to trigger an event.',
		name: 'DOM Element',
		script: scriptCode,
		template: templateCode,
	}
});
</script>
