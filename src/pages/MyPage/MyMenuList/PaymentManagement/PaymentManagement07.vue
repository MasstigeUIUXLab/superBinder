<template>
  <div class="title">
    <img
      src="/src/assets/img/Authentication/leftAllow.png"
      alt="뒤로가기"
      @click="goBack"
    />
    <span>카드등록</span>
  </div>
  <div class="account-register">
    <div class="form-group">
      <label class="from-title" for="account-number">카드번호</label>
      <input
        id="account-number"
        type="text"
        placeholder=" 0000     -     0000     -     0000     -     0000"
      />
    </div>

    <div class="form-groups form-group-main">
      <div>
        <div class="group-man">
          <label class="from-title" for="auth-method">유효기간</label>
          <input id="auth-method" type="text" placeholder="인증방법 선택" />
        </div>
        <div class="group-man">
          <label class="from-title" for="auth-method">CVC</label>
          <input id="auth-method" type="text" placeholder="인증방법 선택" />
        </div>
      </div>
    </div>

    <div class="form-group">
      <label class="from-title" for="auth-method">카드 비밀번호</label>
      <input id="auth-method" type="text" placeholder="계좌 별명 입력(선택)" />
      <!-- <p class="pp">사용 목적에 따라 별명을 설정할 수 있어요.</p> -->
    </div>

    <div class="agree">
      <div class="check-item-main">
        <input type="checkbox" class="check-all" v-model="allChecked" />
        <label class="label-title" for="check-all">약관 전체 동의</label>
      </div>
      <div class="check-item">
        <input id="terms-1rd" type="checkbox" v-model="terms1rd" />
        <label for="terms-1rd">개인(신용)정보 수집 및 이용 동의</label>
      </div>
      <div class="check-item">
        <input type="checkbox" class="terms-2rd" v-model="terms2rd" />
        <label for="terms-2rd">카드사 개인(신용)정보 제공 동의</label>
      </div>
    </div>
    <button type="button" class="submit-btn" disabled>등록</button>
  </div>
</template>

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
.account-register {
  padding: 0 24px;
  font-family: Pretendard, sans-serif;
  color: #222;
}

.notice {
  margin-top: 24px;
  font-size: 14px;
  line-height: 1.5;
  color: #666;
  text-align: center;
  color: #222;
  text-align: center;
  font-feature-settings: 'liga' off, 'clig' off;
  font-family: Pretendard;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 140%;
}

.notice span {
  font-size: 12px;
  color: #999;
}

.bank-card {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 24px 0 16px;
  padding: 12px 16px;
  border: 1px solid #2866ec;
  border-radius: 8px;
  background: #fff;
  margin-top: 40px;
}

.bank-info {
  display: flex;
  align-items: center;
  gap: 12px;
}

.bank-logo {
  width: 32px;
  height: 32px;
}

.bank-name {
  color: #222;

  font-feature-settings: 'liga' off, 'clig' off;
  font-family: Pretendard;
  font-size: 14px;
  font-style: normal;
  font-weight: 700;
  line-height: 140%;
}

.change-btn {
  background: none;
  border: none;
  cursor: pointer;
  color: #2866ec;
  text-align: right;
  font-feature-settings: 'liga' off, 'clig' off;
  font-family: Pretendard;
  font-size: 14px;
  font-style: normal;
  font-weight: 600;
  line-height: 20px;
}

.form-group {
  display: flex;
  flex-direction: column;
  margin-bottom: 6px;
}
.form-group-main {
}
.form-group-main .group-man input {
  width: 160px;
}

.form-group label {
  color: #222;
  font-feature-settings: 'liga' off, 'clig' off;
  font-family: Pretendard;
  font-size: 14px;
  font-style: normal;
  font-weight: 600;
  line-height: 18px; /* 128.571% */
  margin-bottom: 8px;
}

.form-group input,
.form-group select {
  height: 48px;
  padding: 0 12px;
  font-size: 14px;
  border: 1px solid #ddd;
  border-radius: 8px;
  background: #fff;
}

