import Main from "@/pages/Main";
import {createRouter, createWebHashHistory} from "vue-router";
import Registration from "@/pages/Registration";
import Profile from "@/pages/Profile";
import Booking from "@/pages/Booking";
import Booking2 from "@/pages/Booking2";
import Booking3 from "@/pages/Booking3";
import store from '@/store'

const routes = [
    {
        path: "/",
        component: Main
    },
    {
        path: "/registration",
        component: Registration
    },
    {
        path: '/profile',
        component: Profile
    },
    {
        path: '/booking',
        component: Booking,
    },
    {
        path: '/booking2',
        component: Booking2,
        meta: {
            requiredHotel: true
        }
    },
    {
        path: '/booking3',
        component: Booking3,
        meta: {
            requiredHotel: true,
            requiredOrder: true
        }
    }
]

const router = createRouter({
    routes,
    history: createWebHashHistory()
})

router.beforeResolve((to, from, next) => {
    let isnext = false
    if (to.matched.some(record => record.meta.requiredHotel)) {
        if (store.state.order.hotel === null) {
            // alert('Сначала выберите дом отдыха')
            store.commit('addMessage', {type: 'info', text: 'Сначала выберите дом отдыха'})
            next({
                path: '/booking'
            })
            isnext = true
        }
    }

    if (!isnext) {
        if (to.matched.some(record => record.meta.requiredOrder)) {
            if (!store.state.order.rooms[0]) {
                store.commit('addMessage', {text: 'Сначала выберите комнаты', type: 'info'})
                next({
                    path: '/booking2'
                })
            } else {
                next()
            }
        } else {
            next()
        }
    }

})
export default router