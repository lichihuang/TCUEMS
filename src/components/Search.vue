<template>
  <BoxModelComponent />
  <div class="col-md-8 col-lg-5" style="margin-top: 9%; margin-left: 29%">
    <h4 class="mb-3" style="margin-top: 10%; text-align: center">期中預警通知列印</h4>
    <hr class="my-4" />
    <form
      class="needs-validation"
      novalidate=""
      style="margin-top: 3%; font-size: 1.2rem"
    >
      <div class="row g-3">
        <div class="row g-3">
          <div class="col-sm-3">
            <label
              for="EarlyWarningCourses"
              class="form-label label-text"
              style="margin-top: 3%; text-align: left; margin-left: 4%"
              >➢&nbsp;&nbsp;預警課程數&nbsp;&nbsp;≥</label
            >
          </div>
          <div class="col-sm-2">
            <input
              type="text"
              v-model="inputEarlyWarningCourses"
              @input="inputEarlyWarningCourses = $event.target.value"
              class="form-control"
              id="EarlyWarningCourses"
              placeholder=""
              value=""
              required=""
              style="margin-top: 1.5%; margin-left: -25%"
            />
          </div>
          <div class="col-sm-5">
            <label
              for="EarlyWarningCourses"
              class="form-label label-text"
              style="margin-top: 2%; text-align: left; margin-left: -9%"
              >(&nbsp;即單一學生有幾門課程被預警&nbsp;)</label
            >
          </div>
        </div>

        <div class="col-sm-4">
          <label
            for="EarlyWarningRequiredCourses"
            class="form-label label-text"
            style="margin-top: 4%; text-align: left; margin-left: 3%"
            >➢&nbsp;&nbsp;或者必修課預警課程數</label
          >
        </div>
        <div class="col-sm-2">
          <input
            v-model="inputEarlyWarningRequiredCourses"
            @input="inputEarlyWarningRequiredCourses = $event.target.value"
            type="text"
            class="form-control"
            id="EarlyWarningRequiredCourses"
            placeholder=""
            value=""
            required=""
            style="margin-top: 4%; margin-left: -23%"
          />
        </div>
        <div class="col-sm-6">
          <label
            for="EarlyWarningRequiredCourses"
            class="form-label label-text"
            style="margin-top: 2%; text-align: left; margin-left: -6%"
            >(&nbsp;必修課是指學生選課檔別為必修之課程&nbsp;)</label
          >
        </div>

        <div class="col-sm-3" style="margin-left: 20px">
          <label
            for="AcademicYear"
            class="form-label label-text"
            style="margin-top: 5%; text-align: left; display: block; margin-left: -6.5%"
            >➢&nbsp;&nbsp;期中預警：</label
          >
        </div>
        <div class="col-sm-2">
          <input
            v-model="inputAcademicYear"
            @input="inputAcademicYear = $event.target.value"
            type="text"
            class="form-control"
            id="AcademicYear"
            placeholder=""
            value=""
            required=""
            style="margin-top: 2.5%; margin-left: -65%"
          />
          <div class="invalid-feedback">請輸入欲查詢之學年</div>
        </div>
        <div class="col-sm-1">
          <label
            for="lastName"
            class="form-label label-text"
            style="margin-top: 15%; margin-left: -150%"
            >學年</label
          >
        </div>
        <div class="col-sm-2">
          <div class="form-check sm-1" style="margin-top: 5%">
            <input
              v-model="inputSemester"
              id="FirstSemester"
              name="paymentMethod"
              type="radio"
              class="form-check-input"
              required=""
              style="margin-top: 5%; margin-left: -100%"
              value="1"
            />
            <label
              class="form-check-label sm-1"
              for="FirstSemester"
              style="margin-top: 1%; margin-left: -70%"
              >上學期</label
            >
          </div>
        </div>
        <div class="col-sm-2">
          <div class="form-check" style="margin-top: 5%">
            <input
              v-model="inputSemester"
              id="SecondSemester"
              name="paymentMethod"
              type="radio"
              class="form-check-input"
              required=""
              style="margin-top: 5%; margin-left: -135%"
              value="2"
            />
            <label
              class="form-check-label sm-1"
              for="SecondSemester"
              style="margin-top: 1%; margin-left: -104%"
              >下學期</label
            >
          </div>
        </div>

        <div class="col-sm-3" style="margin-left: 20px">
          <label
            for="lastName"
            class="form-label label-text"
            style="margin-top: 5%; text-align: left; display: block; margin-left: -6.5%"
            >➢&nbsp;&nbsp;學生系所：</label
          >
        </div>

        <div>
          <div class="col-md-3" style="margin-top: 2.5%">
            <select
              v-model="selectedCollege"
              class="form-select"
              id="college"
              required=""
              style="margin-top: -39%; margin-left: 75%"
            >
              <option value="">院所</option>
              <option value="醫學院">醫學院</option>
              <option value="教育傳播學院">教育傳播學院</option>
              <option value="人文社會學院">人文社會學院</option>
              <option value="國際暨跨領域學院">國際暨跨領域學院</option>
            </select>
            <div class="invalid-feedback">Please select a valid country.</div>
          </div>

          <div class="col-md-4" style="margin-top: 2.5%">
            <select
              v-model="selectedDepartment"
              class="form-select"
              id="state"
              required=""
              style="margin-top: -21.25%; margin-left: 135%"
            >
              <option value="">科系</option>
              <option v-for="department in getDepartments" :key="department">
                {{ department }}
              </option>
            </select>
            <div class="invalid-feedback">Please provide a valid state.</div>
          </div>
        </div>

        <div class="col-sm-2">
          <label
            for="studentID"
            class="form-label label-text"
            style="margin-top: 4%; margin-left: 6%"
            >➢&nbsp;&nbsp;學號：</label
          >
        </div>
        <div class="col-sm-4">
          <input
            v-model="inputStudentID"
            type="text"
            class="form-control"
            id="studentID"
            placeholder=""
            value=""
            required=""
            style="margin-top: -0.5%; margin-left: -11%"
          />
        </div>
        <div class="col-sm-3">
          <label
            for="firstName"
            class="form-label label-text"
            style="margin-top: 3%; text-align: left"
          ></label>
        </div>

        <div class="col-sm-3">
          <label
            for="firstName"
            class="form-label label-text"
            style="margin-top: 3%; text-align: left"
            >&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</label
          >
        </div>
        <div
          class="d-flex justify-content-end"
          style="margin-left: -20px; margin-top: 5px"
        >
          <div class="col-sm-1">
            <button
              @click="buttonSearch"
              class="w-100 btn btn-primary btn-md btn-custom mx-2"
              type="submit"
            >
              查詢
            </button>
          </div>
          <div class="col-sm-2">
            <button
              @click="buttonToExcel"
              class="w-100 btn btn-primary btn-md btn-custom mx-2"
              type="submit"
            >
              轉出Excel檔
            </button>
          </div>
          <div class="col-sm-1">
            <button
              @click="buttonClear"
              class="w-100 btn btn-primary btn-md btn-custom mx-2"
              type="submit"
            >
              清除
            </button>
          </div>
        </div>
        <hr class="my-4" />

        <footer role="contentinfo" class="py-6 lh-1 bg-white" style="margin-top: -25px">
          <div class="bd-callout bd-callout-warning">
            <div class="container">
              <div class="row">
                <div class="col-md-2">
                  <h5 class="h5 mb-4">列印說明</h5>
                </div>
                <div class="col-md-21">
                  <div class="row">
                    <div class="col-md-21 col-sm-21">
                      <ul
                        class="list-unstyled"
                        style="
                          text-align: left;
                          line-height: 1.5;
                          font-size: 1rem;
                          line-height: 1.8;
                        "
                      >
                        <li>
                          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;(1)&nbsp;系統將列印出指定之期中預警及課程數學生名單，供使用者選擇確定列印範圍
                        </li>
                        <li>
                          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;(2)&nbsp;列印注意事項：
                          <ul
                            style="
                              list-style-type: none;
                              text-align: left;
                              line-height: 1.8;
                              margin-left: -2%;
                            "
                          >
                            <li>
                              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;▪&nbsp;&nbsp;IE的檔案：設定列印格式，將頁首、頁尾值清空，設為A4直印，同時上下左右邊界設定為10。
                            </li>
                            <li>
                              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;▪&nbsp;&nbsp;IE的工具：網際網路選項-進階-列印，勾選列印背景的彩色及影像。
                            </li>
                          </ul>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </footer>
      </div>
    </form>
  </div>
  <CopyrightNotice />
  <a href="https://lordicon.com/" class="icon-address">Icons by Lordicon.com</a>
