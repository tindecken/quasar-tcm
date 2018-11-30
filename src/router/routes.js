
const routes = [
  {
    path: '/home',
    component: () => import('layouts/Home.vue'),
    children: [
      { path: '', component: () => import('pages/Index.vue') },
      // { path: 'testplan', component: () => import('components/TestPlan')}
      // { path: 'testlab', component: () => import('components/TestLab')}
    ]
  },
  {
    path: '/login',
    component: () => import('layouts/Login.vue'),
  },
  {
    path: '/logout',
    component: () => import('layouts/Logout.vue'),
  }
]

// Always leave this as last one
// if (process.env.MODE !== 'ssr') {
//   routes.push({
//     path: '*',
//     component: () => import('pages/Error404.vue')
//   })
// }

export default routes
