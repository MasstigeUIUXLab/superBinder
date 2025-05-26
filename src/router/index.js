import { createRouter, createWebHistory } from "vue-router";

// 공통 레이아웃
import AppLayout from "@/layout/AppLayout.vue";

// AppLayout을 사용하는 페이지들
import DashBoard from "@/pages/DashBoard/DashBoard.vue";

// MyPage
import MyPage from "@/pages/MyPage/MyPage.vue";
// import MyServePage from "@/pages/MyPage/MyServePage.vue";
// HomePage
import HomePage from "@/pages/HomePage/HomePage.vue";



// AppLayout 없이 사용하는 단독 페이지들
// SplashScreenPage
import splashScreen00 from "@/pages/OnBoarding/SplashScreens/splashScreen00.vue";
import splashScreen01 from "@/pages/OnBoarding/SplashScreens/splashScreen01.vue";
import splashScreen02 from "@/pages/OnBoarding/SplashScreens/splashScreen02.vue";
import splashScreen03 from "@/pages/OnBoarding/SplashScreens/splashScreen03.vue";
import splashScreen04 from "@/pages/OnBoarding/SplashScreens/splashScreen04.vue";
// Permissions
import permissions01 from "@/pages/OnBoarding/Permissions/permissions01.vue";
import permissions02 from "@/pages/OnBoarding/Permissions/permissions02.vue";
import permissions03 from "@/pages/OnBoarding/Permissions/permissions03.vue";
import permissions04 from "@/pages/OnBoarding/Permissions/permissions04.vue";
import permissions05 from "@/pages/OnBoarding/Permissions/permissions05.vue";
import permissions06 from "@/pages/OnBoarding/Permissions/permissions06.vue";
import permissions07 from "@/pages/OnBoarding/Permissions/permissions07.vue";
// Authentication
import Login from "@/pages/Authentication/Login.vue";
// Biz
import BizAuth from "@/pages/Authentication/BizAuths/BizAuth.vue"
// BizCancelAlert
import BizCompleteAlert from "@/pages/Authentication/BizAuths/BizAlert/BizCompleteAlert.vue"
import BizQuestion from "@/pages/Authentication/BizAuths/BizAlert/BizQuestion.vue"
import BizAuthAttach from "@/pages/Authentication/BizAuths/BizAuthAttach.vue"
import BizAuthCode from "@/pages/Authentication/BizAuths/BizAuthCode.vue"
import BizAuthPw from "@/pages/Authentication/BizAuths/BizAuthPw.vue"
import BizComplete from "@/pages/Authentication/BizAuths/BizComplete.vue"
import BizAgreement from "@/pages/Authentication/BizAuths/BizAgreement.vue"
// Search
import SearchPw01 from "@/pages/Authentication/SearchPw/SearchPw01.vue"
import SearchPw02 from "@/pages/Authentication/SearchPw/SearchPw02.vue"
import SearchPw03 from "@/pages/Authentication/SearchPw/SearchPw03.vue"
import SearchAlert from "@/pages/Authentication/SearchPw/SearchAlert/SearchAlert.vue"
// Alarm
import Alarm from "@/pages/Alarm/Alarm.vue";
import Announcement from "@/pages/Alarm/Announcement.vue";
// Setting
import Setting from "@/pages/Setting/Setting.vue";
import AccountManagement from "@/pages/Setting/AccountManagement/AccountManagement.vue";
import AccountAddition from "@/pages/Setting/AccountManagement/AccountDetaile/AccountAddition.vue";
import MainAccountDetaile from "@/pages/Setting/AccountManagement/AccountDetaile/MainAccountDetaile.vue";
import SubAccountDetaile from "@/pages/Setting/AccountManagement/AccountDetaile/SubAccountDetaile.vue";
import AccountChangMainPw from "@/pages/Setting/AccountManagement/AccountDetaile/AccountChangMainPw.vue";
import AccountChangSubPw from "@/pages/Setting/AccountManagement/AccountDetaile/AccountChangSubPw.vue";
import DeliveryAddress from "@/pages/Setting/DeliveryAddress/DeliveryAddress.vue";
import DeliveryChange from "@/pages/Setting/DeliveryAddress/DeliverySetting/DeliveryChange.vue";
import DeliveryAdd from "@/pages/Setting/DeliveryAddress/DeliverySetting/DeliveryAdd.vue";
// MyPage/PaymentManagement
import PaymentManagement01 from "@/pages/MyPage/MyMenuList/PaymentManagement/PaymentManagement01.vue"
import PaymentManagement02 from "@/pages/MyPage/MyMenuList/PaymentManagement/PaymentManagement02.vue"
import PaymentManagement03 from "@/pages/MyPage/MyMenuList/PaymentManagement/PaymentManagement03.vue"
import PaymentManagement04 from "@/pages/MyPage/MyMenuList/PaymentManagement/PaymentManagement04.vue"
import PaymentManagement05 from "@/pages/MyPage/MyMenuList/PaymentManagement/PaymentManagement05.vue"
import PaymentManagement06 from "@/pages/MyPage/MyMenuList/PaymentManagement/PaymentManagement06.vue"

