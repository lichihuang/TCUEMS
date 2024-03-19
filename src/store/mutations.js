import { defineStore } from 'pinia';

export const useApiDataStore = defineStore('apiDataStore', {
  state: () => ({
    apiData: null,
  }),

  mutations: {
    setApiData(data) {
      this.apiData = data;
    },
  },
});