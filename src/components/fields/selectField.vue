<script setup lang="ts">
import { computed } from "vue";
import store from "@/store";

const props = defineProps({
  name: {
    type: String,
    required: true,
  },
  options: {
    type: Array,
    default: () => [],
  },
  initialValue: {
    type: String,
    default: () => "",
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
    console.log(newValue);
    store.commit("updateFormField", {name: props.name, val: newValue});
  }
})
</script>

<template>
<div class="select-field">
  <label class="field-label">
    <slot></slot>
    <span v-if="required">*</span>
  </label>
  <select v-model="value">
    <option v-show="false"></option>
    <option v-for="option in options" :key="option" :value="option">{{ option }}</option>
  </select>
</div>
</template>

<style lang="scss" scoped>
@use "/src/assets/fields.scss";

.select-field {
  width: 100%;

  select {
    width: 100%;
    height: 40px;
    border: 1px solid hsl(160, 100%, 37%);
    position: relative;
    padding: 0 10px;

    &:focus-visible {
      outline: none;
    }
  }
}
</style>