import memo from "@/memo.vue"
import Category01 from "@/pages/Category/Category01.vue"

// ShoppingCart
import ShoppingCart01 from "@/pages/ShoppingCart/ShoppingCart01.vue"
import ShoppingCart02 from "@/pages/ShoppingCart/ShoppingCart02.vue"
import ShoppingCart03 from "@/pages/ShoppingCart/ShoppingCart03.vue"
import ShoppingCart04 from "@/pages/ShoppingCart/ShoppingCart04.vue"
import ShoppingCart05 from "@/pages/ShoppingCart/ShoppingCart05.vue"
import ShoppingCart06 from "@/pages/ShoppingCart/ShoppingCart06.vue"
import ShoppingCart07 from "@/pages/ShoppingCart/ShoppingCart07.vue"
import ShoppingCart08 from "@/pages/ShoppingCart/ShoppingCart08.vue"
import ShoppingCart09 from "@/pages/ShoppingCart/ShoppingCart09.vue"
import ShoppingCart10 from "@/pages/ShoppingCart/ShoppingCart10.vue"
import ShoppingCart11 from "@/pages/ShoppingCart/ShoppingCart11.vue"
// Sarch
import Search01 from "@/pages/Search/Search01.vue"
import Search02 from "@/pages/Search/Search02.vue"
import Search03 from "@/pages/Search/Search03.vue"
import Search04 from "@/pages/Search/Search04.vue"


// Footer
import ServiceIntroduction from "@/pages/Footer/ServiceIntroduction/ServiceIntroduction.vue"


