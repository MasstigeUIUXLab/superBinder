<template>
  <div class="header">
    <img src="/src/assets/img/Authentication/leftAllow.png" alt="뒤로가기" />
    <span>주문서</span>
  </div>
  <div class="wrap">
    <div class="con01">
      <div class="con01-title">주문자 정보</div>
      <ul>
        <li>
          <p>주문자명</p>
          <span>김슈퍼</span>
        </li>
        <li>
          <p>휴대폰</p>
          <span>010-1234-1234</span>
        </li>
        <li>
          <p>이메일</p>
          <span>testestest089@mail.com</span>
        </li>
      </ul>
    </div>
  </div>
  <div class="con02">
    <ul>
      <li>
        <div class="con02-title com02-title0">
          <p>틸다 배송</p>
          <img src="/src/assets/img/icon/arrowUp.svg" alt="" />
        </div>
        <div class="items">
          <div class="item-title">주문 상품</div>
          <div class="item-con">
            <img src="/src/assets/img/productCard/bannerImg03.png" alt="" />
            <div class="item-detaile">
              <h1>브랜드명</h1>
              <span>2P 블럭 수세미 외 N개</span>
              <p>126,000원</p>
            </div>
          </div>
          <div class="item-bottom">
            <ul>
              <li>
                <p>주문금액</p>
                <span class="item-bootom-txt1">252,000원</span>
              </li>
              <li>
                <p>배송비</p>
                <span class="item-bootom-txt2">+ 6,000원</span>
              </li>
            </ul>
          </div>
        </div>
        <div class="total">
          <h1>합계</h1>
          <p>136,000 <span>원</span></p>
        </div>
      </li>
      <li>
        <div class="con02-title com02-title1">
          <p>밴더 A사</p>
          <img src="/src/assets/img/icon/arrowUp.svg" alt="" />
        </div>
        <div class="total">
          <h1>합계</h1>
          <p>136,000 <span>원</span></p>
        </div>
      </li>
      <li>
        <div class="con02-title com02-title2">
          <p>밴더 A사</p>
          <img src="/src/assets/img/icon/arrowUp.svg" alt="" />
        </div>

        <div class="total">
          <h1>합계</h1>
          <p>136,000 <span>원</span></p>
        </div>
      </li>
    </ul>
  </div>

  <div class="wrap">
    <div class="con03">
      <div class="total-all">
        <div class="total-all-title">총 주문 금액</div>
        <div class="total-all-item">
          <p>408,000 <span>원</span></p>
        </div>
      </div>

      <div class="coupon">
        <div class="coupon-title">쿠폰 사용</div>
        <button>
          <p>선택된 쿠폰이 없습니다.</p>
          <img src="/src/assets/img/icon/rightAllow.svg" alt="" />
        </button>
      </div>

      <div class="payment">
        <div class="payment-title">결제 수단</div>
        <ul>
          <li>
            <label class="style_radio">
              <input type="radio" />
              <p>페이사용</p>
            </label>
          </li>
          <li>
            <label class="style_radio">
              <input type="radio" />
              <p>간편결제</p>
            </label>
          </li>
          <li>
            <label class="style_radio">
              <input type="radio" />
              <p>일반결제</p>
            </label>
          </li>
        </ul>

        <div class="pay-da">
          <div>
            <p class="pay-da-L1">현재 보유 페이</p>
            <span class="pay-da-R1">500,000원</span>
          </div>
          <div>
            <p class="pay-da-L2">할인</p>
            <span class="pay-da-R2">-54,454원</span>
          </div>
        </div>
        <button class="bottom">슈퍼 페이 충전</button>
      </div>

      <div class="pay-result">
        <div class="title">결제정보</div>
        <ul>
          <li>
            <p>상품 금액</p>
            <span>25,800원</span>
          </li>
          <li>
            <p>상품할인금액</p>
            <span>0원</span>
          </li>
          <li>
            <p>배송비</p>
            <span>무료</span>
          </li>
          <li>
            <p>쿠폰 사용</p>
            <span>0원</span>
          </li>
          <li>
            <p>적립금</p>
            <span>150원</span>
          </li>
          <li>
            <p>최종결제금액</p>
            <span>258,000원</span>
          </li>
        </ul>
      </div>

      <div class="warning">
        <div class="title">미출고시 조치방법</div>
        <ul>
          <li>
            <label class="style_radio">
              <input type="radio" />
              <p>슈퍼페이로 환급</p>
            </label>
          </li>
          <li>
            <label class="style_radio">
              <input type="radio" />
              <p>상품 입고시 배송(전체)</p>
            </label>
          </li>
          <li>
            <label class="style_radio">
              <input type="radio" />
              <p>출고가능상품 선배송(부분)</p>
            </label>
          </li>
        </ul>
      </div>

      <div class="agree">
        <div class="title">개인정보 수집/제공</div>
        <div class="agree-item">
          <label class="style_checkbox">
            <input type="checkbox" v-model="agreed" />
            <p>결제 진행시 필수 동의<br />개인정보 수집 이용 동의</p>
          </label>
        </div>
      </div>
    </div>

    <div class="bottom">
      <button
        :disabled="!agreed"
        :class="{ active: agreed }"
        @click="goNextPage"
      >
        결제하기
      </button>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import { useRouter } from 'vue-router';

