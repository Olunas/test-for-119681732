<script setup lang="ts">
import { computed } from "vue";
import store from "@/store";

const props = defineProps({
  name: {
    type: String,
    required: true,
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
    store.commit("updateFormField", {name: props.name, val: newValue})
  }
})
</script>

<template>
<div class="textarea-field">
  <label>
    <slot></slot>
    <span v-if="required">*</span>
  </label>

  <textarea v-model="value" rows="5" />
</div>
</template>

<style lang="scss" scoped>
@use "/src/assets/fields.scss";

textarea {
  width: 100%;
  max-width: 100%;
  min-width: 100%;
  max-height: 200px;
  min-height: 105px;
  line-height: 20px;
  padding: 10px;
  border: 1px solid hsl(160, 100%, 37%);

  &:focus-visible {
    outline: none;
  }
}
</style>
