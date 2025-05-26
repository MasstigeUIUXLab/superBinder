<template>
  <div class="bottom">
    <div class="top-btn">
      <img src="/src/assets/img/productList/ProductListBottomDown.svg" alt="" />
    </div>
    <div class="bottom-main">
      <div class="container">
        <div class="select-group">
          <ul>
            <li>
              <div class="card">
                <div class="title">
                  <p>낱개</p>
                </div>
                <div class="detaile">
                  <div class="quantity">
                    <button>
                      <img
                        src="/src/assets/img/productList/blueMinus.svg"
                        alt="감소"
                      />
                    </button>
                    <div class="count">8</div>
                    <button>
                      <img
                        src="/src/assets/img/productList/bluePlus.svg"
                        alt="증가"
                      />
                    </button>
                  </div>
                  <div class="price">800,000원</div>
                </div>
              </div>
            </li>
            <li>
              <div class="card">
                <div class="title">
                  <p>박스</p>
                </div>
                <div class="detaile">
                  <div class="quantity">
                    <button>
                      <img
                        src="/src/assets/img/productList/blueMinus.svg"
                        alt="감소"
                      />
                    </button>
                    <div class="count">8</div>
                    <button>
                      <img
                        src="/src/assets/img/productList/bluePlus.svg"
                        alt="증가"
                      />
                    </button>
                  </div>
                  <div class="price">800,000원</div>
                </div>
              </div>
            </li>
            <li>
              <div class="card">
                <div class="title">
                  <p>카톤</p>
                </div>
                <div class="detaile">
                  <div class="quantity">
                    <button>
                      <img
                        src="/src/assets/img/productList/blueMinus.svg"
                        alt="감소"
                      />
                    </button>
                    <div class="count">8</div>
                    <button>
                      <img
                        src="/src/assets/img/productList/bluePlus.svg"
                        alt="증가"
                      />
                    </button>
                  </div>
                  <div class="price">800,000원</div>
                </div>
              </div>
            </li>
            <li>
              <div class="card-pop">
                <p>pop 주문</p>
                <input type="checkbox" />
              </div>
            </li>
          </ul>

          <div class="summary">
            <div class="label">총 금액</div>
            <div class="total">1,100,000<span>원</span></div>
          </div>

          <div class="actions">
            <button class="buy-now">바로구매</button>
            <button class="add-cart">장바구니</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.bottom {
  position: fixed;
  bottom: 0;
  width: 100%;
  z-index: 1000;
  display: flex;
  flex-direction: column;
  align-items: center;
}
.bottom .top-btn {
  position: relative;
}
.bottom .top-btn img {
  position: absolute;
  bottom: -1px;
  left: 50%;
  transform: translateX(-50%);
}
.bottom-main {
  width: 100%;
  background: #fff;
  padding: 16px 24px;
  box-shadow: 0 -2px 8px rgba(0, 0, 0, 0.1);
  border-top-left-radius: 12px;
  border-top-right-radius: 12px;
}

.container {
  font-family: Pretendard, sans-serif;
}

.select-group {
  display: flex;
  flex-direction: column;
  gap: 12px;
  margin-bottom: 16px;
}
.custom-select {
  border: 1px solid #ddd;
  border-radius: 8px;
  overflow: hidden;
  background: #fff url('/src/assets/img/icon/arrowDown.svg') no-repeat right
    12px center;
}
.custom-select:focus-within {
  border-color: #2866ec;
  background: #fff url('/src/assets/img/icon/arrowDown-active.svg') no-repeat
    right 12px center;
  outline: none;
}
.custom-select select {
  width: 100%;
  height: 40px;
  padding: 0 12px;
  border: none;
  background: transparent;
  font-size: 16px;
  color: #333;
  appearance: none;
}
.custom-select select:focus {
  outline: none;
}
.container ul {
  display: flex;
  flex-direction: column;
  gap: 16px;
}
.card {
  width: 100%;
  display: flex;
  align-items: center;
  flex-direction: column;
  gap: 16px;
  padding: 10px;
  border-radius: 8px;
  background: #f5f5f5;
}
.card .title {
  width: 100%;
  display: flex;
  justify-content: space-between;
  color: #222;
  font-feature-settings: 'liga' off, 'clig' off;
  font-family: Pretendard;
  font-size: 14px;
  font-style: normal;
  font-weight: 600;
  line-height: 140%; /* 19.6px */
}
.detaile {
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.quantity {
  width: 120px;
  height: 40px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 4px 8px;
  border-radius: 100px;
  border: 1px solid #c2c2c2;
  background: #fff;
}
.quantity button {
  width: 32px;
  height: 32px;
  border: none;
  background: none;
  cursor: pointer;
}
.quantity button img {
  width: 24px;
  height: 24px;
}
.quantity .count {
  color: #2866ec;
  text-align: center;
  font-feature-settings: 'liga' off, 'clig' off;
  font-family: Pretendard;
  font-size: 14px;
  font-style: normal;
  font-weight: 600;
  line-height: 20px; /* 142.857% */
}
.card .price {
  font-size: 16px;
  font-weight: 600;
  color: #333;
  margin-left: auto;
}
.card .remove {
  width: 16px;
  height: 16px;
  background: url('/src/assets/img/icon/close.svg') no-repeat center center;
  cursor: pointer;
}
.card-pop {
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 16px;
  padding: 10px;
  border-radius: 8px;
  background: #f5f5f5;
  color: #222;
  font-feature-settings: 'liga' off, 'clig' off;
  font-family: Pretendard;
  font-size: 14px;
  font-style: normal;
  font-weight: 600;
  line-height: 140%; /* 19.6px */
}
.card-pop input {
  width: 24px;
  height: 24px;
}

.summary {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-top: 24px;
}
.summary .label {
  color: #121212;
  font-feature-settings: 'liga' off, 'clig' off;
  font-family: Pretendard;
  font-size: 16px;
  font-style: normal;
  font-weight: 600;
  line-height: 20px; /* 125% */
}
.summary .total {
  color: #121212;
  font-feature-settings: 'liga' off, 'clig' off;
  font-family: Pretendard;
  font-size: 18px;
  font-style: normal;
  font-weight: 700;
  line-height: 20px; /* 111.111% */
}

.summary .total span {
  color: #121212;
  font-feature-settings: 'liga' off, 'clig' off;
  font-family: Pretendard;
  font-size: 18px;
  font-style: normal;
  font-weight: 400;
  line-height: 20px;
}
.actions {
  display: flex;
  gap: 8px;
  margin-top: 24px;
}
.actions button {
  width: 100%;
  height: 56px;
  border-radius: 8px;
  border: 1px solid #c2c2c2;
  background: #fff;
}
.actions .buy-now {
  background: #fff;

  color: #222;
  text-align: center;
  font-feature-settings: 'liga' off, 'clig' off;
  font-family: Pretendard;
  font-size: 16px;
  font-style: normal;
  font-weight: 600;
  line-height: 22px; /* 137.5% */
}
.actions .add-cart {
  background: #3366ff;
  color: #fff;
  text-align: center;
  font-feature-settings: 'liga' off, 'clig' off;
  font-family: Pretendard;
  font-size: 16px;
  font-style: normal;
  font-weight: 600;
  line-height: 22px; /* 137.5% */
}
</style>
