import Vue from 'vue'
import VueRouter from 'vue-router'

// 메인 페이지(movies)
import HomeView from '@/views/Movies/HomeView'

// 프로필, 로그인(account)
import LoginFormView from '@/views/Accounts/LoginFormView'
import SignupView from '@/views/Accounts/SignupView'
import ProfilePage from '@/views/Profile/ProfilePage'
import PersonalProfileEdit from '@/views/Profile/PersonalProfileEdit'
import PasswordChange from '@/views/Profile/PasswordChange'
import PersonalProfile from '@/views/Profile/PersonalProfile'

// 리뷰, 댓글(community)
import CommunityView from '@/views/Community/CommunityView'
import ReviewNewView from '@/views/Community/ReviewNewView'
import ReviewDetailView from '@/views/Community/ReviewDetailView.vue'
import ReviewEditView from '@/views/Community/ReviewEditView'

// 에러 페이지
import NotFound404 from '@/components/Accounts/NotFound404.vue'

// 테스트용(나중에 삭제)
import MovieTest from '@/components/Movies/MovieTest.vue'
import AdminPage from '@/views/Admin/AdminPage.vue'

Vue.use(VueRouter)

const routes = [
  // 메인 홈
  {
    path: '/',
    name: 'HomeView',
    component: HomeView
  },
  // 영화 테스트 페이지(테스트 중)
  {
    path: '/movietest',
    name: 'MovieTest',
    component: MovieTest
  },
  // 어드민 페이지(테스트 중)
  {
    path: '/adminpage',
    name: 'AdminPage',
    component: AdminPage
  },
  // 자기자신 프로필
  {
    path: '/profile',
    name: 'ProfilePage',
    component: ProfilePage
  },
  // 프로필 수정
  {
    path: '/profile/edit',
    name: 'PersonalProfileEdit',
    component: PersonalProfileEdit
  },
  // 상대방 프로필(유저 이름 바인딩을 없애야할듯)
  {
    path: '/profile/:userId',
    name: 'PersonalProfile',
    component: PersonalProfile
  },
  // 비밀번호 변경
  {
    path: '/password/change',
    name: 'PasswordChange',
    component: PasswordChange
  },
  // 로그인
  {
    path: '/login',
    name: 'LoginFormView',
    component: LoginFormView
  },
  // 회원가입
  {
    path: '/signup',
    name: 'SignupView',
    component: SignupView
  },
  // 커뮤니티 메인(전체 게시글 조회)
  {
    path: '/community',
    name: 'CommunityView',
    component: CommunityView
  },
  // 게시글 생성
  {
    path: '/new',
    name: 'reviewNew',
    component: ReviewNewView
  },
  // 개별 게시글 조회
  {
    path: '/reviews/:reviewId',
    name: 'review',
    component: ReviewDetailView
  },
  // 개별 게시글 수정
  {
    path: '/reviews/:reviewId/edit',
    name: 'reviewEdit',
    component: ReviewEditView
  },
  // 404 Not Found Error
  {
    path: '/errors/404NotFound',
    name: 'NotFound404',
    component: NotFound404
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