</template>

<script>
import { ref, reactive } from "vue";
import { useRouter } from "vue-router";
import BoxModelComponent from "../components/BoxModelComponent.vue";
import Swal from "sweetalert2";
import ExcelJS from "exceljs";
import CopyrightNotice from "../components/CopyrightNotice.vue";

export default {
  name: "Search",
  components: {
    BoxModelComponent,
    CopyrightNotice,
  },
  data() {
    return {
      selectedCollege: "",
      selectedDepartment: "",
      inputEarlyWarningCourses: "",
      inputEarlyWarningRequiredCourses: "",
      inputAcademicYear: "",
      inputSemester: "",
      inputStudentID: "",
      collegeDepartments: {
        醫學院: [
          "醫學系",
          "護理系",
          "醫學檢驗生物技術系",
          "公共衛生學系",
          "醫學資訊學系",
          "物理治療學系",
          "生物醫學暨工程學系",
          "分子生物暨人類遺傳學系",
          "學士後中醫學系",
        ],
        教育傳播學院: ["傳播學系", "兒童發展與家庭教育學系"],
        人文社會學院: ["東方語文學系", "社會工作學系", "人類發展與心理學系"],
        國際暨跨領域學院: [
          "外國語文學系",
          "國際服務產業管理學士學位學程",
          "國際數位媒體科技學士學位學程",
          "永續暨防災碩士學位學程",
        ],
      },
    };
  },
  computed: {
    getDepartments() {
      return this.collegeDepartments[this.selectedCollege] || [];
    },
  },
  watch: {
    selectedCollege() {
      this.selectedDepartment = ""; // 清空選擇的科系
    },
  },
  methods: {
    searchData() {
      console.log(this.inputEarlyWarningCourses);
    },
  },
  setup() {
    const inputEarlyWarningCourses = ref("");
    const inputEarlyWarningRequiredCourses = ref("");
    const inputAcademicYear = ref("");
    const inputSemester = ref("");
    const selectedCollege = ref("");
    const selectedDepartment = ref("");
    const inputStudentID = ref("");

    const router = useRouter();

    const showErrorAlert = (message) => {
      alert(message);
    };

    const buttonSearch = async (event) => {
      event.preventDefault(); // 阻止表單的默認提交行為
      console.log("ErrorMessage！");

      let errorMessages = ""; // 儲存錯誤信息

      if (
        !inputEarlyWarningCourses.value.trim() &&
        !inputEarlyWarningRequiredCourses.value.trim()
      ) {
        errorMessages += "請至少輸入預警課程數或必修課預警課程數\n";
      }

      if (!inputAcademicYear.value.trim()) {
        if (inputSemester.value !== "1" && inputSemester.value !== "2") {
          errorMessages += "請輸入學年及學期\n";
        } else errorMessages += "請輸入學年\n";
      } else if (inputSemester.value !== "1" && inputSemester.value !== "2") {
        errorMessages += "請選填學期\n";
      }

      if (selectedCollege.value.trim() === "" || selectedDepartment.value.trim() === "") {
        errorMessages += "請選擇院所及科系\n";
      }

      if (errorMessages) {
        alert(errorMessages);
      } else {
        console.log("To Resault！");
        await router.push({ path: "/Resault" });
      }
    };

    const buttonClear = async (event) => {
      event.preventDefault();
      console.log("ErrorMessage！");
      console.log("Clear！");

      selectedCollege.value = "";
      selectedDepartment.value = "";
      inputEarlyWarningCourses.value = "";
      inputEarlyWarningRequiredCourses.value = "";
      inputAcademicYear.value = "";
      inputSemester.value = "";
      inputStudentID.value = "";
    };

    const buttonToExcel = async () => {
      event.preventDefault(); // 阻止表單的默認提交行為
      console.log("ErrorMessage！");
      let errorMessages = "";

      if (
        !inputEarlyWarningCourses.value.trim() &&
        !inputEarlyWarningRequiredCourses.value.trim()
      ) {
        errorMessages += "請至少輸入預警課程數或必修課預警課程數\n";
      }

      if (!inputAcademicYear.value.trim()) {
        if (inputSemester.value !== "1" && inputSemester.value !== "2") {
          errorMessages += "請輸入學年及學期\n";
        } else errorMessages += "請輸入學年\n";
      } else if (inputSemester.value !== "1" && inputSemester.value !== "2") {
        errorMessages += "請選填學期\n";
      }

      if (selectedCollege.value.trim() === "" || selectedDepartment.value.trim() === "") {
        errorMessages += "請選擇院所及科系\n";
      }

      if (errorMessages) {
        alert(errorMessages);
      } else {
        console.log("To Excel Logic!");

        // Excel 檔案生成邏輯
        const workbook = new ExcelJS.Workbook();
        const worksheet = workbook.addWorksheet("Sheet 1");

        // 在這裡添加將數據轉換為 Excel 的邏輯

        // 生成 Excel 檔案
        const blob = await workbook.xlsx.writeBuffer();
        const url = URL.createObjectURL(
          new Blob([blob], {
            type: "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",
          })
        );

        const link = document.createElement("a");
        link.href = url;
        link.download = "output.xlsx";
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
      }
    };

    return {
      inputEarlyWarningCourses,
      inputEarlyWarningRequiredCourses,
      inputAcademicYear,
      inputSemester,
      selectedCollege,
      selectedDepartment,
      inputStudentID,
      buttonSearch,
      buttonClear,
      buttonToExcel,
    };
  },
};
</script>

<style scoped>
.btn-custom {
  background-color: #4682b4;
  border-color: #ced4da;
}
.btn-custom:hover {
  background-color: #0f4f85;
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
*,
::after,
::before {
  box-sizing: border-box;
}
使用者代理程式樣式表 div {
  display: block;
}
.icon-address {
  font-size: 7px;
  position: fixed;
  top: 905px;
  left: 1838px;
}
</style>
