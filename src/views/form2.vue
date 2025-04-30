<script setup lang="ts">
import formComponent from "../components/form.vue";
import type { selectField, textField, booleanField } from '../components/form.vue';

const mokedFormFields: Array<selectField | textField | booleanField> = [
  {
    type: "select",
    label: "Роль",
    options: [
      "Пользователь",
      "Админ",
      "Суперадмин",
    ],
    value: "Пользователь",
    required: true,
    name: "userRole"
  },
  {
    type: "textarea",
    label: "Описание",
    value: "В форму подставляются изначальные данные филдов",
    required: false,
    name: "userDescription"
  },
  {
    type: "checkbox",
    label: "Нужно подтверждение почты",
    value: true,
    required: false,
    name: "needConfirmation"
  },
  {
    type: "string",
    label: "Имя пользователя",
    value: "Себастиан",
    required: true,
    name: "userName",
  },
];

const mokedFormSceleton: Array<Array<string>> = [
  ["userName", "userRole"],
  ["needConfirmation"],
  ["userDescription"]
];
</script>

<template>
  <form-component :formfields="mokedFormFields" :formSceleton="mokedFormSceleton"></form-component>
</template>