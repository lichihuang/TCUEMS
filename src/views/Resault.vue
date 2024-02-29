<template>
  <BoxModelComponent />
  <div>
    <Header />
  </div>
  <div class="col-md-10 col-lg-5" style="margin-top: 9%; margin-left: 29%">
    <h4 class="mb-3" style="margin-top: -5.5%; text-align: center">期中預警通知列印</h4>
    <h5 class="mb-3" style="margin-top: -1.5%; text-align: center">查詢結果</h5>
    <hr class="my-4" />
  </div>
  <div class="table-responsive">
    <table class="table table-striped table-sm7 mx-auto" style="width: 90%">
      <thead>
        <tr>
          <th></th>
          <th class="text-center">選擇列印</th>
          <th>學生</th>
          <th>期中預警紀錄</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>1</td>
          <td class="text-center"><input type="checkbox" /></td>
          <td>ipsum</td>
          <td>dolor</td>
        </tr>
      </tbody>
    </table>
  </div>
  <nav aria-label="Page navigation example" class="pagination-container">
    <ul class="pagination">
      <li class="page-item">
        <a class="page-link" href="#" aria-label="Previous">
          <span aria-hidden="true">&laquo;</span>
        </a>
      </li>
      <li class="page-item"><a class="page-link" href="#">1</a></li>
      <li class="page-item"><a class="page-link" href="#">2</a></li>
      <li class="page-item"><a class="page-link" href="#">3</a></li>
      <li class="page-item">
        <a class="page-link" href="#" aria-label="Next">
          <span aria-hidden="true">&raquo;</span>
        </a>
      </li>
    </ul>
  </nav>
  <CopyrightNotice />
  <a href="https://lordicon.com/" class="icon-address">Icons by Lordicon.com</a>
</template>

<script>
/* import { defineComponent } from "@vue/composition-api"; */

import Header from "../components/Header.vue";
import BoxModelComponent from "../components/BoxModelComponent.vue";
import CopyrightNotice from "../components/CopyrightNotice.vue";

export default {
  name: "Resault",
  components: {
    Header,
    BoxModelComponent,
    CopyrightNotice,
  },
  data() {
    return {
      currentPage: 1,
      itemsPerPage: 10, // 初始值，將在 mounted 時根據實際情況重新計算
      totalItems: 0,
      // 其他的資料和資料庫連接相關的變數
    };
  },
  methods: {
    // 其他方法和資料庫相關的操作
    // ...

    handlePageChange(page) {
      this.currentPage = page;
      // 根據新的頁碼載入對應的資料
      // ...
    },
  },
  computed: {
    paginatedData() {
      const startIndex = (this.currentPage - 1) * this.itemsPerPage;
      const endIndex = startIndex + this.itemsPerPage;
      return /* 你的資料陣列，根據分頁計算的範圍截取資料 */;
    },
    totalPages() {
      return Math.ceil(this.totalItems / this.itemsPerPage);
    },
  },
  mounted() {
    // 在 mounted 階段計算每頁顯示的資料數
    this.calculateItemsPerPage();
  },
  watch: {
    // 監聽 totalItems 的變化，當 totalItems 變化時重新計算每頁顯示的資料數
    totalItems() {
      this.calculateItemsPerPage();
    },
  },
  methods: {
    calculateItemsPerPage() {
      // 假設每行資料的平均高度為 50px
      const averageRowHeight = 50;
      // 根據實際情況計算每頁顯示的資料數
      this.itemsPerPage = Math.floor(window.innerHeight / averageRowHeight);
    },
  },
  setup() {},
};
</script>

<style scoped>
.table th:first-child,
.table td:first-child {
  width: 1%; /* 設定你想要的寬度 */
}
.table th:second-child,
.table td:second-child {
  width: 1%; /* 設定你想要的寬度 */
}

.table th:nth-child(2),
.table td:nth-child(2) {
  width: 15%; /* 設定第二列的寬度 */
}

.table th:nth-child(3),
.table td:nth-child(3) {
  width: 20%; /* 設定第三列的寬度 */
}

.table th:nth-child(4),
.table td:nth-child(4) {
  width: 64%; /* 設定第四列的寬度 */
}
.icon-address {
  font-size: 7px;
  position: fixed;
  top: 905px;
  left: 1838px;
}
.pagination-container {
  display: flex;
  justify-content: center;
  margin-top: 20px; /* 根據需要調整往下的距離 */
}
</style>
