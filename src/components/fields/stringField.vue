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
  <div class="string-field">
    <label class="field-label">
      <slot></slot>
      <span v-if="required">*</span>
    </label>
    <input v-model="value" name="sring" value="123" />
  </div>
</template>

<style lang="scss" scoped>
@use "/src/assets/fields.scss";

.string-field {
  width: 100%;

  input {
    width: 100%;
    height: 40px;
    border: 1px solid hsl(160, 100%, 37%);
    padding: 0 10px;

    &:focus-visible {
      outline: none;
    }
  }
}
</style>
