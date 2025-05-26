<template>
  <div class="header">
    <img src="/src/assets/img/Authentication/leftAllow.png" alt="뒤로가기" />
    <span>카테고리</span>
  </div>
  <ul class="category">
    <li>카테고리</li>
    <li>브랜드</li>
    <li>카테고리</li>
  </ul>
  <div class="wrap">
    <ul class="special-exhibition">
      <li>
        <img src="/src/assets/img/productList/specialExhibition01.png" alt="" />
        <div class="main">
          <p>2024.03.14 ~ 2024.04.14</p>
          <h1>문방구 기획전 신학기 문구용품 빅세일 이벤트</h1>
          <span class="count">
            <p>16,000</p>
            <span>원</span>
            <span>~</span>
          </span>
        </div>
      </li>
      <li>
        <img src="/src/assets/img/productList/specialExhibition01.png" alt="" />
        <div class="main">
          <p>2024.03.14 ~ 2024.04.14</p>
          <h1>문방구 기획전 신학기 문구용품 빅세일 이벤트</h1>
          <span class="count">
            <p>16,000</p>
            <span>원</span>
            <span>~</span>
          </span>
        </div>
      </li>
    </ul>
  </div>
</template>

<script setup></script>

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
  left: 50%;
  transform: translateX(-50%);
  color: #212121;
  font-family: Pretendard;
  font-size: 20px;
  font-weight: 600;
  line-height: 28px;
}
.category {
  display: flex;
}
.category li {
  width: 100%;
  height: 46px;
  padding: 8px 24px 16px 24px;
  color: #212121;
  font-feature-settings: 'liga' off, 'clig' off;
  font-family: Pretendard;
  font-size: 16px;
  font-style: normal;
  font-weight: 500;
  line-height: 140%; /* 22category */
  text-align: center;
  border-bottom: 1px solid #ddd;
}
.category li:active {
  color: #2866ec;
  border-bottom: 2px solid #2866ec;
}
.category-list {
  display: flex;
  flex-wrap: wrap;
  gap: 9px;
  margin: 0 auto;
  padding: 40px 24px 0px 24px;
}
.category-list img {
  width: 75px;
  height: 75px;
}
.special-exhibition {
  display: flex;
  flex-direction: column;
  gap: 30px;
  margin-top: 40px;
}
.special-exhibition li img {
  width: 327px;
  height: 140px;
  margin-bottom: 20px;
}
.special-exhibition li .main p {
  color: #565656;
  font-family: Pretendard;
  font-size: 12px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
}
.special-exhibition li .main h1 {
  margin-top: 2px;
  color: #222;
  font-family: Pretendard;
  font-size: 16px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
}
.special-exhibition li .main .count {
  margin-top: 8px;
  display: flex;
  align-items: center;
  gap: 2px;
}
.special-exhibition li .main .count p {
  color: #222;
  font-family: Pretendard;
  font-size: 16px;
  font-style: normal;
  font-weight: 800;
  line-height: normal;
}
.special-exhibition li .main .count span {
  color: #222;
  font-family: Pretendard;
  font-size: 12px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
}
/* focus-within */
.category:focus-within li {
  color: #2866ec;
  border-bottom: 2px solid #2866ec;
}
.wrap {
  padding: 0px 24px;
  display: flex;
  justify-content: center;
}
</style>
