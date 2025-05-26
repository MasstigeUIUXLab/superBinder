<template>
  <div class="login-wrapper">
    <div class="title-logo">
      <img
        src="/src/assets/img/Authentication/loginLogo01.png"
        alt="title-img"
        class="title-img"
      />
      <p class="title-message">안녕하세요</p>
      <p class="title-message ko2">슈퍼바인더입니다.</p>
    </div>

    <form class="login-form" @submit.prevent="handleLogin">
      <input
        v-model="userId"
        type="text"
        :class="['input-id input', { error: loginFailed }]"
        placeholder="아이디 또는 사업자등록번호 -없이 입력"
      />
      <div class="password-wrapper">
        <input
          v-model="password"
          :type="showPassword ? 'text' : 'password'"
          :class="['input-pw input', { error: loginFailed }]"
          placeholder="비밀번호를 입력하세요."
          maxlength="20"
        />
        <span class="eye-icon" @click="togglePassword">
          <img
            v-if="showFirst"
            src="/src/assets/img/icon/eyeClose.svg"
            alt="eyeCloseImg"
          />
          <img v-else src="/src/assets/img/icon/eyeOpen.svg" alt="eyeOpenImg" />
        </span>
      </div>

      <div class="login-check">
        <label class="style_checkbox">
          <input type="checkbox" />
          <img
            src="/src/assets/img/cart/checkbox_active.png"
            alt="체크옵션 2"
          />
        </label>
        <p>자동로그인</p>
      </div>

      <p v-if="loginFailed" class="error-msg2">
        로그인에 실패하였습니다.<br />
        입력하신 정보를 다시 확인해주세요.
      </p>

      <button
        type="submit"
        class="login-btn"
        :class="{ active: isLoginValid }"
        @click="goNextPage"
        :disabled="!isLoginValid"
      >
        로그인
      </button>
      <div class="pw-search" @click="goSearchPw">
        <p class="find-password">비밀번호를 잊으셨나요?</p>
      </div>
    </form>
  </div>
  <div class="bottom">
    <div class="sign-up" @click="gobiz">
      <span>아직 슈퍼바인더 계정이 없으신가요?</span>
      <p href="#" class="signup-link">회원가입</p>
    </div>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue';
import { useRouter } from 'vue-router';

const router = useRouter();
const userId = ref('');
const password = ref('');
const autoLogin = ref(false);
const showPassword = ref(false);
const showFirst = ref(true);
const loginFailed = ref(false);

function goNextPage() {
  router.push('/');
}
function goSearchPw() {
  router.push('/search/pw01');
}
function gobiz() {
  router.push('/bizauth/agreement');
}

const isLoginValid = computed(() => {
  return userId.value.trim() !== '' && password.value.trim() !== '';
});

const togglePassword = () => {
  showPassword.value = !showPassword.value;
  showFirst.value = !showFirst.value;
};

const handleLogin = () => {
  if (!isLoginValid.value) {
    loginFailed.value = true;
  } else {
    loginFailed.value = false;
    console.log('로그인 시도:', userId.value, password.value);
  }
};

function Login() {
  router.push('');
}
</script>

<style scoped>
.login-wrapper {
  padding: 24px;
  font-family: 'Pretendard', sans-serif;
  height: 100vh;
}
.login-wrapper .title-logo {
  width: 327px;
}
.login-wrapper .title-logo .title-img {
  width: 72px;
  height: 72px;
  background-size: cover;
  margin: 40px 0px 16px 0px;
}
.login-wrapper .title-logo .title-message {
  color: #222;
  font-size: 24px;
  font-weight: 400;
  line-height: 33px;
}
.login-wrapper .title-logo .ko2 {
  color: #2866ec;
  font-weight: 700;
}
.login-wrapper .login-form .input {
  width: 100%;
  height: 48px;
  padding: 13px 12px;
  border-radius: 8px;
  border: 1px solid #c2c2c2;
  background: #fff;
  margin-bottom: 10px;
}

.login-wrapper .login-form input::placeholder {
  color: #c2c2c2;
  font-size: 16px;
  font-weight: 400;
}
.login-wrapper .login-form .input-id {
  margin-top: 68px;
}
.login-wrapper .login-form .input {
  outline: none;
}
.login-wrapper .login-form .input:focus {
  border: 1px solid #2866ec;
}
.login-wrapper .login-form .input.error {
  border-color: #e52f28;
}
.password-wrapper {
  position: relative;
}
.eye-icon {
  width: 24px;
  height: 24px;
  position: absolute;
  right: 16px;
  top: 50%;
  transform: translateY(-65%);
  cursor: pointer;
}
.eye-icon img {
  width: 24px;
  height: 24px;
}
.auto-login {
  display: flex;
  align-items: center;
  margin-bottom: 12px;
  font-size: 14px;
}
.auto-message {
  color: #aaa;
  margin-left: 4px;
}
.error-msg2 {
  color: #e52f28;
  text-align: center;
  font-feature-settings: 'liga' off, 'clig' off;
  font-family: Pretendard;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 140%; /* 22.4px */
  margin: 24px 0px;
}

.login-btn {
  width: 100%;
  padding: 17px;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  margin-bottom: 16px;
  color: #ffffff;
  text-align: center;
  font-size: 16px;
  font-weight: 600;
  background: #c2c2c2; /* 기본 회색 */
}
.login-btn.active {
  background: #2866ec; /* 입력 완료 시 파란색 */
}
.pw-search {
  color: #888;
  margin-bottom: 78px;
  display: block;
  cursor: pointer;
}
.find-password {
  color: #555;
  font-size: 14px;
  font-weight: 600;
  text-decoration: none;
}
.bottom {
  width: 100%;
  position: fixed;
  bottom: 24px;
  padding: 0px 24px;
}
.sign-up {
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 4px;
  background: #f5f5f5;
  color: #888;
  border-radius: 100px;
  padding: 10px 0px;
}
.sign-up span {
  color: #666;
  font-family: Pretendard;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: 20px; /* 142.857% */
}
.signup-link {
  color: #2866ec;
  text-align: right;
  font-feature-settings: 'liga' off, 'clig' off;
  font-family: Pretendard;
  font-size: 14px;
  font-style: normal;
  font-weight: 600;
  line-height: 20px; /* 142.857% */
}

/* 체크옵션 2 스타일 */
.login-check {
  display: flex;
  gap: 4px;
  align-items: center;
  margin-bottom: 24px;
}
.login-check p {
  color: #aaa;
  font-family: Pretendard;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: 20px; /* 142.857% */
}
.style_checkbox {
  display: inline-block;
  width: 24px;
  height: 24px;
  position: relative;
  vertical-align: middle;
}
.style_checkbox input[type='checkbox'] {
  opacity: 0;
  width: 24px;
  height: 24px;
  margin: 0;
  position: absolute;
  left: 0;
  top: 0;
  cursor: pointer;
  z-index: 2;
}
.style_checkbox img {
  width: 24px;
  height: 24px;
  display: block;
  position: absolute;
  left: 0;
  top: 0;
  z-index: 1;
}
.style_checkbox input[type='checkbox']:checked + img {
  content: url('/src/assets/img/cart/checkbox_active.png');
}
.style_checkbox input[type='checkbox']:not(:checked) + img {
  content: url('/src/assets/img/cart/checkbox.png');
}
</style>
