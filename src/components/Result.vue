<template>
  <head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <meta name="description" content="" />
    <meta name="author" content="Mark Otto, Jacob Thornton, and Bootstrap contributors" />
    <meta name="generator" content="Hugo 0.79.0" />

    <meta name="theme-color" content="#7952b3" />
    <link href="form-validation.css" rel="stylesheet" />
  </head>
  <body class="bg-light">
    <div class="container col-md-12 col-lg-12">
      <main>
        <div class="py-5 text-center">
          <h3>期中預警通知列印</h3>
          <hr />
        </div>
        <section>
          <div class="card">
            <div class="card-header">
              <!----><!----><!----><!----><!----><!----><!----><!---->
              <div class="form-outline" style="">
                <input class="form-control" id="MDBInput-276894" /><label
                  class="form-label"
                  for="MDBInput-276894"
                  >Search</label
                ><!----><!----><!----><!---->
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
                              }}<br />{{ item.w_std_no }}<br />{{ item.chi_name
                              }}<br />狀態：{{ item.st_state
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
                <!----><!---->
                <div>
                  <!-- <nav aria-label="Page navigation example" class="pagination-container">
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
                  </nav> -->
                  <div class="el-pagination k-table-pagination mt-1" with-page="data">
                    <div class="el-pagination__rightwrapper">
                      <span class="el-pagination__sizes is-first"
                        ><div class="el-select el-select--default">
                          <div
                            class="el-select__wrapper el-tooltip__trigger el-tooltip__trigger"
                            tabindex="-1"
                          >
                            <!--v-if-->
                            <div class="el-select__selection">
                              <!--v-if-->
                              <div
                                class="el-select__selected-item el-select__input-wrapper is-hidden"
                              >
                                <input
                                  type="text"
                                  class="el-select__input is-default"
                                  autocomplete="off"
                                  role="combobox"
                                  readonly=""
                                  spellcheck="false"
                                  aria-activedescendant=""
                                  aria-controls="el-id-9798-34"
                                  aria-expanded="false"
                                  aria-autocomplete="none"
                                  aria-haspopup="listbox"
                                  id="el-id-9798-41"
                                  style="width: 11px"
                                /><!--v-if-->
                              </div>
                              <div
                                class="el-select__selected-item el-select__placeholder"
                              >
                                <span>10/page</span>
                              </div>
                            </div>
                            <div class="el-select__suffix">
                              <i class="el-icon el-select__caret el-select__icon"
                                ><svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  viewBox="0 0 1024 1024"
                                >
                                  <path
                                    fill="currentColor"
                                    d="M831.872 340.864 512 652.672 192.128 340.864a30.592 30.592 0 0 0-42.752 0 29.12 29.12 0 0 0 0 41.6L489.664 714.24a32 32 0 0 0 44.672 0l340.288-331.712a29.12 29.12 0 0 0 0-41.728 30.592 30.592 0 0 0-42.752 0z"
                                  ></path></svg></i
                              ><!--v-if--><!--v-if-->
                            </div>
                          </div>
                        </div></span
                      ><button
                        type="button"
                        class="btn-prev"
                        aria-label="Go to previous page"
                        aria-disabled="false"
                      >
                        <i class="el-icon"
                          ><svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 1024 1024"
                          >
                            <path
                              fill="currentColor"
                              d="M609.408 149.376 277.76 489.6a32 32 0 0 0 0 44.672l331.648 340.352a29.12 29.12 0 0 0 41.728 0 30.592 30.592 0 0 0 0-42.752L339.264 511.936l311.872-319.872a30.592 30.592 0 0 0 0-42.688 29.12 29.12 0 0 0-41.728 0z"
                            ></path></svg
                        ></i>
                      </button>
                      <ul class="el-pager">
                        <li
                          class="number"
                          aria-current="false"
                          aria-label="page 1"
                          tabindex="0"
                        >
                          1
                        </li>
                        <!--v-if-->
                        <li
                          class="is-active number"
                          aria-current="true"
                          aria-label="page 2"
                          tabindex="0"
                        >
                          2
                        </li>
                        <li
                          class="number"
                          aria-current="false"
                          aria-label="page 3"
                          tabindex="0"
                        >
                          3
                        </li>
                        <li
                          class="number"
                          aria-current="false"
                          aria-label="page 4"
                          tabindex="0"
                        >
                          4
                        </li>
                        <li
                          class="number"
                          aria-current="false"
                          aria-label="page 5"
                          tabindex="0"
                        >
                          5
                        </li>
                        <li
                          class="number"
                          aria-current="false"
                          aria-label="page 6"
                          tabindex="0"
                        >
                          6
                        </li>
                        <li
                          class="more btn-quicknext el-icon"
                          tabindex="0"
                          aria-label="Next 5 pages"
                        >
                          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1024 1024">
                            <path
                              fill="currentColor"
                              d="M176 416a112 112 0 1 1 0 224 112 112 0 0 1 0-224m336 0a112 112 0 1 1 0 224 112 112 0 0 1 0-224m336 0a112 112 0 1 1 0 224 112 112 0 0 1 0-224"
                            ></path>
                          </svg>
                        </li>
                        <li
                          class="number"
                          aria-current="false"
                          aria-label="page 39"
                          tabindex="0"
                        >
                          39
                        </li>
                      </ul>
                      <button
                        type="button"
                        class="btn-next"
                        aria-label="Go to next page"
                        aria-disabled="false"
                      >
                        <i class="el-icon"
                          ><svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 1024 1024"
                          >
                            <path
                              fill="currentColor"
                              d="M340.864 149.312a30.592 30.592 0 0 0 0 42.752L652.736 512 340.864 831.872a30.592 30.592 0 0 0 0 42.752 29.12 29.12 0 0 0 41.728 0L714.24 534.336a32 32 0 0 0 0-44.672L382.592 149.376a29.12 29.12 0 0 0-41.728 0z"
                            ></path></svg
                        ></i></button
                      ><span class="el-pagination__jump" disabled="false"
                        ><span class="el-pagination__goto">Go to</span>
                        <div
                          class="el-input el-input--default el-pagination__editor is-in-pagination"
                        >
                          <!-- input --><!-- prepend slot --><!--v-if-->
                          <div class="el-input__wrapper" tabindex="-1">
                            <!-- prefix slot --><!--v-if--><input
                              class="el-input__inner"
                              min="1"
                              max="39"
                              type="number"
                              autocomplete="off"
                              tabindex="0"
                              aria-label="Page"
                              id="el-id-9798-42"
                            /><!-- suffix slot --><!--v-if-->
                          </div>
                          <!-- append slot --><!--v-if-->
                        </div>
                        <span class="el-pagination__classifier"></span></span
                      ><span class="el-pagination__total is-last" disabled="false"
                        >Total 390</span
                      >
                    </div>
                  </div>
                  <!---->
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
    <CopyrightNotice />
    <a href="https://lordicon.com/" class="icon-address">Icons by Lordicon.com</a>
  </body>
</template>

<script>
import { ref, computed, onMounted } from "vue";
import { useRoute } from "vue-router";
import { useApiDataStore } from "../store/apiDataStore";

export default {
  name: "ResultTemp",
  props: ["searchData"],
  setup(props) {
    const currentPage = ref(1);
    const itemsPerPage = ref(10);
    const totalItems = ref(0);
    const totalPages = ref(1);
    const resultTitle = ref("");
    const printSelection = ref([]);
    const searchBox = ref("");
    const filteredPages = ref([]);
    const isInputFocused = ref(false);

    const apiDataStore = useApiDataStore(); // 使用 apiDataStore

    onMounted(async () => {
      const route = useRoute();
      const semester = route.params.semester;
      const year = route.params.year;

      if (semester && year) {
        resultTitle.value = `${year}學年第${semester}學期期中預警學生`;
      }
    });

    const apiData = computed(() => apiDataStore.getApiData); // 從 apiDataStore 中取得資料

    const goToPage = (page) => {
      if (page < 1 || page > totalPages.value) return; // 防止超出範圍

      currentPage.value = page;
    };

    const paginatedData = computed(() => {
      if (!apiData.value) return []; // 空值檢查

      const startIndex = (currentPage.value - 1) * itemsPerPage.value;
      const endIndex = startIndex + itemsPerPage.value;
      return apiData.value.slice(startIndex, endIndex); // 從 apiData 中取得分頁資料
    });

    // 計算 total pages
    computed(() => {
      if (apiData.value) {
        totalPages.value = Math.ceil(apiData.value.length / itemsPerPage.value);
      } else {
        totalPages.value = 1;
      }
    });

    // 更新 filteredPages
    computed(() => {
      filteredPages.value = Array.from({ length: totalPages.value }, (_, i) => i + 1);
    });

    const getSerialNumber = (index) => {
      return (currentPage.value - 1) * itemsPerPage.value + index + 1;
    };

    return {
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
      goToPage,
      getSerialNumber, // 确保在返回的对象中公开 getSerialNumber 函数
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

@media (min-width: 768px) {
  .bd-placeholder-img-lg {
    font-size: 3.5rem;
  }
}
</style>
