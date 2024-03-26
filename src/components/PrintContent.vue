<template>
  <div class="print-content">
    <div class="section1">
      <p>【限時專送】</p>
      <p><!--學生之地址--></p>
      <p><!--編號--><br /><!--學生姓名-->&nbsp;同學</p>
    </div>
    <div class="section2">
      <div>
        <p><!--學生名字-->家長，您好</p>
        <p>
          貴子弟本次期中考受預警科目如下，請多留意貴子弟在校的學習狀況：<br />
          <b><i>若有相關問題請與學系導師聯繫</i></b
          >。謝謝！
        </p>
        <p>慈濟大學教務處註冊組&nbsp;&nbsp;敬啟</p>
      </div>
      <div>
        <p>
          <b><!--學年-->學年度第<!--學期-->學期期中考試預警通知</b>
        </p>
        <p>列印日期：<!--當下列印的日期--></p>
        <p>
          班級：<!--學生之科系--><!--學生之年級-->年<!--學生之班級-->班<br />
          學號：<!--學生之學號--><br />
          姓名：<!--學生姓名--><br />
        </p>
      </div>
      <div>
        <table>
          <thead>
            <th><b>課程名稱</b></th>
            <th><b>學分數</b></th>
          </thead>
          <tbody>
            <tr>
              <td><!--被預警課程名稱--></td>
              <td><!--被預警課程之學分數-->學分</td>
            </tr>
            <tr>
              <b>預警課程學分數合計：<!--學生之預警課程學分數-->學分</b>
            </tr>
          </tbody>
        </table>
        <p>
          <b>※&nbsp;本學期總修習學分數：<!--學生之修習學分-->學分</b>
        </p>
      </div>
    </div>
  </div>
</template>

<script></script>

<style>
.print-content {
  @page {
    size: A4;
  }
  display: flex;
  flex-direction: column;
}

.section1 {
  flex: 1;
}

.section2 {
  flex: 2;
}
</style>
