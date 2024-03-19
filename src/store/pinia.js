export function createStore(options) {
    return {
      // 定義 store 的狀態、動作和 getter
      state: options.state || {},
      actions: options.actions || {},
      getters: options.getters || {},
    };
  }