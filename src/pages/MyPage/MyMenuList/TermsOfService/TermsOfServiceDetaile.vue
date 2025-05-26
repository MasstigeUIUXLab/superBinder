<template>
  <div class="header">
    <img src="/src/assets/img/Authentication/leftAllow.png" alt="뒤로가기" />
    <span>약관정보</span>
  </div>
  <section class="version-selector">
    <span>[현행] 2025년 02월 24일 시행안</span>
    <img src="@/assets/img/icon/arrowDown.svg" alt="버전 선택" />
  </section>
  <div class="terms">
    <main class="terms-body">
      <p class="intro">
        [회사명] “회사” 또는 “우리는”은(는) 이용자의 개인정보 보호를 매우
        중요하게 생각합니다. 본 개인정보처리방침은 회사가 이용자의 개인정보를
        수집, 이용, 보호하는 방법을 설명합니다. 본 방침은 [날짜]부터 시행됩니다.
      </p>

      <h2>1. 개인정보의 수집 항목 및 방법</h2>
      <span>회사는 다음과 같은 개인정보를 수집합니다:</span>
      <ul class="terms-list">
        <li>
          <p>수집 항목:</p>
          <ul>
            <li>필수: 이름, 이메일 주소, 전화번호, 주소</li>
            <li>선택: 생년월일, 성별, 직업 등</li>
          </ul>
        </li>
        <li>
          <p>수집 방법:</p>
          <ul>
            <li>회원가입, 서비스 이용 시</li>
            <li>고객센터 문의 시</li>
            <li>이벤트 참여 시</li>
            <li>자동으로 수집되는 정보 (IP 주소, 쿠키 등)</li>
          </ul>
        </li>
      </ul>

      <h2>2. 개인정보의 이용 목적</h2>
      <span>회사는 수집한 개인정보를 다음과 같은 목적으로 이용합니다:</span>
      <ul class="terms-list">
        <li>서비스 제공 및 관리</li>
        <li>회원 가입 및 관리</li>
        <li>고객 문의 응대 및 서비스 개선</li>
        <li>맞춤형 서비스 제공</li>
        <li>이벤트 및 프로모션 안내</li>
        <li>법적 의무 이행</li>
      </ul>
    </main>
  </div>
  <div class="bottom">
    <button class="btn-confirm">확인</button>
  </div>
</template>

<style scoped>
.terms {
  display: flex;
  flex-direction: column;

  background-color: #fafafa;
  padding: 0 16px;
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
.version-selector {
  padding: 16px 24px;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.version-selector span {
  color: #222;
  font-feature-settings: 'liga' off, 'clig' off;
  font-family: Pretendard;
  font-size: 18px;
  font-style: normal;
  font-weight: 600;
  line-height: 140%; /* 25.2px */
}

.version-selector img {
  width: 24px;
  height: 24px;
  transform: rotate(-90deg);
}

.terms-body {
  flex: 1;
  overflow-y: auto;
  padding: 16px 0;
  margin-bottom: 104px;
}

.intro {
  color: #666;
  font-feature-settings: 'liga' off, 'clig' off;
  font-family: Pretendard;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: 20px; /* 142.857% */
  margin-bottom: 8px;
}
.terms-body span {
  color: #666;
  font-feature-settings: 'liga' off, 'clig' off;
  font-family: Pretendard;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: 20px; /* 142.857% */
}
h2 {
}
.terms-body h2 {
  color: #222;
  font-feature-settings: 'liga' off, 'clig' off;
  font-family: Pretendard;
  font-size: 14px;
  font-style: normal;
  font-weight: 700;
  line-height: 20px; /* 142.857% */
  margin-bottom: 8px;
  color: #212121;
}

.terms-list {
  padding-left: 20px;
  color: #666;
  font-feature-settings: 'liga' off, 'clig' off;
  font-family: Pretendard;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: 20px; /* 142.857% */
}

.terms-list li ul {
  list-style-type: disc;
  padding-left: 20px;
  margin-top: 4px;
}
.bottom {
  position: fixed;
  bottom: 0px;
  width: 100%;
  padding: 24px;
}
.btn-confirm {
  width: 100%;
  padding: 12px 0;
  border-radius: 8px;
  background: #2866ec;
  color: #fff;
  font-size: 16px;
  font-weight: 500;
  border: none;
}
.terms-list li::marker,
.terms-list li ul li::marker {
  font-size: 10px; /* 원 크기 조정 */
}

ul,
ol,
li {
  list-style: disc;
}
</style>
