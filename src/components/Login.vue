<template>
  <div class="full-height">
    <video id="yourVideoId" autoplay muted loop class="bg-video" style="margin-top: -3%">
      <source :src="'./LoginVideo.mp4'" type="video/mp4" />
      Your browser does not support the video tag.
    </video>
    <div class="container-fluid h-100 d-flex align-items-center justify-content-center">
      <div class="col-md-6">
        <div class="d-flex flex-column align-items-start">
          <img :src="titleSource" alt="Logo" class="img-fluid logo" />
          <img
            :src="pageLoginButtonSource"
            alt="Page Login Button"
            class="btn-img"
            @click="pageLogingClick"
          />
        </div>
        <div class="stair-container">
          <img :src="stairSource" alt="Stair Image" class="stair-img" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { nextTick, onMounted } from "vue";
import { useRouter } from "vue-router";
const pageLoginButtonSource = "./PageLoginButton.png";
const titleSource = "./title.png";
const stairSource = "./stair.png";
import { disableBodyScroll, enableBodyScroll } from "body-scroll-lock";
export default {
  name: "LoginTem",
  setup() {
    const router = useRouter();

    /* const pageLogingClick = async () => {
      console.log("To PageSearch！");
      const bgVideo = document.getElementById("yourVideoId");
      bgVideo.src = "";
      //document.body.style.background = "";
      document.body.style.overflow = "auto"; // 還原滾動條

      //await nextTick();

      const resolvedRoute = router.resolve({ path: "/SearchMain" });
      console.log(resolvedRoute);
      window.location.href = resolvedRoute.href; // 使用 resolve 方法進行頁面導覽
    }; */
    const pageLogingClick = async () => {
      console.log("To PageSearch!");
      const bgVideo = document.getElementById("yourVideoId");
      bgVideo.src = "";
      enableBodyScroll(document.body); // 启用滚动条

      //await nextTick();

      const resolvedRoute = router.resolve({ path: "/SearchMain" });
      console.log(resolvedRoute);
      window.location.href = resolvedRoute.href; // 使用 resolve 方法進行頁面導覽
    };

    return { pageLogingClick };
  },
  data() {
    return {
      pageLoginButtonSource,
      titleSource,
      stairSource,
    };
  },
};
</script>

<style>
body {
  margin: 0;
  overflow: hidden;
  background: url("./LoginVideo.mp4") center center / cover no-repeat fixed;
  z-index: -1;
  margin-top: 0;
}

.full-height {
  height: 100vh;
  position: relative;
  margin-top: 3%;
}

.bg-video {
  width: 100vw;
  height: 100vh;
  object-fit: cover;
  position: absolute;
  top: 0;
  left: 0;
}

.container-fluid {
  position: relative;
  z-index: 1;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
}

.logo {
  width: 60%;
  margin-top: 28%;
  margin-left: -25%;
}

.btn-img {
  cursor: pointer;
  width: 20%;
  max-width: 100%;
  height: auto;
  margin-top: 6%;
  margin-left: -5.5%;
}
.stair-img {
  width: 70%;
  height: 30%;
  margin-left: -60%;
  margin-bottom: -45%;
}
</style>
