<template>
  <div class="header">
    <img
      src="/src/assets/img/Authentication/leftAllow.png"
      alt="뒤로가기"
      @click="goBackPage"
    />
    <span>비건ㅊㅋㅊㅋ바 딸기향 올인원바+곰...</span>
  </div>
  <div class="sseomneil">
    <img src="/src/assets/img/productList/sseomneil.png" alt="" />
  </div>
  <div class="wrap">
    <div class="con">
      <div class="title">
        <p>DONGGUBAT</p>
        <h1>비건ㅊㅋㅊㅋ바 (딸기향 올인원바+곰돌이 양초)</h1>
        <div class="value">
          <p>24,000</p>
          <span>원</span>
        </div>
        <div class="count">5개 남음</div>
      </div>
      <div class="detaile">
        <div class="detaile-title">상품상세</div>
        <img
          src="/src/assets/img/productList/sseomneil2.png"
          class="sseomneil2"
        />
        <button class="outspread">펼쳐보기</button>
      </div>
    </div>
  </div>
  <div class="bottom">
    <div class="top-btn" @click="toggleBottom">
      <!-- 클릭했을 때
      ProductDetaile02, 
      ProductListDetaile 폴더 안에 파일 적용 -->
      <img
        v-if="!isExpanded"
        src="/src/assets/img/productList/ProductListBottom.svg"
        alt="펼치기 아이콘"
      />
      <img
        v-else
        src="/src/assets/img/productList/productListBottomDown.svg"
        alt="접기 아이콘"
      />
    </div>
    <div class="bottom-main">
      <img src="/src/assets/img/productList/heart.svg" alt="" />
      <button>구매하기</button>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import { useRouter } from 'vue-router';

const router = useRouter();

const isExpanded = ref(false);

function toggleBottom() {
  isExpanded.value = !isExpanded.value;
}

function goBackPage() {
  router.go('-1');
}
</script>

<style scoped>
.header {
  width: 100%;
  height: 62px;
  padding: 13px 16px;
  display: flex;
  align-items: center;
  position: relative;
}
.header img {
  width: 24px;
  height: 24px;
  cursor: pointer;
}
.header span {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  white-space: nowrap;
  color: #222;
  text-align: center;
  font-feature-settings: 'liga' off, 'clig' off;
  font-family: Pretendard;
  font-size: 18px;
  font-style: normal;
  font-weight: 600;
  line-height: 140%; /* 25.2px */
}
.sseomneil img {
  width: 100%;
  height: 375px;
}
.wrap {
  padding: 0px 24px;
}
.con .title {
  padding: 24px 0px;
  border-bottom: 1px solid #dadada;
}
.con .title p {
  color: #888;
  font-family: Pretendard;
  font-size: 12px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
}
.con .title h1 {
  margin-top: 2px;
  color: #222;
  font-feature-settings: 'liga' off, 'clig' off;
  font-family: Pretendard;
  font-size: 18px;
  font-style: normal;
  font-weight: 600;
  line-height: 140%; /* 25.2px */
}
.con .title .value {
  display: flex;
  gap: 2px;
  align-items: center;
  margin-top: 8px;
}
.con .title .value p {
  color: #222;
  font-family: Pretendard;
  font-size: 16px;
  font-style: normal;
  font-weight: 800;
  line-height: normal;
}
.con .title .value span {
  color: #222;
  font-family: Pretendard;
  font-size: 12px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
}
.con .title .count {
  width: 58px;
  height: 24px;
  margin-top: 8px;
  padding: 3px 8px;
  color: #ff2b59;
  font-feature-settings: 'liga' off, 'clig' off;
  font-family: Pretendard;
  font-size: 12px;
  font-style: normal;
  font-weight: 500;
  line-height: 18px; /* 150% */
  border-radius: 900px;
  background: #f5f5f5;
}

.detaile .detaile-title {
  margin: 24px 0px;
  color: #222;
  font-feature-settings: 'liga' off, 'clig' off;
  font-family: Pretendard;
  font-size: 16px;
  font-style: normal;
  font-weight: 600;
  line-height: 140%; /* 22.4px */
}
.detaile img {
  width: 100%;
  height: 100%;
}
.detaile .outspread {
  width: 100%;
  height: 48px;
  border-radius: 8px;
  border: 1px solid #c2c2c2;
  background: #fff;
  margin-bottom: 115px;
  color: #222;
  text-align: center;
  font-feature-settings: 'liga' off, 'clig' off;
  font-family: Pretendard;
  font-size: 16px;
  font-style: normal;
  font-weight: 500;
  line-height: 140%; /* 22.4px */
}
.bottom {
  position: fixed;
  bottom: 0px;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: -1px;
}
.bottom .top-btn {
  position: absolute;
  bottom: 98px;
}
.bottom .bottom-main {
  width: 100%;
  height: 104px;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  padding: 24px;
  background: #fff;
}
.bottom .bottom-main .top-btn {
  width: 24px;
  height: 24px;
}
.bottom .bottom-main button {
  width: 100%;
  height: 56px;
  border: none;
  border-radius: 8px;
  background: #2866ec;
  color: #fff;
  text-align: center;
  font-feature-settings: 'liga' off, 'clig' off;
  font-family: Pretendard;
  font-size: 16px;
  font-style: normal;
  font-weight: 600;
  line-height: 22px; /* 137.5% */
}
</style>