const routes = [
  {
    path: '/', component: AppLayout, children: [
      { path: '/', name: 'DashBoard', component: DashBoard },

      // MyPage
      { path: 'my', name: 'MyPage', component: MyPage },
      // { path: 'my/serve', name: 'MyServePage', component: MyServePage },
      // HomePage
      { path: 'homepage', name: 'HomePage', component: HomePage },
      {
        path: '/setting', name: 'Setting', component: Setting, meta: { hideHeader: true }
      }
    ]
  },

  // Authentication
  { path: '/login', name: 'Login', component: Login },
  { path: '/bizauth/agreement', name: 'BizAgreement', component: BizAgreement },
  { path: '/bizauth', name: 'BizAuth', component: BizAuth },
  {
    path: '/bizauth/alert-complete',
    name: '/BizCompleteAlert', component: BizCompleteAlert
  },
  { path: '/bizauth/question', name: 'BizQuestion', component: BizQuestion },
  { path: '/bizauth/attach', name: 'BizAuthAttach', component: BizAuthAttach },
  { path: '/bizauth/code', name: 'BizAuthCode', component: BizAuthCode },
  { path: '/bizauth/bizpw', name: 'BizAuthPw', component: BizAuthPw },
  { path: '/bizauth/complete', name: 'BizComplete', component: BizComplete },
  // SearchPw
  { path: '/search/pw01', name: 'SearchPw01', component: SearchPw01 },
  { path: '/search/pw02', name: 'SearchPw02', component: SearchPw02 },
  { path: '/search/pw03', name: 'SearchPw03', component: SearchPw03 },
  { path: '/search/alert', name: 'SearchAlert', component: SearchAlert },
  // SplashScreenPage(completedadada)
  { path: '/splash/screen00', name: 'splashScreen00', component: splashScreen00 },
  { path: '/splash/screen01', name: 'splashScreen01', component: splashScreen01 },
  { path: '/splash/screen02', name: 'splashScreen02', component: splashScreen02 },
  { path: '/splash/screen03', name: 'splashScreen03', component: splashScreen03 },
  { path: '/splash/screen04', name: 'splashScreen04', component: splashScreen04 },
  // Permissions
  { path: '/permissions01', name: 'permissions01', component: permissions01 },
  { path: '/permissions02', name: 'permissions02', component: permissions02 },
  { path: '/permissions03', name: 'permissions03', component: permissions03 },
  { path: '/permissions04', name: 'permissions04', component: permissions04 },
  { path: '/permissions05', name: 'permissions05', component: permissions05 },
  { path: '/permissions06', name: 'permissions06', component: permissions06 },
  { path: '/permissions07', name: 'permissions07', component: permissions07 },
  // Alarm
  { path: '/alarm', name: 'Alarm', component: Alarm },
  { path: '/alarm/announcement', name: 'Announcement', component: Announcement },
  // Setting-2
  { path: '/setting/account/management', name: 'AccountManagement', component: AccountManagement },
  { path: '/setting/account/addition', name: 'AccountAddition', component: AccountAddition },
  { path: '/setting/account/maindetaile', name: 'MainAccountDetaile', component: MainAccountDetaile },
  { path: '/setting/account/subdetaile', name: 'SubAccountDetaile', component: SubAccountDetaile },
  { path: '/setting/account/changpw/main', name: 'AccountChangMainPw', component: AccountChangMainPw },
  { path: '/setting/account/changpw/sub', name: 'AccountChangSubPw', component: AccountChangSubPw },
  { path: '/setting/delivery/address', name: 'DeliveryAddress', component: DeliveryAddress },
  { path: '/setting/delivery/change', name: 'DeliveryChange', component: DeliveryChange },
  { path: '/setting/delivery/add', name: 'DeliveryAdd', component: DeliveryAdd },
  // MyPage/PaymentManagement
  { path: '/my/paymentmanagement01', name: 'PaymentManagement01', component: PaymentManagement01 },
  { path: '/my/paymentmanagement02', name: 'PaymentManagement02', component: PaymentManagement02 },
  { path: '/my/paymentmanagement03', name: 'PaymentManagement03', component: PaymentManagement03 },
  { path: '/my/paymentmanagement04', name: 'PaymentManagement04', component: PaymentManagement04 },
  { path: '/my/paymentmanagement05', name: 'PaymentManagement05', component: PaymentManagement05 },
  { path: '/my/paymentmanagement06', name: 'PaymentManagement06', component: PaymentManagement06 },





  { path: '/memo', name: 'memo', component: memo },
  { path: '/category01', name: 'Category01', component: Category01 },
  // ShoppingCart
  { path: '/shoppingcart01', name: 'ShoppingCart01', component: ShoppingCart01 },
  { path: '/shoppingcart02', name: 'ShoppingCart02', component: ShoppingCart02 },
  { path: '/shoppingcart03', name: 'ShoppingCart03', component: ShoppingCart03 },
  { path: '/shoppingcart04', name: 'ShoppingCart04', component: ShoppingCart04 },
  { path: '/shoppingcart05', name: 'ShoppingCart05', component: ShoppingCart05 },
  { path: '/shoppingcart06', name: 'ShoppingCart06', component: ShoppingCart06 },
  { path: '/shoppingcart07', name: 'ShoppingCart07', component: ShoppingCart07 },
  { path: '/shoppingcart08', name: 'ShoppingCart08', component: ShoppingCart08 },
  { path: '/shoppingcart09', name: 'ShoppingCart09', component: ShoppingCart09 },
  { path: '/shoppingcart10', name: 'ShoppingCart10', component: ShoppingCart10 },
  { path: '/shoppingcart11', name: 'ShoppingCart11', component: ShoppingCart11 },

  // Search
  { path: '/search01', name: 'Search01', component: Search01 },
  { path: '/search02', name: 'Search02', component: Search02 },
  { path: '/search03', name: 'Search03', component: Search03 },
  { path: '/search04', name: 'Search04', component: Search04 },



  // footer
  { path: '/serviceintroduction', name: 'ServiceIntroduction', component: ServiceIntroduction },




];

const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;
