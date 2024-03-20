<template>
  <div class="container col-md-12 col-lg-12">
    <main>
      <div class="py-5 text-center">
        <h3>期中預警通知列印</h3>
        <hr />
      </div>
      <section>
        <div class="card">
          <div class="card-header">
            <div class="form-outline" style="">
              <input class="form-control" v-model="searchBox" />
              <label class="form-label">Search</label>
              <div class="form-notch">
                <div class="form-notch-leading" style="width: 9px"></div>
                <div class="form-notch-middle" style="width: 47.2px"></div>
                <div class="form-notch-trailing"></div>
              </div>
            </div>
          </div>
          <div class="card-body">
            <div
              class="datatable datatable-bordered datatable-striped"
              style="max-width: 100%"
            >
              <div
                class="datatable-inner table-responsive"
                style="overflow: auto; position: relative"
              >
                <div
                  class="ps ps--active-x"
                  style="width: 100%; height: 100%; background-color: inherit"
                >
                  <div class="table-responsive">
                    <table class="table table-striped table-sm7 mx-auto">
                      <thead>
                        <tr>
                          <th class="text-center">編號</th>
                          <th class="text-center">選擇列印</th>
                          <th>學生</th>
                          <th>期中預警紀錄</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr v-for="(item, index) in paginatedData" :key="index">
                          <td class="text-center">{{ getSerialNumber(index) }}</td>
                          <td class="text-center">
                            <input type="checkbox" v-model="printSelection[index]" />
                          </td>
                          <td>
                            {{ item.dept_name_s }}{{ item.degree }}{{ item.sw_class
                            }}<br />
                            {{ item.w_std_no }}<br />{{ item.chi_name }}<br />狀態：{{
                              item.st_state
                            }}<br />Date：<br />IP：<br />User：
                          </td>
                          <td>{{ item.w_smtr }}</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                  <div class="ps__rail-x" style="left: 0px; bottom: 0px; width: 792px">
                    <div
                      class="ps__thumb-x"
                      tabindex="0"
                      style="left: 0px; width: 701px"
                    ></div>
                  </div>
                  <div class="ps__rail-y" style="top: 0px; right: 0px">
                    <div
                      class="ps__thumb-y"
                      tabindex="0"
                      style="top: 0px; height: 0px"
                    ></div>
                  </div>
                </div>
              </div>
              <div>
                <div class="pagination">
                  <span class="rows-per-page">頁面筆數：</span>
                  <select v-model="itemsPerPage">
                    <option v-for="option in pageOptions" :key="option">
                      {{ option }}
                    </option>
                  </select>
                  <span
                    >&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{{ startIndex }}&nbsp;-&nbsp;{{
                      endIndex
                    }}&nbsp;of&nbsp;&nbsp;{{ totalItems }}&nbsp;&nbsp;</span
                  >
                  <button
                    class="pagination-button"
                    @click="prevPage"
                    :disabled="currentPage === 1"
                  >
                    &lt;
                  </button>
                  <button
                    class="pagination-button"
                    @click="nextPage"
                    :disabled="currentPage === totalPages"
                  >
                    &gt;
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  </div>
  <CopyrightNotice />
  <a href="https://lordicon.com/" class="icon-address">Icons by Lordicon.com</a>
</template>

<script>
import { ref, computed, onMounted, watch } from "vue";
import { useRoute } from "vue-router";
import { useApiDataStore } from "../store/apiDataStore";
import CopyrightNotice from "../components/CopyrightNotice.vue";

