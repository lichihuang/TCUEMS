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
        <Header />
        <div class="py-5 text-center">
          <h3>期中預警通知列印</h3>
          <hr />
        </div>
      </main>
    </div>
    <CopyrightNotice />
    <a href="https://lordicon.com/" class="icon-address">Icons by Lordicon.com</a>
  </body>
</template>

<script>
import { ref, computed, watch, onMounted } from "vue";
import { useRoute } from "vue-router";
import Header from "./Header.vue";
import CopyrightNotice from "./CopyrightNotice.vue";
import axios from "axios";

export default {
  name: "Result",
  props: ["searchData"],
  components: {
    Header,
    CopyrightNotice,
  },
  setup(props) {
    const currentPage = ref(1);
    const itemsPerPage = ref(10);
    const totalItems = ref(0);
    const totalPages = ref(1);
    const resultTitle = ref("");
    const apiData = ref([]);
    const printSelection = ref([]);

    const handlePageChange = (page) => {
      currentPage.value = page;
    };

    const goToPage = (page) => {
      currentPage.value = page;
    };

    const calculateItemsPerPage = () => {
      const averageRowHeight = 50;
      itemsPerPage.value = Math.floor(window.innerHeight / averageRowHeight);
    };

    onMounted(async () => {
      calculateItemsPerPage();

      const route = useRoute();
      const semester = route.params.semester;
      const year = route.params.year;

      if (semester && year) {
        resultTitle.value = `${year}學年第${semester}學期期期中預警學生`;
      }

      const requestData = {
        // 根据实际需要设置请求的数据
      };

      try {
        const response = await axios.post(
          "http://localhost:5256/api/SemesterWarning/Search",
          requestData
        );
        apiData.value = response.data;
        totalItems.value = response.data.length;
        totalPages.value = Math.ceil(totalItems.value / itemsPerPage.value);
        printSelection.value = Array(props.searchData.length).fill(false);
      } catch (error) {
        console.error("Error during API request:", error);
        alert("搜尋失敗，請稍後再試。");
      }
    });

    const paginatedData = computed(() => {
      const startIndex = (currentPage.value - 1) * itemsPerPage.value;
      const endIndex = startIndex + itemsPerPage.value;
      return apiData.value.slice(startIndex, endIndex);
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
      printSelection,
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

element.style {
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
使用者代理程式樣式表 :root {
  view-transition-name: root;
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
  margin-top: 7%;
  margin-bottom: 20%;
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

@media (min-width: 768px) {
  .bd-placeholder-img-lg {
    font-size: 3.5rem;
  }
}
</style>