.form-group select {
  appearance: none;
  background-repeat: no-repeat;
  background-position: right 12px center;
}
.form-groups {
  display: flex;
  flex-direction: column;
}
.form-groups label {
  color: #222;
  font-feature-settings: 'liga' off, 'clig' off;
  font-family: Pretendard;
  font-size: 14px;
  font-style: normal;
  font-weight: 600;
  line-height: 18px; /* 128.571% */
  margin-bottom: 8px;
}

.form-groups input,
.form-groups select {
  height: 48px;
  padding: 0 12px;
  font-size: 14px;
  border: 1px solid #ddd;
  border-radius: 8px;
  background: #fff;
}
.form-group-main > div {
  display: flex;
  gap: 16px;
  margin: 16px 0px;
}

.submit-btn {
  width: 100%;
  height: 52px;
  margin-top: 24px;
  background: #ccc;
  color: #fff;
  border: none;
  border-radius: 8px;
  color: #fff;
  text-align: center;
  font-feature-settings: 'liga' off, 'clig' off;
  font-family: Pretendard;
  font-size: 16px;
  font-style: normal;
  font-weight: 600;
  line-height: 22px;
  margin-bottom: 24px;
}
#account-number,
#auth-method {
  color: #666;

  font-feature-settings: 'liga' off, 'clig' off;
  font-family: Pretendard;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 22px;
}
.terms-title {
  color: #222;
  font-feature-settings: 'liga' off, 'clig' off;
  font-family: Pretendard;
  font-size: 16px;
  font-style: normal;
  font-weight: 600;
  line-height: 140%;
  margin: 60px 0px 24px 0px;
}

.terms-list {
  display: flex;
  gap: 20px;
  flex-direction: column;
  margin-bottom: 24px;
}
.terms-item {
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.pp {
  color: #aaa;
  font-family: Pretendard;
  font-size: 12px;
  font-style: normal;
  font-weight: 400;
  line-height: 14px;
  margin-top: 6px;
}

.agree {
  margin-top: 158px;
  display: flex;
  flex-direction: column;
  width: 100%;
}
.agree {
  width: 100%;
}
.agree .main-title {
  color: #222;
  font-feature-settings: 'liga' off, 'clig' off;
  font-family: Pretendard;
  font-size: 18px;
  font-style: normal;
  font-weight: 600;
  line-height: 25px;
}
.agree .check-item-main {
  width: 100%;
  height: 56px;
  padding: 16px;
  margin-top: 16px;
  margin-bottom: 8px;
  color: #222;
  font-family: Pretendard;
  font-size: 16px;
  font-style: normal;
  font-weight: 600;
  line-height: 22px;
  display: flex;
  align-items: center;
  border-radius: 20px;
  background: #f5f5f5;
}
.agree .check-item {
  width: 100%;
  height: 56px;
  padding: 16px;
  color: #222;
  font-family: Pretendard;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: 20px;
  display: flex;
  align-items: center;
}
.agree input {
  width: 24px;
  height: 24px;
  margin-right: 8px;
}

.btn-group {
  width: 100%;
  display: flex;
  gap: 8px;
  padding: 24px;
  bottom: 0;
  position: fixed;
}
.btn-group button {
  width: 100%;
  height: 56px;
  color: #222;
  text-align: center;
  font-feature-settings: 'liga' off, 'clig' off;
  font-family: Pretendard;
  font-size: 16px;
  font-style: normal;
  font-weight: 600;
  line-height: 22px;
  border-radius: 8px;
  background: #ffffff;
  border: 1px solid #c2c2c2;
}
.btn-group .btn-submit {
  background: #c2c2c2;
  color: #ffffff;
  transition: background 0.3s;
}

.btn-group .btn-submit.active {
  background: #2866ec;
  cursor: pointer;
}
input::placeholder {
  color: #c2c2c2;
  font-feature-settings: 'liga' off, 'clig' off;
  font-family: Pretendard;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 22px; /* 137.5% */
}
label {
  color: #222;
  font-family: Pretendard;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: 20px; /* 142.857% */
}
.label-title {
  color: #222;
  font-family: Pretendard;
  font-size: 16px;
  font-style: normal;
  font-weight: 600;
  line-height: 22px; /* 137.5% */
}
</style>
