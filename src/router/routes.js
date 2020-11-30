
import { Notify, LocalStorage } from 'quasar'

const requireAuthentication = (to, from, next) => {
  // ...
  const authorized = LocalStorage.getItem('token')
  if (authorized) {
    next()
  } else {
    // TODO: show error notification
    Notify.create({
      color: 'negative',
      message: 'Ooops! You need to login first to access the page',
      icon: 'report_problem'
    })
    next({
      name: 'phone-login',
      query: { redirect: to.path }
    })
  }
}

const routes = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      // { path: '', name: 'main', component: () => import('pages/contest/ContestForm.vue') },
      { path: '', name: 'main', component: () => import('pages/Index.vue') },
      { path: 'userManagement', name: 'user-management', beforeEnter: requireAuthentication, component: () => import('pages/UserManagement.vue') },
      { path: 'login', name: 'login', component: () => import('pages/forms/LoginForm.vue') },
      { path: 'register', name: 'registeration', component: () => import('pages/forms/RegisterationForm.vue') }
    ]
  }
]

// Always leave this as last one
if (process.env.MODE !== 'ssr') {
  routes.push({
    path: '*',
    component: () => import('pages/Error404.vue')
  })
}

export default routes
