import { defineStore } from 'pinia';

export const useApiDataStore = defineStore({
  id: 'apiDataStore',
  state: () => ({
    apiData: [], // 初始狀態為空數組
  }),
  actions: {
    setApiData(data) {
      // 設置 API 數據
      this.apiData = data;
    },
  },
  getters: {
    getApiData() {
      // 返回 API 數據
      return this.apiData;
    },
  },
});