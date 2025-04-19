<script setup lang="ts">
import formComponent from "../components/form.vue";

interface selectField {
  type: string,
  options: Array<string>,
  value: string | null,
  label: string,
  required: boolean,
  name: string,
};

interface textField {
  type: string,
  value: string,
  label: string,
  required: boolean,
  name: string,
};

interface booleanField {
  type: string,
  value: boolean,
  label: string,
  required: boolean,
  name: string,
};

const mokedFormFields: Array<selectField | textField | booleanField> = [
  {
    type: "select",
    label: "Опыт работы",
    options: [
      "Меньше года",
      "1-3 года",
      "6 лет и более",
    ],
    value: "6 лет и более",
    required: true,
    name: "experience"
  },
  {
    type: "textarea",
    label: "О себе",
    value: "Мне 26 лет, живу в городе Москва. На данный момент ищу работу с целью роста как разработчика, т.к. начинаю чувствовать стагнацию оставаясь на одном месте. \n \nИзучаю frontend разработку с 2017 года, конкретно работал в этом направлении более 6 лет. Коммерческий официальный опыт более 5 лет. Основной стек технологий в первую очередь Vue и Nuxt",
    required: true,
    name: "aboutMe"
  },
  {
    type: "textarea",
    label: "О прошлом месте работы",
    value: "Работаю в компании с 2021 года, за время работы перевели продукт с vue 2.0 до vue 2.7 с интеграцией некоторых микрофронтендов на vue 3.0. Внедрили сторибук, наладили единый кодстайл и строгую архитектуру. \n \nПомимо работы с легаси велась разработка новых компонентов с применением composition api, использовался canvas для работы с чертежами на плане этажа помещения. Работа с картами через api 2gis, создание единой формы и единого списка полей для него полностью кастомизируемых с данных бекенда",
    required: false,
    name: "aboutLastWork"
  },
  {
    type: "checkbox",
    label: "Ознакомлен с вакансией",
    value: true,
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
    value: "Краснов",
    required: true,
    name: "firstName",
  },
  {
    type: "string",
    label: "Фамилия",
    value: "Денис",
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
    value: "Российская Федерация",
    required: false,
    name: "citizenship"
  },
  {
    type: "string",
    label: "Контакты",
    value: "telegram — @olunas",
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