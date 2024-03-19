import { defineStore } from 'pinia';

export const useApiDataStore = defineStore({
  id: 'apiDataStore',
  state: () => ({
    apiData: [], // 初始状态为空数组
  }),
  actions: {
    setApiData(data) {
      // 设置 API 数据
      this.apiData = data;
    },
  },
  getters: {
    getApiData() {
      // 获取 API 数据
      return this.apiData;
    },
  },
});