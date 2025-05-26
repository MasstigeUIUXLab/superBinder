<template>
  <teleport to="body">
    <div v-show="modelValue" class="auth-modal__overlay" @click.self="close">
      <div class="auth-modal">
        <div class="auth-modal__header">
          <span class="auth-modal__title">인증 방법 선택</span>
          <button class="auth-modal__close" @click="close">
            <img src="./assets/img/icon/cross.svg" alt="" />
          </button>
        </div>
        <ul class="auth-modal__list">
          <li class="auth-modal__item">
            <a href="" @click="select('toss')">
              <img
                src="/src/assets/img/selectAuthenticationMethod/selectAuthenticationMethod01.svg"
                alt=""
              />
              <span>토스 인증</span>
            </a>
          </li>
          <li class="auth-modal__item">
            <a href="" @click="select('toss')">
              <img
                src="/src/assets/img/selectAuthenticationMethod/selectAuthenticationMethod02.svg"
                alt=""
              />
              <span>네이버 인증</span>
            </a>
          </li>
          <li class="auth-modal__item">
            <a href="" @click="select('toss')">
              <img
                src="/src/assets/img/selectAuthenticationMethod/selectAuthenticationMethod03.svg"
                alt=""
              />
              <span>카카오 인증</span>
            </a>
          </li>
          <li class="auth-modal__item">
            <a href="" @click="select('toss')">
              <img
                src="/src/assets/img/selectAuthenticationMethod/selectAuthenticationMethod04.svg"
                alt=""
              />
              <span>ARS 전화 인증</span>
            </a>
          </li>
        </ul>
      </div>
    </div>
  </teleport>
</template>

<script setup>
import { defineProps, defineEmits } from 'vue';

const props = defineProps({
  modelValue: {
    type: Boolean,
    default: true,
  },
});
const emit = defineEmits(['update:modelValue', 'select']);

function close() {
  emit('update:modelValue', false);
}

function select(method) {
  emit('select', method);
  close();
}
</script>

<style scoped>
.auth-modal__overlay {
  position: fixed;
  width: 100%;
  inset: 0;
  background: rgba(0, 0, 0, 0.4);
  display: flex;
  align-items: end;
  z-index: 1000;
}
.auth-modal {
  width: 100%;
  background: #fff;
  border-radius: 16px 16px 0px 0px;
  background: #fff;
  box-shadow: 0px -4px 10px 0px rgba(0, 0, 0, 0.1);
  overflow: hidden;
  padding: 24px;
  display: flex;
  flex-direction: column;
  gap: 8px;
}
.auth-modal__header {
  display: flex;
  justify-content: space-between;
  align-items: center;

  /* border-bottom: 1px solid #eee; */
}
.auth-modal__title {
  color: #222;
  font-feature-settings: 'liga' off, 'clig' off;
  font-family: Pretendard;
  font-size: 20px;
  font-style: normal;
  font-weight: 700;
  line-height: 140%; /* 28px */
}
.auth-modal__close {
  background: none;
  border: none;
  font-size: 20px;
  line-height: 1;
  cursor: pointer;
}
.auth-modal__list {
  list-style: none;
  margin: 0;
  padding: 0;
}
.auth-modal__item {
  display: flex;
  align-items: center;
  padding: 12px 8px;
  cursor: pointer;
  border-bottom: 1px solid #eee;
}
.auth-modal__item img {
  width: 32px;
  height: 32px;
}
.auth-modal__item a {
  display: flex;
  gap: 8px;
  align-items: center;
  color: #222;
  font-feature-settings: 'liga' off, 'clig' off;
  font-family: Pretendard;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 22px; /* 137.5% */
}
.auth-modal__item:last-child {
  border-bottom: none;
}
.auth-modal__item span {
  font-size: 14px;
  color: #222;
}
</style>
