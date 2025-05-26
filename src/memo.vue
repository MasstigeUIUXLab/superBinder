<template>
  <label class="style_checkbox">
    <input type="checkbox" />
    <img src="/src/assets/img/cart/checkbox_active.png" alt="체크옵션 2" />
  </label>
</template>

<script setup></script>

<style scoped>
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
</style>
