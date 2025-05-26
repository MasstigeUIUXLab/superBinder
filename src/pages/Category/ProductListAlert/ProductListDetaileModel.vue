<template>
  <div class="wrap">
    <div class="model">
      <div class="header">
        <span>장바구니 담기 완료</span>
        <img src="/src/assets/img/icon/cross.svg" alt="뒤로가기" />
      </div>
      <div class="txt">
        <p>장바구니에 상품을 담았습니다.</p>
        <span>지금 바로 확인하러 가시겠습니까?</span>
      </div>
    </div>
    <div class="bottom">
      <button class="left-btn">쇼핑 계속하기</button>
      <button class="right-btn">장바구니로 이동</button>
    </div>
  </div>
</template>

<script setup>
import { useRouter } from 'vue-router';

const router = useRouter();

function goBack() {
  router.push('');
}
</script>

<style scoped>
.wrap {
  width: 100%;
  height: 100vh;
  background: rgba(0, 0, 0, 0.6);
  display: flex;
  justify-content: center;
  align-items: end;
}
.wrap .model {
  width: 100%;
  height: 248px;
  background: #fff;
  border-radius: 16px 16px 0px 0px;
  padding: 24px;
  box-shadow: 0px -4px 10px 0px rgba(0, 0, 0, 0.1);
  text-align: center;
  display: flex;
  flex-direction: column;
}
.header {
  height: 28px;
  display: flex;
  align-items: center;
  position: relative;
  justify-content: space-between;
  margin-bottom: 18px;
}
.header img {
  width: 24px;
  height: 24px;
  cursor: pointer;
}
.header span {
  color: #212121;
  font-family: Pretendard;
  font-size: 20px;
  font-weight: 600;
  line-height: 28px;
}
.txt {
  margin: 30px 0px;
}
.txt p,
.txt span {
  color: #000;
  text-align: center;
  font-family: 'Pretendard GOV';
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 150%; /* 24px */
}
.bottom {
  position: fixed;
  bottom: 0px;
  display: flex;
  gap: 8px;
  padding: 24px;
  width: 100%;
}
.bottom .left-btn {
  width: 100%;
  height: 48px;
  color: #222;

  text-align: center;
  font-feature-settings: 'liga' off, 'clig' off;
  font-family: Pretendard;
  font-size: 16px;
  font-style: normal;
  font-weight: 500;
  line-height: 22px; /* 137.5% */
  border-radius: 8px;
  border: 1px solid #c2c2c2;
  background: #fff;
}
.bottom .right-btn {
  width: 100%;
  height: 48px;
  color: #fff;
  text-align: center;
  font-feature-settings: 'liga' off, 'clig' off;
  font-family: Pretendard;
  font-size: 16px;
  font-style: normal;
  font-weight: 500;
  line-height: 22px; /* 137.5% */
  border-radius: 8px;
  background: #222;
  border: none;
}
</style>
