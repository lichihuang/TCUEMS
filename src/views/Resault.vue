<template>
  <BoxModelComponent />
  <div>
    <Header />
  </div>
  <div class="col-md-8 col-lg-5" style="margin-top: 9%; margin-left: 29%">
    <h4 class="mb-3" style="margin-top: -4%; text-align: center">期中預警通知列印</h4>
    <h5 class="mb-3" style="margin-top: -4%; text-align: center">查詢結果</h5>
    <hr class="my-4" />
  </div>
  <div class="table-responsive">
    <table class="table table-striped table-sm">
      <thead>
        <tr>
          <th></th>
          <th>選擇列印</th>
          <th>學生</th>
          <th>期中預警紀錄</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>1,001</td>
          <td>Lorem</td>
          <td>ipsum</td>
          <td>dolor</td>
        </tr>
        <tr>
          <td>1,002</td>
          <td>amet</td>
          <td>consectetur</td>
          <td>adipiscing</td>
        </tr>
        <tr>
          <td>1,003</td>
          <td>Integer</td>
          <td>nec</td>
          <td>odio</td>
        </tr>
        <tr>
          <td>1,003</td>
          <td>libero</td>
          <td>Sed</td>
          <td>cursus</td>
        </tr>
        <tr>
          <td>1,004</td>
          <td>dapibus</td>
          <td>diam</td>
          <td>Sed</td>
        </tr>
        <tr>
          <td>1,005</td>
          <td>Nulla</td>
          <td>quis</td>
          <td>sem</td>
        </tr>
        <tr>
          <td>1,006</td>
          <td>nibh</td>
          <td>elementum</td>
          <td>imperdiet</td>
        </tr>
        <tr>
          <td>1,007</td>
          <td>sagittis</td>
          <td>ipsum</td>
          <td>Praesent</td>
        </tr>
        <tr>
          <td>1,008</td>
          <td>Fusce</td>
          <td>nec</td>
          <td>tellus</td>
        </tr>
        <tr>
          <td>1,009</td>
          <td>augue</td>
          <td>semper</td>
          <td>porta</td>
        </tr>
        <tr>
          <td>1,010</td>
          <td>massa</td>
          <td>Vestibulum</td>
          <td>lacinia</td>
        </tr>
        <tr>
          <td>1,011</td>
          <td>eget</td>
          <td>nulla</td>
          <td>Class</td>
        </tr>
        <tr>
          <td>1,012</td>
          <td>taciti</td>
          <td>sociosqu</td>
          <td>ad</td>
        </tr>
        <tr>
          <td>1,013</td>
          <td>torquent</td>
          <td>per</td>
          <td>conubia</td>
        </tr>
        <tr>
          <td>1,014</td>
          <td>per</td>
          <td>inceptos</td>
          <td>himenaeos</td>
        </tr>
        <tr>
          <td>1,015</td>
          <td>sodales</td>
          <td>ligula</td>
          <td>in</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
/* import { defineComponent } from "@vue/composition-api"; */

import Header from "../components/Header.vue";
import BoxModelComponent from "../components/BoxModelComponent.vue";

export default {
  name: "Resault",
  components: {
    Header,
    BoxModelComponent,
  },
  setup() {},
};
</script>

<style scoped></style>
