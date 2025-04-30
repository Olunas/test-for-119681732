<script setup lang="ts">
import { onMounted } from "vue";
import fields from "../components/fields";
import submitButton from "../components/buttons/submit.vue";
import resetButton from "../components/buttons/reset.vue";
import store from "@/store";
import SelectField from "./fields/selectField.vue";

export interface selectField {
  type: "select",
  options: Array<string>,
  value: string,
  label: string,
  required: boolean,
  name: string,
};

export interface textField {
  type: "string" | "textarea",
  value: string,
  label: string,
  required: boolean,
  name: string,
};

export interface booleanField {
  type: "checkbox",
  value: boolean,
  label: string,
  required: boolean,
  name: string,
};

const props = defineProps({
  formfields: {
    type: Array<selectField | textField | booleanField>,
    required: true,
  },
  formSceleton: {
    type: Array<Array<string>>,
    required: true,
  },
})

onMounted(() => {
  store.commit("deleteCurrentFormFIelds");
  props.formfields.forEach((field: selectField | textField | booleanField) => {
    store.commit("initialFormField", {
      val: field.value,
      name: field.name,
      required: field.required,
    })
  });
});

const getFieldByName = (name: string) => {
  const field = props.formfields.find(item => item.name === name);

  if (field === undefined) {
    throw new TypeError('The value was promised to always be there!');
  }

  return field;
};

const getOptions = (name: string) => {
  const field = props.formfields.find(item => item.name === name);

  if (field === undefined) {
    throw new TypeError('The value was promised to always be there!');
  }

  if (field.type === "select") {
    return field.options;
  } else {
    return undefined;
  }
};

const getFieldComponent = (key: "string" | "select" | "checkbox" | "textarea") => {
  return fields[key];
};

const formIsInvalid = () => {
  let formInvalid: boolean = false;
  const requiredFields = props.formfields.filter(field => field.required);
  requiredFields.forEach(field => {
    if (field.type === "checkbox") {
      if (store.state.currentForm[field.name].value === false) formInvalid = true;
    } else if (field.type === "select") {
      if (store.state.currentForm[field.name].value === null) formInvalid = true;
    } else {
      if (store.state.currentForm[field.name].value.length === 0) formInvalid = true;
    }
  })
  return formInvalid
};

const submitForm = () => {
  let msg: Array<string> = [];
  if (formIsInvalid()) {
    alert("Заполните обязателньые поля")
  } else {
    props.formfields.forEach(field => {
      msg.push(`${field.label}: ${store.state.currentForm[field.name].value}`)
    });
    alert(`Дата формы:\n${msg.join("\n")}`)
  }
};

const resetForm = () => {
  props.formfields.forEach(field => {
    let emptyVal: string | null | boolean = "";
    if (field.type === "checkbox") {
      emptyVal = false;
    }
    if (field.type === "select") {
      emptyVal = null;
    }
    store.commit("updateFormField", {
      val: emptyVal,
      name: field.name,
      required: field.required,
    })
  });
};
</script>

<template>
  <form>
    <div class="form-fields-block">
      <div class="form-fields-block-item" v-for="block in props.formSceleton" :key="block.join(' ')">
        <component
          v-for="blockItem in block" 
          :key="blockItem" 
          :is="getFieldComponent(getFieldByName(blockItem).type)"
          :name="getFieldByName(blockItem).name"
          :value="getFieldByName(blockItem).value"
          :options="getOptions(blockItem)"
          :initialValue="getFieldByName(blockItem).value"
          :required="getFieldByName(blockItem).required"
        >
          {{ getFieldByName(blockItem).label }}
        </component>
      </div>
    </div>
    <div class="form-buttons-block">
      <submit-button @submit="submitForm">Применить</submit-button>
      <reset-button @reset="resetForm">Отменить</reset-button>
    </div>
  </form>
</template>

<style lang="scss" scoped>
  form {
    width: 720px;
    margin: 25px auto;
    padding: 25px;
    box-shadow: 5px 5px 20px -10px hsl(160, 100%, 37%);

    .form-fields-block {
      display: flex;
      flex-direction: column;

      &-item {
        display: flex;
        justify-content: space-between;
        flex-flow: row nowrap;
        gap: 15px;
        margin-bottom: 20px;

        > div{
          flex-grow: 1;
          width: 100%;
        }
      }
    }

    .form-buttons-block {
      display: flex;
      justify-content: right;
      gap: 15px;
    }
  }
</style>

