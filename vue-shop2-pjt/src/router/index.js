import { createRouter, createWebHistory } from 'vue-router'
import KakaoLogin from '../views/KakaoLogin'
import ProductList from '../views/ProductList'
import ProductDetail from '../views/ProductDetail'
import ProductCreate from '../views/ProductCreate'
import ProductUpdate from '../views/ProductUpdate'
import SalesList from '../views/SalesList'
import ImageInsert from '../views/ImageInsert'
import swal from 'sweetalert2'  //기본 스윗트알럿2
import store from '@/store'

//네비게이션 가드
const requireAuth = () => (to, from, next) => {   //to: 가고자하는 페이지 정보, from : 현재 페이지 정보
  if(store.state.user.iuser === undefined) {
    swal.fire('로그인을 하세요.', '', 'warning');
    return;
  }
  next();  //주소 이동 하고 싶으면 next 함수 안에 주소값 적으면 됨
}
//미들웨어 : 서로 다른 애플리케이션이 서로 통신하는 데 사용되는 소프트웨어
//네비게이션 가드, 라우터가 위에 포함 됨

const routes = [
  {
    path: '/',
    name: 'Home',
    component: ProductList
  },
  {
    path: '/kakaologin',
    name: 'kakaologin',
    component: KakaoLogin
  },
  {
    path: '/detail',
    name: 'ProductDetail',
    component: ProductDetail
  },
  {
    path: '/create',
    name: 'ProductCreate',
    component: ProductCreate,
    beforeEnter: requireAuth()  //로그인이 필요한 곳에 작성해서 사용 (to, from 안써도 됨)
  },
  {
    path: '/update',
    name: 'ProductUpdate',
    component: ProductUpdate
  },
  {
    path: '/sales',
    name: 'SalesList',
    component: SalesList
  },
  {
    path: '/image_insert',
    name: 'ImageInsert',
    component: ImageInsert
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
