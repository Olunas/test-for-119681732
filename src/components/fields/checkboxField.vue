<script setup lang="ts">
import { computed } from "vue";
import store from "@/store";

const props = defineProps({
  name: {
    type: String,
    required: true,
  },
  initialValue: {
    type: Boolean,
    default: () => false,
  },
  required: {
    type: Boolean,
    default: () => false,
  }
})

const value = computed({
  get() {
    return store.state.currentForm[props.name]?.value;
  },
  set(newValue) {
    store.commit("updateFormField", {name: props.name, val: newValue})
  }
})
</script>

<template>
<div class="checkbox-field">
  <label>
    <slot></slot>
    <span v-if="required">*</span>
  </label>

  <input v-model="value" type="checkbox" />
</div>
</template>

<style lang="scss" scoped>
@use "/src/assets/fields.scss";
</style>