<template>
  <div class="wrap">
    <div class="model">
      <div class="header">
        <span>전체 목록 보기</span>
        <img
          src="/src/assets/img/icon/cross.svg"
          alt="뒤로가기"
          @click.self="$emit('close')"
        />
      </div>

      <div class="con con02">
        <ul>
          <li @click="goMy">
            <div class="card">
              <div class="card-title">
                <img src="/src/assets/img/myPage/mainAcount.svg" alt="" />
                <span>메인 계정명 0001</span>
              </div>
            </div>
          </li>

          <li @click="goSub">
            <div class="card">
              <div class="card-title">
                <img src="/src/assets/img/myPage/serveAcount.svg" alt="" />
                <span>서브 계정명 0001</span>
              </div>
            </div>
          </li>

          <li @click="goSub">
            <div class="card">
              <div class="card-title">
                <img src="/src/assets/img/myPage/serveAcount2.svg" alt="" />
                <span>서브 계정명 0002</span>
              </div>
            </div>
          </li>
          <li @click="goSub">
            <div class="card">
              <div class="card-title">
                <img src="/src/assets/img/icon/flus.svg" alt="" />
                <span>계정 추가하기</span>
              </div>
            </div>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script setup>
import { useRouter } from 'vue-router';

const router = useRouter();

function goMy() {
  router.push('/my');
}
function goSub() {
  router.push('/mysub');
}
</script>

<style scoped>
.wrap {
  position: fixed;
  top: 0px;
  left: 0px;
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: end;
  z-index: 99999;
}
.wrap .model {
  width: 100%;
  height: 316px;
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
/* con02 */
.con02 {
  margin-top: 18px;
}
.con02 ul {
  display: flex;
  flex-direction: column;
}
.con02 .title {
  width: 100%;
  height: 42px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #222;
  text-align: center;
  font-feature-settings: 'liga' off, 'clig' off;
  font-family: Pretendard;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: 18px; /* 128.571% */
  border-radius: 40px;
  background: #f6f6f6;
}

.card {
  width: 100%;
  height: 56px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 12px 8px;
  border-radius: 8px;
  border-bottom: 1px solid #dadada;
  background: #fff;
}
.card .card-title {
  display: flex;
  align-items: center;
  gap: 8px;
  color: #222;
  font-feature-settings: 'liga' off, 'clig' off;
  font-family: Pretendard;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 22px; /* 137.5% */
}
.card .card-title img {
  width: 32px;
  height: 32px;
}
</style>
