<script setup lang="ts">
import formComponent from "../components/form.vue";
import type { selectField, textField, booleanField } from '../components/form.vue';

const mokedFormFields: Array<selectField | textField | booleanField> = [
  {
    type: "select",
    label: "Опыт работы",
    options: [
      "Меньше года",
      "1-3 года",
      "6 лет и более",
    ],
    value: "",
    required: true,
    name: "experience"
  },
  {
    type: "textarea",
    label: "О себе",
    value: "",
    required: true,
    name: "aboutMe"
  },
  {
    type: "textarea",
    label: "О прошлом месте работы",
    value: "",
    required: false,
    name: "aboutLastWork"
  },
  {
    type: "checkbox",
    label: "Ознакомлен с вакансией",
    value: false,
    required: true,
    name: "familiarVacancy"
  },
  {
    type: "checkbox",
    label: "Ознакомлен с обязанностями",
    value: false,
    required: true,
    name: "familiarResponsabilities"
  },
  {
    type: "string",
    label: "Имя",
    value: "",
    required: true,
    name: "firstName",
  },
  {
    type: "string",
    label: "Фамилия",
    value: "",
    required: true,
    name: "secondName",
  },
  {
    type: "string",
    label: "Отчество",
    value: "",
    required: false,
    name: "lastName",
  },
  {
    type: "select",
    label: "Гражданство",
    options: [
      "Российская Федерация",
      "Республика Беларусь",
      "Иное",
    ],
    value: "",
    required: false,
    name: "citizenship"
  },
  {
    type: "string",
    label: "Контакты",
    value: "",
    required: false,
    name: "contacts",
  },
];

const mokedFormSceleton: Array<Array<string>> = [
  ["firstName", "secondName", "lastName"],
  ["citizenship", "contacts"],
  ["aboutMe"],
  ["aboutLastWork"],
  ["experience"],
  ["familiarVacancy", "familiarResponsabilities"]
];
</script>

<template>
  <form-component :formfields="mokedFormFields" :formSceleton="mokedFormSceleton"></form-component>
</template>