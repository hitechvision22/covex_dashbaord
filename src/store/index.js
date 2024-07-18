import { createStore } from "vuex";
import VuexReset from "@ianwalter/vuex-reset";

const store = createStore({
  plugins: [VuexReset()],
  state: {
    api: "https://api.covoiturageexpress.com/api/",
    apifile: "https://api.covoiturageexpress.com/",
    // api: "http://192.168.0.101:8000/api/",
    // apifile: "http://192.168.0.101:8000/",
    config: {
      headers: { Authorization: `Bearer ${localStorage.getItem("jwtToken")}` },
    },
    dashbaord:'',
    users:[],
    reservations:[],
    user:[],
    transactions:[],
    montantFrais:0
  },
  mutations: {
    reset() {},
  },
  actions: {},
});

export default store;