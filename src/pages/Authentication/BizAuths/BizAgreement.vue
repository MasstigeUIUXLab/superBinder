<template>
  <div class="biz-title">
    <div class="header">
      <img
        src="/src/assets/img/Authentication/leftAllow.png"
        alt="뒤로가기"
        @click="goBack"
      />
      <span>계정관리</span>
    </div>
    <div class="check-list">
      <p class="check-title">약관동의</p>
      <ul>
        <li class="check-all">
          <label class="style_checkbox">
            <input type="checkbox" v-model="allChecked" />
            <img
              :src="
                allChecked
                  ? '/src/assets/img/cart/checkbox_active.png'
                  : '/src/assets/img/cart/checkbox.png'
              "
              alt="전체 동의"
            />
          </label>
          <p>약관 전체 동의</p>
        </li>
        <li class="check-item">
          <label class="style_checkbox">
            <input type="checkbox" v-model="terms1rd" />
            <img
              :src="
                terms1rd
                  ? '/src/assets/img/cart/checkbox_active.png'
                  : '/src/assets/img/cart/checkbox.png'
              "
              alt="서비스 이용약관"
            />
          </label>
          <p>서비스 이용약관 필수동의</p>
        </li>
        <li class="check-item">
          <label class="style_checkbox">
            <input type="checkbox" v-model="terms2rd" />
            <img
              :src="
                terms2rd
                  ? '/src/assets/img/cart/checkbox_active.png'
                  : '/src/assets/img/cart/checkbox.png'
              "
              alt="개인정보 수집·이용"
            />
          </label>
          <p>개인정보 수집, 이용 필수동의</p>
        </li>
        <li class="check-item">
          <label class="style_checkbox">
            <input type="checkbox" v-model="terms3rd" />
            <img
              :src="
                terms3rd
                  ? '/src/assets/img/cart/checkbox_active.png'
                  : '/src/assets/img/cart/checkbox.png'
              "
              alt="개인정보 제3자 제공"
            />
          </label>
          <p>개인정보 제3자 제공 선택동의</p>
        </li>
      </ul>
    </div>

    <div class="btn-group">
      <button type="button" class="btn-cancel" @click="isModalOpen = true">
        취소
      </button>
      <button
        type="button"
        class="btn-submit"
        :class="{ active: canAgree }"
        :disabled="!canAgree"
        @click="canAgree && goNextPage()"
      >
        인증
      </button>
    </div>

    <BizCancelAlert v-if="isModalOpen" @close="isModalOpen = false" />
  </div>
</template>

<script setup>
import { ref, computed } from 'vue';
import { useRouter } from 'vue-router';
import BizCancelAlert from './BizAlert/BizCancelAlert.vue';

const router = useRouter();
const terms1rd = ref(false);
const terms2rd = ref(false);
const terms3rd = ref(false);

function goNextPage() {
  router.push('/bizauth');
}
function goBack() {
  router.push('/login');
}
const isModalOpen = ref(false);

const allChecked = computed({
  get() {
    return terms1rd.value && terms2rd.value && terms3rd.value;
  },
  set(v) {
    terms1rd.value = v;
    terms2rd.value = v;
    terms3rd.value = v;
  },
});

const canAgree = computed(() => terms1rd.value && terms2rd.value);
</script>
<style scoped>
.biz-title {
  width: 100%;
  height: 100vh;
}
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
/* check list */
.check-list {
  padding: 0px 24px;
}
.check-list .check-title {
  color: #222;
  font-feature-settings: 'liga' off, 'clig' off;
  font-family: Pretendard;
  font-size: 18px;
  font-style: normal;
  font-weight: 600;
  line-height: 25px; /* 138.889% */
}
.check-list ul {
  display: flex;
  flex-direction: column;
  gap: 8px;
  margin-top: 16px;
}
.check-list ul li {
  display: flex;
  gap: 8px;
  padding: 18px 16px;
}
.check-list ul .check-all {
  border-radius: 20px;
  background: #f5f5f5;
}
.biz-title .btn-group .btn-submit.active {
  background: #2866ec;
  cursor: pointer;
}
/* 체크옵션 2 스타일 */
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
/* btn group */
.biz-title .btn-group {
  width: 100%;
  display: flex;
  gap: 8px;
  padding: 24px;
  bottom: 0;
  position: fixed;
}
.biz-title .btn-group button {
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
.biz-title .btn-group .btn-submit {
  background: #c2c2c2;
  color: #ffffff;
  transition: background 0.3s;
}
</style>
