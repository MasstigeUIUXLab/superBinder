<template>
  <div class="title">
    <img
      src="/src/assets/img/Authentication/leftAllow.png"
      alt="뒤로가기"
      @click="goBack"
    />
    <span>슈퍼페이 충전</span>
  </div>
  <div class="container">
    <div class="amount-section">
      <div class="header">
        <p class="charge">충전금액</p>
        <button class="reset-btn" @click="reset">초기화</button>
      </div>
      <div class="amount-input-wrapper">
        <input
          type="number"
          v-model.number="amount"
          placeholder="충전 금액 입력 (최소 10만원)"
          class="amount-input"
        />
      </div>
      <div class="preset-buttons">
        <button type="button" @click="addAmount(100000)">+10만</button>
        <button type="button" @click="addAmount(500000)">+50만</button>
        <button type="button" @click="addAmount(1000000)">+100만</button>
      </div>
      <p class="error" v-if="amount > 0 && amount < MIN_AMOUNT">
        * 충전 가능한 최소 금액이 충족되지 않습니다.
      </p>
    </div>
    <div class="payment">
      <p>결제수단</p>
      <div class="radio-group">
        <label class="radio" :class="{ selected: paymentMethod === 'toss' }">
          <input type="radio" value="toss" v-model="paymentMethod" />
          <span>토스 페이</span>
        </label>
        <label class="radio" :class="{ selected: paymentMethod === 'bank' }">
          <input type="radio" value="bank" v-model="paymentMethod" />
          <span>계좌 이체</span>
        </label>
      </div>
    </div>
    <div class="notice">
      <p class="notice-title">충전 시 유의사항</p>
      <p class="notice-txt">
        재충전 이후 거래 이력이 없는 경우, 충전일로부터 최대 7일 내 취소가
        가능합니다.
      </p>
    </div>
    <div class="summary">
      <h1>충전 후 예상 잔액</h1>
      <p class="balance">{{ formattedPredictedBalance }}<span>원</span></p>
    </div>
  </div>
  <div class="bottom">
    <button class="charge-btn" :disabled="!canCharge" @click="charge">
      충전하기
    </button>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue';
const MIN_AMOUNT = 100000;
const currentBalance = 0;
const amount = ref(0);
const paymentMethod = ref('');
function reset() {
  amount.value = 0;
}
function addAmount(val) {
  amount.value += val;
}
const canCharge = computed(
  () => amount.value >= MIN_AMOUNT && paymentMethod.value !== ''
);
const predictedBalance = computed(
  () => currentBalance + (amount.value >= MIN_AMOUNT ? amount.value : 0)
);
const formattedPredictedBalance = computed(() =>
  predictedBalance.value.toLocaleString()
);
function charge() {}
</script>

<style scoped>
.title {
  height: 62px;
  padding: 13px 16px;
  display: flex;
  align-items: center;
  position: relative;
}
.title img {
  width: 24px;
  height: 24px;
  cursor: pointer;
}
.title span {
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
  color: #212121;
  font-family: Pretendard;
  font-size: 20px;
  font-weight: 600;
  line-height: 28px;
}
.container {
  margin: 0 auto;
  padding: 20px 24px 0px 24px;
  font-family: Pretendard, sans-serif;
  color: #333;
}
.amount-section .header {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.charge {
  color: #222;
  font-feature-settings: 'liga' off, 'clig' off;
  font-family: Pretendard;
  font-size: 18px;
  font-style: normal;
  font-weight: 600;
  line-height: 140%; /* 25.2px */
}
.reset-btn {
  background: none;
  border: none;
  color: #2866ec;
  font-family: Pretendard;
  font-size: 14px;
  font-weight: 600;
  line-height: 20px;
  cursor: pointer;
}
.amount-input-wrapper {
  position: relative;
  margin-top: 8px;
}
.amount-input {
  width: 100%;
  padding: 13px 12px;
  padding-right: 36px;
  border: 1px solid #ccc;
  border-radius: 4px;
  text-align: right;
  color: #666;
  font-feature-settings: 'liga' off, 'clig' off;
  font-family: Pretendard;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 22px;
}
.amount-input::placeholder {
  color: #666;
  text-align: right;
}
.amount-input-wrapper::after {
  content: '원';
  position: absolute;
  right: 24px;
  top: 50%;
  transform: translateY(-50%);
  font-family: Pretendard;
  font-size: 16px;
  font-weight: 400;
  color: #666;
  line-height: 22px;
  pointer-events: none;
}
.preset-buttons {
  display: flex;
  justify-content: space-between;
  margin-top: 17px;
}
.preset-buttons button {
  flex: 1;
  margin-right: 8px;
  padding: 8px 0;
  border: 1px solid #dadada;
  border-radius: 4px;
  cursor: pointer;
  color: #222;
  font-feature-settings: 'liga' off, 'clig' off;
  font-family: Pretendard;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: 20px; /* 142.857% */
}
.preset-buttons button:last-child {
  margin-right: 0;
}
.error {
  margin-top: 8px;
  color: #e74c3c;
  font-size: 0.85rem;
}
.payment p {
  margin: 30px 0 8px;
  font-size: 18px;
  font-weight: 600;
  line-height: 1.4;
  color: #222;
}
.radio-group {
  display: flex;
  gap: 8px;
}
.radio {
  display: flex;
  align-items: center;
  gap: 4px;
  flex: 1;
  height: 56px;
  background: #f5f5f5;
  padding: 16px 8px;
  border: 1px solid transparent;
  border-radius: 8px;
  cursor: pointer;
}
.radio input {
  width: 18px;
  height: 18px;
}
.radio span {
  font-size: 14px;
  font-weight: 600;
  line-height: 20px;
  color: #222;
}
.radio.selected {
  border-color: #2866ec;
  background: #fff;
}
.radio.selected span {
  color: #2866ec;
}
.notice {
  padding: 16px 24px;
  border-radius: 20px;
  margin-top: 30px;
  border-radius: 20px;
  background: #f5f5f5;
}
.notice-title {
  color: #222;
  font-feature-settings: 'liga' off, 'clig' off;
  font-family: Pretendard;
  font-size: 16px;
  font-style: normal;
  font-weight: 700;
  line-height: 140%; /* 22.4px */
}
.notice-txt {
  color: #666;
  font-feature-settings: 'liga' off, 'clig' off;
  font-family: Pretendard;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: 140%; /* 19.6px */
}
.summary {
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-weight: bold;
  margin: 30px 0 148px;
}
.summary h1 {
  color: #121212;
  font-feature-settings: 'liga' off, 'clig' off;
  font-family: Pretendard;
  font-size: 16px;
  font-style: normal;
  font-weight: 600;
  line-height: 20px; /* 125% */
}
.balance {
  color: #222;
  text-align: right;
  font-feature-settings: 'liga' off, 'clig' off;
  font-family: Pretendard;
  font-size: 24px;
  font-style: normal;
  font-weight: 700;
  line-height: 32px; /* 133.333% */
  color: #222;
}
.balance span {
  text-align: right;
  font-feature-settings: 'liga' off, 'clig' off;
  font-family: Pretendard;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: 20px; /* 142.857% */
}
.bottom {
  position: fixed;
  bottom: 0px;
  padding: 24px;
  width: 100%;
}
.charge-btn {
  width: 100%;
  padding: 12px;
  background: #007aff;
  color: #fff;
  font-size: 16px;
  border: none;
  border-radius: 6px;
  cursor: pointer;
}
.charge-btn:disabled {
  background: #ccc;
  cursor: not-allowed;
}
</style>
