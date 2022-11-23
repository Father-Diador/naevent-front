import {createRouter, createWebHistory} from 'vue-router'

import WebPage from '@/components/WebPage.vue'
import HomePage from '@/components/content/pages/HomePage.vue'
import EventCard from '@/components/content/cards/EventCard.vue'
// import SignIn from '@/components/auth/SignIn.vue'
// import SignUp from '@/components/auth/SignUp.vue'

const routes = [
  {
    path: '/',
    name: 'webpage',
    component: WebPage,
    meta: {
        title: ''
    },
    children: [
        {
            path: '',
            component: HomePage,
            name: 'index',
            meta: {
                title: 'Главная'
            },
            beforeEnter: scrollToTop,
        },
        {
          path: '/eventcard/:id',
          component: EventCard,
          meta: {
              title: 'Карточка ивента'
          },
          beforeEnter: scrollToTop,
      },
    ],
  },
]


function scrollToTop(to, from, next) {
    next()
    window.scrollTo(0,0);
}

const router = createRouter({
  mode: 'history',
  history: createWebHistory(),
  routes,
})

export default router