const router = useRouter();

function goNextPage() {
  router.push('/shoppingcart07');
}

const agreed = ref(false);
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
.wrap {
  padding: 0px 24px;
  background: #ffffff;
}
/* con01 */
.con01 .con01-title {
  margin-top: 20px;
  color: #222;
  font-feature-settings: 'liga' off, 'clig' off;
  font-family: Pretendard;
  font-size: 18px;
  font-style: normal;
  font-weight: 600;
  line-height: 140%; /* 25.2px */
}
.con01 ul {
  display: flex;
  flex-direction: column;
  gap: 16px;
  margin: 18px 0px 10px 0px;
}
.con01 ul li {
  display: flex;
}
.con01 ul li p {
  width: 90px;
  color: #888;
  font-feature-settings: 'liga' off, 'clig' off;
  font-family: Pretendard;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: 140%; /* 19.6px */
}
.con01 ul li span {
  color: #222;
  font-feature-settings: 'liga' off, 'clig' off;
  font-family: Pretendard;
  font-size: 14px;
  font-style: normal;
  font-weight: 600;
  line-height: 140%; /* 19.6px */
}
/* con02 */
.con02 .con02-title {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 16px 24px;
}
/* border */
.com02-title0 {
  border-top: 6px solid #f8f8f8;
}
.con02 .con02-title p {
  color: #222;
  font-feature-settings: 'liga' off, 'clig' off;
  font-family: Pretendard;
  font-size: 18px;
  font-style: normal;
  font-weight: 600;
  line-height: 140%; /* 25.2px */
}
.con02 .con02-title img {
  width: 24px;
  height: 24px;
}
.con02 .items {
  padding: 16px 24px;
  border-top: 1px solid #eee;
  border-bottom: 1px solid #eee;
  background: #f8f8f8;
}
.con02 .items .item-title {
  color: #222;
  font-feature-settings: 'liga' off, 'clig' off;
  font-family: Pretendard;
  font-size: 16px;
  font-style: normal;
  font-weight: 600;
  line-height: 140%; /* 22.4px */
}
/* item-con */
.item-con {
  display: flex;
  gap: 16px;
  background: #fff;
  border: 1px solid #c2c2c2;
  border-radius: 8px;
  padding: 24px;
  margin: 24px 0;
}
.item-con img {
  width: 80px;
  height: 80px;
}
.item-detaile {
  display: flex;
  flex-direction: column;
  gap: 4px;
}
.item-detaile h1 {
  color: #888;
  font-family: Pretendard;
  font-size: 12px;
  font-weight: 500;
}
.item-detaile span,
.item-detaile p {
  color: #222;
  font-family: Pretendard;
  font-size: 16px;
  font-weight: 600;
}
.con02 .items .item-bottom ul li {
  display: flex;
  justify-content: space-between;
}
.con02 .items .item-bottom ul li p {
  color: #222;
  font-feature-settings: 'liga' off, 'clig' off;
  font-family: Pretendard;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: 20px; /* 142.857% */
}
.con02 .items .item-bottom ul li .item-bootom-txt1 {
  color: #222;
  font-feature-settings: 'liga' off, 'clig' off;
  font-family: Pretendard;
  font-size: 14px;
  font-style: normal;
  font-weight: 700;
  line-height: 140%; /* 19.6px */
}
.con02 .items .item-bottom ul li .item-bootom-txt2 {
  color: #222;
  font-feature-settings: 'liga' off, 'clig' off;
  font-family: Pretendard;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: 140%; /* 19.6px */
}
.con02 .total {
  display: flex;
  justify-content: space-between;
  padding: 16px 24px;
  border-bottom: 6px solid #f8f8f8;
}
.con02 .total h1 {
  color: #121212;
  font-feature-settings: 'liga' off, 'clig' off;
  font-family: Pretendard;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 140%; /* 22.4px */
}
.con02 .total p {
  color: #121212;
  font-feature-settings: 'liga' off, 'clig' off;
  font-family: Pretendard;
  font-size: 16px;
  font-style: normal;
  font-weight: 700;
  line-height: 140%; /* 22.4px */
}
.con02 .total span {
  color: #121212;
  font-feature-settings: 'liga' off, 'clig' off;
  font-family: Pretendard;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 140%;
}
/* con03 */
.con03 {
  display: flex;
  flex-direction: column;
  gap: 40px;
}
.con03 .total-all {
  width: 100%;
  height: 57px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: 30px;
  padding: 16px 24px;
  border-radius: 8px;
  border: 2px solid #2866ec;
  background: #f3f7ff;
}
.con03 .total-all .total-all-title {
  color: #2866ec;
  font-feature-settings: 'liga' off, 'clig' off;
  font-family: Pretendard;
  font-size: 18px;
  font-style: normal;
  font-weight: 600;
  line-height: 140%; /* 25.2px */
}
.con03 .total-all .total-all-item {
  color: #2866ec;
  font-feature-settings: 'liga' off, 'clig' off;
  font-family: Pretendard;
  font-size: 18px;
  font-style: normal;
  font-weight: 700;
  line-height: 140%; /* 25.2px */
}
.con03 .total-all .total-all-item span {
  color: #2866ec;
  font-feature-settings: 'liga' off, 'clig' off;
  font-family: Pretendard;
  font-size: 18px;
  font-style: normal;
  font-weight: 400;
  line-height: 140%;
}
.con03 .coupon .coupon-title {
  margin-bottom: 16px;
  color: #222;
  font-feature-settings: 'liga' off, 'clig' off;
  font-family: Pretendard;
  font-size: 18px;
  font-style: normal;
  font-weight: 600;
  line-height: 140%; /* 25.2px */
}
.con03 .coupon button {
  width: 100%;
  display: flex;
  justify-content: space-between;
  padding: 12px 13px;
  color: #888;
  font-feature-settings: 'liga' off, 'clig' off;
  font-family: Pretendard;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 22px; /* 137.5% */
  border: none;
  border-radius: 8px;
  border: 1px solid #c2c2c2;
  background: #fff;
}
.con03 .payment .payment-title {
  color: #222;
  font-feature-settings: 'liga' off, 'clig' off;
  font-family: Pretendard;
  font-size: 18px;
  font-style: normal;
  font-weight: 600;
  line-height: 140%; /* 25.2px */
}
.con03 .payment ul {
  display: flex;
  gap: 8px;
  margin-top: 16px;
}
.con03 .payment ul li {
  width: 100%;
}
.con03 .payment ul li .style_radio {
  height: 56px;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 4px;
  border-radius: 8px;
  border: 1px solid #2866ec;
  background: #f5f5f5;
}
.con03 .payment ul li input {
  width: 18px;
  height: 18px;
}
.con03 .payment ul li p {
  color: #2866ec;
  font-feature-settings: 'liga' off, 'clig' off;
  font-family: Pretendard;
  font-size: 14px;
  font-style: normal;
  font-weight: 600;
  line-height: 20px; /* 142.857% */
}
.con03 .payment .pay-da {
  padding: 26px 0px 10px 0px;
  display: flex;
  flex-direction: column;
  gap: 8px;
}
.con03 .payment .pay-da div {
  display: flex;
  justify-content: space-between;
  color: #222;
  font-feature-settings: 'liga' off, 'clig' off;
  font-family: Pretendard;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: 140%; /* 19.6px */
}
.con03 .payment .pay-da div .pay-da-R1 {
  color: #888;
  font-feature-settings: 'liga' off, 'clig' off;
  font-family: Pretendard;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: 20px; /* 142.857% */
}
.con03 .payment .pay-da div .pay-da-R2 {
  color: #e52f28;
  font-feature-settings: 'liga' off, 'clig' off;
  font-family: Pretendard;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: 20px; /* 142.857% */
}
.con03 .bottom {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 40px;
  margin-top: 16px;
  color: #fff;
  text-align: center;
  font-feature-settings: 'liga' off, 'clig' off;
  font-family: Pretendard;
  font-size: 14px;
  font-style: normal;
  font-weight: 500;
  line-height: 20px; /* 142.857% */
  border-radius: 8px;
  background: #222;
}
/* 기존 bottom 버튼 기본 색상 */
.bottom button {
  width: 100%;
  height: 56px;
  border-radius: 8px;
  border: none;
  font-family: Pretendard;
  font-size: 16px;
  font-weight: 600;
  line-height: 22px;
  transition: background 0.3s;
}

