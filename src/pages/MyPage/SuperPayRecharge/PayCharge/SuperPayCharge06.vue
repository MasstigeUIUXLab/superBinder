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

    <div class="form-group auth-method-group">
      <label for="auth-method">인증방법</label>
      <div class="input-wrapper">
        <input id="auth-method" type="text" placeholder="인증방법 선택" />
        <img src="/src/assets/img/icon/bottomarrow.png" alt="화살표" />
      </div>
    </div>
  </div>
  <div class="bottom">
    <button>계좌인증</button>
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
  font-size: 16px;
  line-height: 140%;
}
.notice span {
  color: #888;
}

.bank-card {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 18px 16px;
  border-radius: 20px;
  border: 1px solid #ddd;
  background: #fff;
  margin-top: 40px;
  transition: border-color 0.2s;
}
/* 버튼(또는 내부 요소)에 포커스/활성화 시 파란 테두리 적용 */
.bank-card:focus-within {
  border-color: #2866ec;
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
  font-size: 14px;
  font-weight: 700;
  line-height: 140%;
}

.change-btn {
  background: none;
  border: none;
  cursor: pointer;
  color: #2866ec;
  font-size: 14px;
  font-weight: 600;
}

.form-group {
  display: flex;
  flex-direction: column;
  margin-top: 24px;
}
.form-group label {
  font-size: 14px;
  font-weight: 600;
  margin-bottom: 8px;
}
.form-group input {
  height: 48px;
  padding: 0 12px;
  font-size: 16px;
  border: 1px solid #ddd;
  border-radius: 8px;
  background: #fff;
  color: #666;
}

/* 인증방법 입력 영역 */
.auth-method-group .input-wrapper {
  position: relative;
}
.auth-method-group .input-wrapper input {
  width: 100%;
  padding-right: 40px;
}
.auth-method-group .input-wrapper img {
  position: absolute;
  right: 12px;
  top: 50%;
  transform: translateY(-50%);
  pointer-events: none;
  width: 20px;
  height: 20px;
}
.bottom {
  position: fixed;
  bottom: 0px;
  width: 100%;
  padding: 24px;
}
.bottom button {
  width: 100%;
  padding: 17px 10px;
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
