<template>
  <BoxModelComponent />
  <div>
    <Header />
  </div>
  <div class="col-md-10 col-lg-5" style="margin-top: 9%; margin-left: 29%">
    <h4 class="mb-3" style="margin-top: -5.5%; text-align: center">期中預警通知列印</h4>
    <h5 class="mb-3" style="margin-top: -1%; text-align: center">查詢結果</h5>
    <hr class="my-4" />
  </div>
  <h6 style="margin-top: 0%; text-align: center">{{ resultTitle }}</h6>
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
  <div>
    <nav aria-label="Page navigation example" class="pagination-container">
      <ul class="pagination">
        <li class="page-item">
          <a
            class="page-link"
            href="#"
            aria-label="Previous"
            @click="goToPage(currentPage - 1)"
            :disabled="currentPage === 1"
          >
            <span aria-hidden="true">&laquo;</span>
          </a>
        </li>

        <li class="page-item" v-for="page in filteredPages" :key="page">
          <a
            class="page-link"
            href="#"
            @click="goToPage(page)"
            :style="{
              color: currentPage === page ? '#4682b4' : 'black',
              textDecoration: currentPage === page ? 'underline' : 'none',
            }"
            :class="{ active: currentPage === page }"
            >{{ page }}</a
          >
        </li>

        <li class="page-item">
          <a
            class="page-link"
            href="#"
            aria-label="Next"
            @click="goToPage(currentPage + 1)"
            :disabled="currentPage === totalPages"
          >
            <span aria-hidden="true">&raquo;</span>
          </a>
        </li>
      </ul>
    </nav>
  </div>
  <CopyrightNotice />
  <a href="https://lordicon.com/" class="icon-address">Icons by Lordicon.com</a>
</template>

<script>
import { ref, computed, watch, onMounted } from "vue";
import { useRoute } from "vue-router"; // 引入 useRoute 方法
import Header from "../components/Header.vue";
import BoxModelComponent from "../components/BoxModelComponent.vue";
import CopyrightNotice from "../components/CopyrightNotice.vue";

export default {
  name: "Result",
  components: {
    Header,
    BoxModelComponent,
    CopyrightNotice,
  },
  setup() {
    const currentPage = ref(1);
    const itemsPerPage = ref(10);
    const totalItems = ref(0);
    const totalPages = ref(1);
    const resultTitle = ref("");

    const handlePageChange = (page) => {
      currentPage.value = page;
    };

    const goToPage = (page) => {
      currentPage.value = page;
    };

    const paginatedData = computed(() => {
      const startIndex = (currentPage.value - 1) * itemsPerPage.value;
      const endIndex = startIndex + itemsPerPage.value;
      return /* 你的数据数组，根据分页计算的范围截取数据 */;
    });

    const calculateItemsPerPage = () => {
      const averageRowHeight = 50;
      itemsPerPage.value = Math.floor(window.innerHeight / averageRowHeight);
    };

    onMounted(() => {
      calculateItemsPerPage();

      const route = useRoute();
      const semester = route.params.semester;
      const year = route.params.year;

      if (semester && year) {
        resultTitle.value = `${year}學年第${semester}学期期中預警學生`;
      }
    });

    watch(totalItems, () => {
      calculateItemsPerPage();
    });

    const filteredPages = computed(() => {
      return totalPages.value > 1
        ? Array.from({ length: totalPages.value }, (_, index) => index + 1)
        : [1];
    });

    return {
      currentPage,
      itemsPerPage,
      totalItems,
      totalPages,
      resultTitle,
      handlePageChange,
      goToPage,
      paginatedData,
      filteredPages,
    };
  },
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
/**/
.pagination-container .page-link[aria-label="Previous"],
.pagination-container .page-link[aria-label="Next"] {
  color: #4682b4;
  background-color: white;
  border-color: #ced4da;
}

/* Change color and background of page numbers */
.pagination-container .page-item .page-link {
  color: #4682b4;
  background-color: white;
  border-color: #ced4da;
}

/* Change background color of the active page */
.pagination-container .page-item.active .page-link {
  background-color: #4682b4;
  color: white;
  border-color: #ced4da;
}
</style>
