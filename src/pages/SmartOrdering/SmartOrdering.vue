<template>
  <div class="header">
    <div class="header-left" @click="goBackPage">
      <img src="/src/assets/img/icon/leftAllow.svg" alt="뒤로가기" />
      <p>스마트 발주</p>
    </div>
    <div class="header-right">
      <img
        src="/src/assets/img/smartOrdering/homeBtn.svg"
        alt="홈"
        @click="goHome"
      />
    </div>
  </div>
  <div class="wrap">
    <div class="con con01">
      <img src="/src/assets/img/smartOrdering/smartOrdering01.png" alt="" />
      <div class="main-txt">
        <h1>쉽고 빠른 쇼핑지원</h1>
        <p>맞춤형 서비스</p>
      </div>
      <div class="sub-txt">
        <p>나의 유형을 선택하여 쉽고 빠르게</p>
        <span>상품을 구매해볼까요?</span>
      </div>
      <div class="main-button">
        <button
          :class="{ active: selectedType === 'beginner' }"
          @click="selectType('beginner')"
        >
          <p>비기너</p>
          <span>슈퍼바인더를 처음 이용하시나요?</span>
        </button>
        <button
          :class="{ active: selectedType === 'stainer' }"
          @click="selectType('stainer')"
        >
          <p>스테이너</p>
          <span>슈퍼바인더를 꾸준히 이용하고 계신가요?</span>
        </button>
      </div>
    </div>
    <div class="bottom">
      <button @click="start">시작하기</button>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import { useRouter } from 'vue-router';

const router = useRouter();
const selectedType = ref(null);

function goBackPage() {
  router.go(-1);
}

function goHome() {
  router.push('/homepage');
}

function selectType(type) {
  selectedType.value = type;
}

function start() {
  if (selectedType.value === 'beginner') {
    router.push('/smartorderingbeginner01');
  } else if (selectedType.value === 'stainer') {
    router.push('/smartorderingexpert01');
  }
  // else {
  //   alert('유형을 선택해주세요.');
  // }
}
</script>

<style scoped>
.header {
  width: 100%;
  height: 62px;
  padding: 16px 24px 10px;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.header-left {
  display: flex;
  gap: 4px;
}
.header-left img {
  width: 24px;
  height: 24px;
}
.header-left p {
  color: #212121;
  font-family: Pretendard;
  font-size: 18px;
  font-weight: 600;
}
.header-right img {
  width: 36px;
  height: 36px;
}
.wrap {
  margin: 24px 0 36px;
  padding: 0 24px;
}
.con01 {
  display: flex;
  flex-direction: column;
  align-items: center;
}
.con01 img {
  width: 206px;
  height: 206px;
}
.main-txt {
  margin-top: 30px;
  text-align: center;
}
.main-txt h1 {
  color: #222;
  font-family: Pretendard;
  font-size: 24px;
  font-weight: 700;
  line-height: 33px;
}
.main-txt p {
  color: #222;
  font-family: Pretendard;
  font-size: 24px;
  font-weight: 400;
  line-height: 33px;
}
.sub-txt {
  margin-top: 24px;
  color: #666;
  text-align: center;
  font-family: Pretendard;
  font-size: 14px;
  font-weight: 500;
  line-height: 22px;
}
.main-button {
  width: 100%;
  display: flex;
  gap: 12px;
  margin-top: 20px;
}
.main-button button {
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 8px;
  padding: 16px;
  border-radius: 10px;
  border: 1px solid #dadada;
  background: #fff;
}
.main-button button p {
  color: #222;
  font-family: Pretendard;
  font-size: 14px;
  font-weight: 700;
  line-height: 22px;
}
.main-button button span {
  color: #666;
  font-family: Pretendard;
  font-size: 14px;
  font-weight: 400;
  line-height: 20px;
}
.main-button button.active {
  border: 2px solid #2866ec;
  background: #f3f7ff;
  color: #2866ec;
}
.bottom button {
  width: 100%;
  height: 56px;
  margin-top: 77px;
  border: none;
  border-radius: 8px;
  background: #2866ec;
  color: #fff;
  font-family: Pretendard;
  font-size: 16px;
  font-weight: 600;
  line-height: 22px;
}
</style>