export default {
  name: "Result",
  components: {
    CopyrightNotice,
  },
  props: ["searchData"],
  setup(props) {
    const pageOptions = [10, 20, 30, 40, 50];
    const currentPage = ref(1);
    const itemsPerPage = ref(10);
    const totalItems = ref(100);
    const totalPages = computed(() => Math.ceil(totalItems.value / itemsPerPage.value));
    const resultTitle = ref("");
    const printSelection = ref([]);
    const searchBox = ref("");
    const filteredPages = ref([]);
    const isInputFocused = ref(false);
    const startIndex = ref(1);
    const endIndex = ref(0);

    const apiDataStore = useApiDataStore();

    const changePageSize = (value) => {
      itemsPerPage.value = parseInt(value);
    };

    onMounted(async () => {
      const route = useRoute();
      const semester = route.params.semester;
      const year = route.params.year;

      if (semester && year) {
        resultTitle.value = `${year}學年第${semester}學期期中預警學生`;
      }
    });

    const apiData = computed(() => apiDataStore.getApiData);

    const goToPage = (page) => {
      if (page < 1 || page > totalPages.value) return;

      currentPage.value = page;
    };

    const paginatedData = computed(() => {
      if (!apiData.value) return [];

      const startIndex = (currentPage.value - 1) * itemsPerPage.value;
      const endIndex = startIndex + itemsPerPage.value;
      return apiData.value.slice(startIndex, endIndex);
    });

    const getSerialNumber = (index) => {
      return (currentPage.value - 1) * itemsPerPage.value + index + 1;
    };

    watch(currentPage, () => {
      // Fetch data based on the current page
      // Assuming you have a method fetchDataForPage
      // fetchDataForPage(currentPage.value);
    });

    watch(apiData, () => {
      // Update total items count when data changes
      totalItems.value = apiData.value.length;
    });

    watch(totalItems, () => {
      // Recalculate total pages when total items change
      totalPages.value = Math.ceil(totalItems.value / itemsPerPage.value);
    });

    watch(totalPages, () => {
      // Update filtered pages array when total pages change
      filteredPages.value = Array.from({ length: totalPages.value }, (_, i) => i + 1);
    });

    watch([currentPage, itemsPerPage, totalItems], () => {
      calculateStartAndEndIndex();
    });

    function calculateStartAndEndIndex() {
      startIndex.value = (currentPage.value - 1) * itemsPerPage.value + 1;
      endIndex.value = Math.min(
        startIndex.value + itemsPerPage.value - 1,
        totalItems.value
      );
    }

    function handleSearch() {
      // 在這裡更新相符的資料筆數 totalItems 的值

      if (totalItems.value < itemsPerPage.value) {
        startIndex.value = 1;
        endIndex.value = totalItems.value;
      } else {
        startIndex.value = (currentPage.value - 1) * itemsPerPage.value + 1;
        endIndex.value = Math.min(
          currentPage.value * itemsPerPage.value,
          totalItems.value
        );
      }
    }

    const prevPage = () => {
      if (currentPage.value > 1) {
        currentPage.value--;
      }
    };

    const nextPage = () => {
      if (currentPage.value < totalPages.value) {
        currentPage.value++;
      }
    };

    return {
      pageOptions,
      currentPage,
      itemsPerPage,
      totalItems,
      totalPages,
      resultTitle,
      paginatedData,
      printSelection,
      searchBox,
      filteredPages,
      isInputFocused,
      changePageSize,
      goToPage,
      getSerialNumber,
      prevPage,
      nextPage,
      startIndex,
      endIndex,
    };
  },
};
</script>

<style scoped>
.bd-placeholder-img {
  font-size: 1.125rem;
  text-anchor: middle;
  -webkit-user-select: none;
  -moz-user-select: none;
  user-select: none;
}

