<script setup lang="ts">
const emit = defineEmits(["submit"]);

const submitForm = () => {
  emit("submit");
}
</script>

<template>
<div class="button submit" @click="submitForm">
  <slot></slot>
</div>
</template>

<style lang="scss" scoped>
@use "/src/assets/buttons.scss";

.button {
  background-color: hsl(160, 100%, 37%);
}
</style>
