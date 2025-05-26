<template>
  <div class="layout">
    <header class="layout-header" v-if="!$route.meta.hideHeader">
      <button type="button" title="alarm">
        <div @click.stop="goAlarm">
          <i class="layout-header-icon-alarm"></i>
        </div>
        <img class="badge-dot" src="/src/assets/img/icon/badgeDot.svg" alt="" />
        <span class="layout-header-sr-only">알람버튼</span>
      </button>
      <!-- 마이페이지 외에 홈버튼 로고 일 때 로고 -->
      <router-link v-if="!isMyPage" to="/" title="maingo">
        <img
          src="/src/assets/img/icon/titlelogo.png"
          alt="titlelogo"
          class="layout-header-logo"
        />
      </router-link>
      <!-- 마이페이지 홈버튼 로고 일 때 로고 -->
      <router-link v-else to="/my" title="mypage">
        <img
          class="myPageLogo"
          src="/src/assets/img/myPage/myPageLogo.png"
          alt=""
        />
      </router-link>

      <div type="button" title="my" @click="goMyPage">
        <i v-if="!isMyPage" class="layout-header-icon-mybtn"></i>
        <img
          v-else
          @click.stop="goSetting"
          class="setting"
          src="/src/assets/img/myPage/setting.png"
          alt=""
        />
      </div>
    </header>

    <RouterView />

    <nav class="layout-footer-nav">
      <div
        class="layout-footer-nav-item"
        :class="{ active: activeNav === 'dashboard' }"
        @click="goDashBoard"
      >
        <img src="/src/assets/img/icon/dashboardBtn.png" alt="dashboardBtn" />
        <img
          class="hover-img"
          src="/src/assets/img/icon/dashboardBtnHover.png"
          alt="dashboardBtnHover"
        />
      </div>
      <div
        class="layout-footer-nav-item"
        :class="{ active: activeNav === 'hamburger' }"
        @click="router.push('/category01')"
      >
        <img src="/src/assets/img/icon/hambugerBtn.png" alt="hamburgerBtn" />
        <img
          class="hover-img"
          src="/src/assets/img/icon/hambugerBtnHover.png"
          alt="hamburgerBtnHover"
        />
      </div>
      <div class="layout-footer-nav-item" @click="goHomePage">
        <img
          v-if="isHome"
          src="/src/assets/img/icon/homeClickBtn.png"
          alt="homeBtn"
        />
        <img v-else src="/src/assets/img/icon/homeBtn.png" alt="homeBtn" />
      </div>
      <div
        class="layout-footer-nav-item"
        :class="{ active: activeNav === 'search' }"
        @click="router.push('/search01')"
      >
        <img src="/src/assets/img/icon/searchBtn.png" alt="searchBtn" />
        <img
          class="hover-img"
          src="/src/assets/img/icon/searchBtnHover.png"
          alt="searchBtnHover"
        />
      </div>
      <div
        class="layout-footer-nav-item"
        :class="{ active: activeNav === 'chart' }"
        @click="router.push('/shoppingcart01')"
      >
        <img src="/src/assets/img/icon/layoutCart.svg" alt="chartBtn" />
        <img
          class="hover-img"
          src="/src/assets/img/icon/chartBtnHover.png"
          alt="chartBtnHover"
        />
      </div>
    </nav>
  </div>
</template>

<script setup>
import { useRouter, useRoute } from 'vue-router';
import { computed } from 'vue';

const router = useRouter();
const route = useRoute();

function goHomePage() {
  router.push('/homepage');
}

function goMyPage() {
  router.push('/my');
}

function goDashBoard() {
  router.push('/');
}

function goAlarm() {
  router.push('/alarm');
}

function goSetting() {
  router.push('/setting');
}
function goCategory01() {
  router.push('/category01');
}

function goShoppingCart01() {
  router.push('shoppingcart01');
}

function goSearch() {
  router.push('/search01');
}

const isHome = computed(() => route.path === '/homepage');
const isMyPage = computed(() => route.path === '/my');

const activeNav = computed(() => {
  if (route.path === '/') return 'dashboard';
  if (route.path === '/hamburger') return 'hamburger';
  if (route.path === '/search') return 'search';
  if (route.path === '/chart') return 'chart';
  return null;
});
</script>

<style scoped>
.layout {
  height: 100%;
  padding-top: 62px;
  padding-bottom: 70px;
}

.layout .layout-header {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 62px;
  display: flex;
  padding: 13px 15px;
  justify-content: space-between;
  align-items: center;
  background: #ffffff;
  z-index: 2;
}

.layout .layout-header button {
  position: relative;
  cursor: pointer;
  border: none;
  background: none;
}

.layout .layout-header-logo {
  width: 61px;
  height: 32px;
  flex-shrink: 0;
}

.layout .layout-header-icon-alarm,
.layout .layout-header-icon-mybtn {
  display: inline-block;
  width: 24px;
  height: 24px;
  background-size: cover;
  background-position: center;
}

.layout .layout-header-icon-alarm {
  background-image: url(/src/assets/img/icon/alarmbtn.png);
}

.layout .layout-header-icon-mybtn {
  background-image: url(/src/assets/img/icon/mybtn.png);
}

.layout .layout-header-sr-only {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border: 0;
}

.layout .layout-footer-nav {
  background-image: url(/src/assets/img/icon/bottomBar.png);
  background-size: 100% 100%;
  background-repeat: no-repeat;
  background-position: center;
  height: 91px;
  width: 100%;
  display: flex;
  justify-content: space-around;
  align-items: center;
  position: fixed;
  bottom: 0;
  left: 0;
  z-index: 2;
}

.layout .layout-footer-nav .layout-footer-nav-item {
  position: relative;
  background: none;
  border: none;
  cursor: pointer;
  width: 40px;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
}

.layout .layout-footer-nav .layout-footer-nav-item img {
  width: 40px;
  height: 40px;
  object-fit: contain;
}

.layout .layout-footer-nav .layout-footer-nav-item .hover-img {
  position: absolute;
  top: 0;
  left: 0;
  display: none;
}

.layout .layout-footer-nav .layout-footer-nav-item.active .hover-img {
  display: block;
}

.layout .layout-footer-nav .layout-footer-nav-item.active img:not(.hover-img) {
  display: none;
}

.myPageLogo {
  width: 153px;
  height: 48px;
}

.setting {
  width: 24px;
  height: 24px;
}
.badge-dot {
  position: absolute;
  top: 0px;
  left: 14px;
  width: 7px;
  height: 7px;
}
</style>
