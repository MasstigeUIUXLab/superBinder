<template>
  <div class="title">
    <img
      src="/src/assets/img/Authentication/leftAllow.png"
      alt="뒤로가기"
      @click="goBack"
    />
    <span>계좌 등록록</span>
  </div>
  <div class="account-register">
    <p class="notice">
      본인 명의의 계좌만 등록 가능합니다.<br />
      <span>(가상계좌, 적금, 펀드계좌, 평생계좌 제외)</span>
    </p>

    <div class="bank-card">
      <div class="bank-info">
        <img
          class="bank-logo"
          src="/src/assets/img/bankLogo/kakaoBig.svg"
          alt="카카오 뱅크"
        />
        <span class="bank-name">카카오 뱅크</span>
      </div>
      <button type="button" class="change-btn">변경</button>
    </div>

    <div class="form-group">
      <label for="account-number">계좌번호</label>
      <input id="account-number" type="text" placeholder="계좌번호 입력" />
    </div>

    <div class="form-group">
      <label for="auth-method">인증방법</label>
      <input id="auth-method" type="text" placeholder="인증방법 선택" />
    </div>

    <div class="terms">
      <div class="form-group">
        <label for="auth-method">계좌 별명</label>
        <input
          id="auth-method"
          type="text"
          placeholder="계좌 별명 입력(선택)"
        />
        <p class="pp">사용 목적에 따라 별명을 설정할 수 있어요.</p>
      </div>
    </div>
  </div>
  <div class="bottom">
    <button type="button" class="submit-btn" disabled>등록 완료</button>
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
  color: #222;
  text-align: center;
  font-feature-settings: 'liga' off, 'clig' off;
  font-family: Pretendard;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 140%; /* 22.4px */
}

.notice span {
  color: #888;
  font-feature-settings: 'liga' off, 'clig' off;
  font-family: Pretendard;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 140%;
}

.bank-card {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 18px 16px;
  border-radius: 20px;
  border: 1px solid #2866ec;
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
  line-height: 140%; /* 19.6px */
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
  margin-top: 24px;
}
.form-group .account-number {
  color: #222;
  font-feature-settings: 'liga' off, 'clig' off;
  font-family: Pretendard;
  font-size: 14px;
  font-style: normal;
  font-weight: 600;
  line-height: 18px; /* 128.571% */
}
.form-group.placeholder {
  color: #666;
  font-feature-settings: 'liga' off, 'clig' off;
  font-family: Pretendard;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 22px; /* 137.5% */
}

.form-group label {
  font-size: 14px;
  font-weight: 500;
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
.bottom {
  position: fixed;
  bottom: 0px;
  width: 100%;
  padding: 24px;
}
.submit-btn {
  width: 100%;
  height: 52px;
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
  line-height: 140%; /* 22.4px */
  margin: 60px 0px 16px 0px;
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
  color: #222;
  font-feature-settings: 'liga' off, 'clig' off;
  font-family: Pretendard;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: 20px; /* 142.857% */
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
.form-group label {
  color: #222;
  font-feature-settings: 'liga' off, 'clig' off;
  font-family: Pretendard;
  font-size: 14px;
  font-style: normal;
  font-weight: 600;
  line-height: 18px; /* 128.571% */
}
</style>
