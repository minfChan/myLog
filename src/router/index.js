import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

const routes = [
  {
    name: 'login',
    path: '/login',
    component: resolve => require(['../pages/Login.vue'], resolve)
  },
  {
    name: 'main',
    path: '/',
    component: resolve => require(['../pages/Main.vue'], resolve),
    children:[
      {
        name: 'menu',
        path: '/menu',
        component: resolve => require(['../pages/Menu.vue'], resolve),
        meta: { requireAuth: true }
      },
      {
        name: 'usersj',
        path: '/usersj',
        component: resolve => require(['../pages/user/usersj.vue'], resolve),
        meta: { requireAuth: true }
      },
      {
        name: 'userll',
        path: '/userll',
        component: resolve => require(['../pages/user/userll.vue'], resolve),
        meta: { requireAuth: true }
      },
      {
        name: 'goshop',
        path: '/goshop',
        component: resolve => require(['../pages/goshop.vue'], resolve),
        meta: { requireAuth: true }
      },
      {
        name: 'userPassword',
        path: '/userPassword',
        component: resolve => require(['../pages/userPassword.vue'], resolve),
        meta: { requireAuth: true }
      },
      {
        name: 'literature',
        path: '/literature',
        component: resolve => require(['../pages/study/literature.vue'], resolve),
        meta: { requireAuth: true }
      }
    ]
  },

	//默认首页
	{ path: '*', redirect: '/login' }
];

const router = new Router({
	routes: routes
})

router.beforeEach((to, from, next) => {
	if (to.matched.some(r => r.meta.requireAuth)) {
		if (localStorage.getItem('username')) {
			next();
		} else {
      next('/login');
		}
	} else {
		next();
	}
})

export default router;