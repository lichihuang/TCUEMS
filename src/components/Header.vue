<template>
  <nav class="navbar navbar-expand-lg navbar-dark bg-dark fixed-top align-items-center">
    <div class="container-fluid d-flex align-items-center justify-content-between">
      <div class="navbar-brand sm-1">
        <img
          src="/TopTitle1.png"
          alt="Top Logo"
          style="max-width: 80%; height: 80%; margin-left: 5%;margin-top:1%"
        />
      </div>
      <div class="d-flex align-items-center flex-grow-1">
        <ul class="navbar-nav me-auto mb-3 mb-md-0" style="margin: 0">
          <li class="nav-item active d-flex">
            <p
              style="
                color: #ffffff;
                font-size: 1.8rem;
                margin-top: 4%;
                margin-left: -40%;
                margin-bottom: 0;
              "
            >
              教務管理系統
            </p>
          </li>
        </ul>
        <div class="d-flex align-items-start ms-auto home" style="margin-top: 3px">
          <div class="d-flex flex-column" @click="home" style="margin-bottom: 1%;margin-left:-50%">
            <lord-icon
              src="https://cdn.lordicon.com/epietrpn.json"
              trigger="hover"
              colors="primary:#121331,secondary:#d1e3fa,tertiary:#d59f80,quaternary:#ffc26c,quinary:#faebd7,senary:#646e78,septenary:#ffffff"
              stroke="bold"
              style="width: 45px; height: 45px"
              class="nav-link"
            ></lord-icon>
            <p style="color: #ffffff; margin-bottom: 0; font-size: 0.8rem;margin-left:9.25%">HOME</p>
          </div>
        </div>
      </div>
    </div>
  </nav>
</template>

<script>
import lottie from "lottie-web";
import { defineElement } from "@lordicon/element";
defineElement(lottie.loadAnimation);
export default {
  name: "Header",
  setup(){
    const home = async () => {
      console.log("To PageSearch！");

      const resolvedRoute = router.resolve({ path: "/SearchMain" });
      console.log(resolvedRoute);
      window.location.href = resolvedRoute.href; // 使用 resolve 方法進行頁面導覽
    };
    return { home };
  }
};
</script>

<style scoped>
nav {
  /*nav為選擇器*/
  background-color: #003c6b !important;
  height: 10%;
}
.navbar-nav .nav-link .bi {
  margin-left: -10%;
}
.btn-custom {
  background-color: #4682b4;
  border-color: #ced4da;
}
.btn-custom:hover {
  background-color: #0f4f85;
}
.home {
  cursor: pointer;
}
</style>