@media (prefers-reduced-motion: no-preference) {
  :root {
    scroll-behavior: smooth;
  }
}
:root {
  --bs-blue: #0d6efd;
  --bs-indigo: #6610f2;
  --bs-purple: #6f42c1;
  --bs-pink: #d63384;
  --bs-red: #dc3545;
  --bs-orange: #fd7e14;
  --bs-yellow: #ffc107;
  --bs-green: #198754;
  --bs-teal: #20c997;
  --bs-cyan: #0dcaf0;
  --bs-white: #fff;
  --bs-gray: #6c757d;
  --bs-gray-dark: #343a40;
  --bs-primary: #0d6efd;
  --bs-secondary: #6c757d;
  --bs-success: #198754;
  --bs-info: #0dcaf0;
  --bs-warning: #ffc107;
  --bs-danger: #dc3545;
  --bs-light: #f8f9fa;
  --bs-dark: #212529;
  --bs-font-sans-serif: system-ui, -apple-system, "Segoe UI", Roboto, "Helvetica Neue",
    Arial, "Noto Sans", "Liberation Sans", sans-serif, "Apple Color Emoji",
    "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji";
  --bs-font-monospace: SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono",
    "Courier New", monospace;
  --bs-gradient: linear-gradient(
    180deg,
    rgba(255, 255, 255, 0.15),
    rgba(255, 255, 255, 0)
  );
}
*,
::after,
::before {
  box-sizing: border-box;
}
html[屬性樣式] {
  -webkit-locale: "en";
}
使用者代理程式樣式表 html {
  display: block;
}
*,
::after,
::before {
  box-sizing: border-box;
}
*,
::after,
::before {
  box-sizing: border-box;
}
.container {
  margin-top: 5.5%;
  margin-bottom: 7%;
}
.icon-address {
  font-size: 7px;
  position: fixed;
  top: 905px;
  left: 1838px;
}
.bd-callout-warning {
  --bd-callout-color: var(--bs-warning-text-emphasis);
  --bd-callout-bg: var(--bs-warning-bg-subtle);
  --bd-callout-border: var(--bs-warning-border-subtle);
}
.bd-callout {
  --bs-link-color-rgb: var(--bd-callout-link);
  --bs-code-color: var(--bd-callout-code-color);
  padding: 1.25rem;
  margin-top: 1.25rem;
  margin-bottom: 1.25rem;
  color: var(--bd-callout-color, inherit);
  background-color: var(--bd-callout-bg, var(--bs-gray-100));
  border-left: 0.25rem solid var(--bd-callout-border, var(--bs-gray-300));
}
td {
  line-height: 1.3;
  vertical-align: middle;
}
.table th:first-child,
.table td:first-child {
  width: 6%;
}
.table th:second-child,
.table td:second-child {
  width: 1%;
}

.table th:nth-child(2),
.table td:nth-child(2) {
  width: 15%;
}

.table th:nth-child(3),
.table td:nth-child(3) {
  width: 27%;
}

.table th:nth-child(4),
.table td:nth-child(4) {
  width: 55%;
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
  margin-top: 20px;
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
#app {
  font-family: Roboto, Helvetica, Arial, sans-serif;
}
.card {
  border: 0;
  box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.07), 0 4px 6px -2px rgba(0, 0, 0, 0.05);
  word-wrap: break-word;
  background-color: #fff;
  background-clip: border-box;
  border: 1px solid rgba(0, 0, 0, 0.125);
  border-radius: 0.5rem;
  margin-top: -3%;
}
.form-label.active {
  display: none;
  color: blue;
}

.pagination {
  display: flex;
  align-items: center;
}
.pagination select {
  margin: 0 5px;
  width: 5.5%;
  border: 1px solid #ccc;
  border-radius: 5px;
  height: 30px;
}
.pagination-button {
  border: none;
  background-color: transparent;
  font-size: 1.4rem;
}
.rows-per-page {
  font-size: 0.95rem;
  color: #343a40;
}
select {
  border: none;
  border-radius: 5px; /* 調整為你需要的圓角大小 */
  background-color: transparent; /* 可選，如果你想要去除背景色 */
  /* 其他樣式 */
  min-height: auto;
  padding-top: 0.33em;
  padding-bottom: 0.33em;
  padding-left: 0.75em;
  padding-right: 0.75em;
  border: 0;
  transition: all 0.2s linear;
}

@media (min-width: 768px) {
  .bd-placeholder-img-lg {
    font-size: 3.5rem;
  }
}
</style>