/* 비활성(체크 안 됐을 때) */
.bottom button:disabled {
  background: #c2c2c2;
  color: #fff;
  cursor: not-allowed;
}

/* 활성(체크 됐을 때) */
.bottom button.active {
  background: #2866ec;
  color: #fff;
  cursor: pointer;
}
.con03 .pay-result {
  width: 100%;
  height: 247px;
  padding: 16px 24px;
  border-radius: 30px;
  background: #f5f5f5;
}
.con03 .pay-result .title {
  margin-bottom: 20px;
  color: #222;
  font-feature-settings: 'liga' off, 'clig' off;
  font-family: Pretendard;
  font-size: 18px;
  font-style: normal;
  font-weight: 600;
  line-height: 140%; /* 25.2px */
}
.con03 .pay-result ul {
  display: flex;
  flex-direction: column;
  gap: 8px;
}
.con03 .pay-result ul li {
  display: flex;
  justify-content: space-between;
  padding: 0px 10px;
}
.con03 .pay-result ul li p {
  color: #666;
  font-feature-settings: 'liga' off, 'clig' off;
  font-family: Pretendard;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: 140%; /* 19.6px */
}
.con03 .pay-result ul li span {
  color: #222;
  font-feature-settings: 'liga' off, 'clig' off;
  font-family: Pretendard;
  font-size: 14px;
  font-style: normal;
  font-weight: 600;
  line-height: 140%; /* 19.6px */
}
.con03 .warning .title {
  color: #222;
  font-feature-settings: 'liga' off, 'clig' off;
  font-family: Pretendard;
  font-size: 16px;
  font-style: normal;
  font-weight: 600;
  line-height: 140%; /* 22.4px */
  margin-bottom: 8px;
}
.con03 .warning ul {
  display: flex;
  flex-direction: column;
  gap: 16px;
  padding: 10px 0px;
}
.con03 .warning ul li .style_radio {
  display: flex;
  gap: 4px;
}
.con03 .warning ul li .style_radio input {
  width: 24px;
  height: 24px;
}
.con03 .warning ul li .style_radio p {
  color: #222;
  font-feature-settings: 'liga' off, 'clig' off;
  font-family: Pretendard;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: 20px; /* 142.857% */
}
.con03 .warning ul li .style_radio input:checked + p {
  color: #2866ec;
}
.con03 .agree {
  width: 100%;
  height: 114px;
  padding: 16px 24px;
  border-radius: 30px;
  background: #f5f5f5;
}
.con03 .agree .title {
  color: #222;
  font-feature-settings: 'liga' off, 'clig' off;
  font-family: Pretendard;
  font-size: 16px;
  font-style: normal;
  font-weight: 600;
  line-height: 140%; /* 22.4px */
}
.con03 .agree .agree-item {
  margin-top: 16px;
}
.con03 .agree .agree-item .style_checkbox {
  display: flex;
  gap: 4px;
}
.con03 .agree .agree-item .style_checkbox input {
  width: 24px;
  height: 24px;
}
.con03 .agree .agree-item .style_checkbox p {
  color: #222;
  font-feature-settings: 'liga' off, 'clig' off;
  font-family: Pretendard;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: 20px; /* 142.857% */
}
.bottom {
  padding: 24px 0px;
}
.bottom button {
  width: 100%;
  height: 56px;
  color: #fff;
  text-align: center;
  font-feature-settings: 'liga' off, 'clig' off;
  font-family: Pretendard;
  font-size: 16px;
  font-style: normal;
  font-weight: 600;
  line-height: 22px; /* 137.5% */
  border-radius: 8px;
  background: #c2c2c2;
  border: none;
}
</style>
