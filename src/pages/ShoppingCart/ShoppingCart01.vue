<template>
  <div class="header">
    <img
      src="/src/assets/img/Authentication/leftAllow.png"
      alt="뒤로가기"
      @click="goBackPage"
    />
    <span>장바구니</span>
  </div>
  <div class="con01">
    <div class="title">
      <img src="/src/assets/img/myPage/myProfile.png" alt="" />
      <p>메인 홍길동001</p>
    </div>
    <button>배송지 추가</button>
  </div>
  <div class="con02">
    <div class="title">
      <ul :class="{ active: activeTab === 0 }" @click="activeTab = 0">
        <li>장바구니</li>
      </ul>
      <ul :class="{ active: activeTab === 1 }" @click="activeTab = 1">
        <li>자주구매</li>
      </ul>
      <ul :class="{ active: activeTab === 2 }" @click="activeTab = 2">
        <li>찜목록</li>
      </ul>
      <ul :class="{ active: activeTab === 3 }" @click="activeTab = 3">
        <li>최근 본</li>
      </ul>
    </div>
    <div class="main">
      <img src="/src/assets/img/icon/cartBtn.svg" alt="" />
      <p>장바구니가 비어 있습니다.</p>
    </div>
  </div>
  <transition name="fade" appear>
    <CartAlert v-if="showAlert" class="cart-alert-modal" />
  </transition>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import { useRouter } from 'vue-router';
import CartAlert from './alert/CartAlert.vue';

const router = useRouter();
const activeTab = ref(0);
const showAlert = ref(false);

function goBackPage() {
  router.go('-1');
}

onMounted(() => {
  setTimeout(() => {
    showAlert.value = true;
  }, 1000);
});
</script>
<style scoped>
.header {
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
  left: 50%;
  transform: translateX(-50%);
  color: #212121;
  font-family: Pretendard;
  font-size: 20px;
  font-weight: 600;
  line-height: 28px;
}
.con01 {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0px 12px;
  margin: 20px 0px;
}
.con01 .title {
  display: flex;
  gap: 7px;
  align-items: center;
}
.con01 .title img {
  width: 64px;
  height: 64px;
}
.con01 .title p {
  color: #222;
  font-feature-settings: 'liga' off, 'clig' off;
  font-family: Pretendard;
  font-size: 18px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
}
.con01 button {
  width: 96px;
  height: 40px;
  color: #666;
  text-align: right;
  font-feature-settings: 'liga' off, 'clig' off;
  font-family: Pretendard;
  font-size: 14px;
  font-style: normal;
  font-weight: 500;
  line-height: 20px; /* 142.857% */
  border: none;
  padding: 10px 16px;
  border-radius: 50px;
  background: #f5f5f5;
}
.con02 .title {
  display: flex;
}
.con02 .title ul {
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 8px 0px 16px 0px;
  color: #212121;
  font-feature-settings: 'liga' off, 'clig' off;
  font-family: Pretendard;
  font-size: 15px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
}
.con02 .title ul {
  border-bottom: 1px solid #ddd;
}
.con02 .title ul.active {
  color: #2866ec;
  border-bottom: 2px solid #2866ec;
}
.main {
  width: 100%;
  height: 556px;
  display: flex;
  gap: 10px;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
.main p {
  overflow: hidden;
  color: #888;
  text-align: center;
  font-feature-settings: 'liga' off, 'clig' off;
  text-overflow: ellipsis;
  font-family: Pretendard;
  font-size: 14px;
  font-style: normal;
  font-weight: 500;
  line-height: 20px; /* 142.857% */
}

.cart-alert-modal {
  position: fixed;
  bottom: 0;
  left: 50%;
  transform: translateX(-50%);
  /* width: 100%;
   */
  z-index: 1000;
}

/* slide-up 트랜지션 정의 */
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s ease;
}
.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
.fade-enter-to,
.fade-leave-from {
  opacity: 1;
}
</style>
