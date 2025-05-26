<template>
  <div class="header">
    <!-- a태그 -->

    <img
      src="/src/assets/img/Authentication/leftAllow.png"
      alt="뒤로가기"
      @click="goBack"
    />

    <span>주문/배송 조회</span>
  </div>
  <div class="wrap">
    <div class="con01">
      <div class="title">
        <div class="tit-sub">
          <p>주문내역</p>
          <span>45</span>
        </div>
        <img src="/src/assets/img/icon/filterIcon.svg" />
      </div>
    </div>
    <div class="con2">
      <div class="item line alert">
        <img src="/src/assets/img/announcement/announcementAlert.svg" alt="" />
        <p>슈퍼바인더 대시보드 신규 업데이트!</p>
        <span>2025.02.21 11:25:35</span>
      </div>
      <div class="item line">
        <div class="new">
          <p>슈퍼바인더 대시보드 신규 업데이트!</p>
          <img src="/src/assets/img/announcement/announcementNEW.svg" alt="" />
        </div>
        <span>2025.02.21 11:25:35</span>
      </div>
      <div class="item line">
        <p>슈퍼바인더 대시보드 신규 업데이트!</p>
        <span>2025.02.21 11:25:35</span>
      </div>
      <div class="item">
        <p>슈퍼바인더 대시보드 신규 업데이트!</p>
        <span>2025.02.21 11:25:35</span>
      </div>
    </div>
    <div class="con03">
      <div class="bottom">
        <img src="/src/assets/img/icon/flus.svg" alt="" />
        <span>더보기</span>
      </div>
    </div>
  </div>
</template>

<script setup></script>

<style scoped>
.header {
  height: 62px;
  padding: 13px 16px;
  display: flex;
  align-items: center;
  position: relative;
}
.header a {
  display: flex;
  align-items: center;
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
.wrap {
}
.con01 {
  padding: 20px 24px;
}
.con01 .title {
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.tit-sub {
  display: flex;
  gap: 4px;
}
.tit-sub p {
  color: #222;
  font-family: Pretendard;
  font-size: 18px;
  font-weight: 600;
}
.tit-sub span {
  display: flex;
  align-self: center;
  border-radius: 11px;
  background: #ff2a59;
  width: 23px;
  height: 13px;
  color: #fff;
  font-family: Pretendard;
  font-size: 10px;
  font-weight: 700;
  padding: 0 4px;
}
.con2 {
  border-top: 1px solid #222222;
  margin: 0px 24px 0px 24px;
}
.con2 .alert {
  background: #f3f7ff;
}
.con2 .alert a {
  display: flex;
}
.con2 .alert a p {
  color: #2866ec;
  font-feature-settings: 'liga' off, 'clig' off;
  font-family: Pretendard;
  font-size: 16px;
  font-style: normal;
  font-weight: 600;
  line-height: 22px; /* 137.5% */
}

.con2 .item .new {
  display: flex;
}
.con2 .item {
  padding: 16px 8px;
  border-bottom: 1px solid #e2e2e2;
  display: flex;
  flex-direction: column;
  justify-content: center;
}
.con2 .item p {
  color: #222;
  font-feature-settings: 'liga' off, 'clig' off;
  font-family: Pretendard;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 22px; /* 137.5% */
}
.con2 .item span {
  color: #626262;
  font-feature-settings: 'liga' off, 'clig' off;
  font-family: Pretendard;
  font-size: 12px;
  font-style: normal;
  font-weight: 400;
  line-height: 18px; /* 150% */
}
.con03 {
  margin-top: 16px;
  padding: 0px 48px;
  width: 100%;
}
.bottom {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 52px;
  border-radius: 40px;
  background: #f6f6f6;
}
.con03 .bottom img {
  width: 24px;
  height: 24px;
}
.con03 .bottom span {
  color: #222;
  text-align: center;
  font-feature-settings: 'liga' off, 'clig' off;
  font-family: Pretendard;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: 18px; /* 128.571% */
}
</style>
