import { createStore } from "vuex";

interface field {
  name: string,
  val: string | null | boolean,
};

interface initialField {
  name: string,
  val: string | null | boolean,
  required: boolean,
}

const store = createStore({
  state: {
    currentForm: {}
  },
  mutations: {
    initialFormField (state: any, data: initialField) {
      state.currentForm[data.name] = {
        value: data.val,
        required: data.required,
      };
    },
    updateFormField (state: any, data: field ){
      state.currentForm[data.name].value = data.val;
    },
    deleteCurrentFormFIelds (state: any) {
      state.currentForm = {};
    }
  },
});

export default store;