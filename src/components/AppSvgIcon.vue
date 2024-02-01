<script setup>
import { computed, defineAsyncComponent } from 'vue';
const props = defineProps({
  name: {
    type: String,
    required: true,
  }
});

const icon = computed(() => {
  return defineAsyncComponent(() =>  import(`/src/assets/icons/${ props.name }.svg`));
});
</script>

<template>
  <component :is="icon" class="iconFill" />
</template>

<style scoped lang="scss">
.iconFill {
  margin-right: 8px;
}
</style>
