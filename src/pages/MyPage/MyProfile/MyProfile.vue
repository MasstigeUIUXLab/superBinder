<template>
  <div class="my-profile">
    <img
      class="profile"
      src="/src/assets/img/myPage/myProfile.png"
      alt="프로필"
    />
    <!-- 클릭 시 모달 열기 -->
    <div class="compont" @click="isAlertOpen = true">
      <h1>{{ name }}</h1>
      <img
        class="bottom-btn btn"
        src="/src/assets/img/icon/bottomarrow.png"
        alt="접기/펼치기"
      />
    </div>
  </div>
  <MyProfileModel v-if="isAlertOpen" @close="isAlertOpen = false" />
</template>

<script setup>
import { defineProps, ref } from 'vue';
import MyProfileModel from '@/pages/MyPage/MyProfile/MyProfileModel/MyProfileModel.vue';

const isAlertOpen = ref(false);

const props = defineProps({
  name: {
    type: String,
    required: true,
  },
});
</script>

<style scoped>
.my-profile {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}
.my-profile .profile {
  margin-top: 20px;
  width: 100px;
  height: 100px;
}
.my-profile .compont {
  display: flex;
  align-items: center;
  margin-top: 20px;
  cursor: pointer;
}
.my-profile .compont h1 {
  color: #222;
  font-feature-settings: 'liga' off, 'clig' off;
  font-family: Pretendard;
  font-size: 18px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
}
.my-profile .compont img {
  width: 24px;
  height: 24px;
}
</style>
