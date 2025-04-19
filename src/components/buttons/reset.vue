<script setup lang="ts">
const emit = defineEmits(["reset"]);

const resetForm = () => {
  emit("reset");
}
</script>

<template>
<div class="button reset" @click="resetForm">
  <slot></slot>
</div>
</template>

<style lang="scss" scoped>
@use "/src/assets/buttons.scss";
.button {
  background-color: #9a5e5e;
}
</style>
