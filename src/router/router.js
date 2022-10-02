import {createRouter, createWebHashHistory} from "vue-router";
import Home from "../views/home.vue";
import LoginRegister from "../views/login-register.vue";
import MobileHome from "../views/mobile-home.vue";
import MobileClasses from "../views/mobile-classes.vue";
import MobileDiscovery from "../views/mobile-discovery.vue";
import MobileCard from "../views/mobile-card.vue";
import MobileCardInstructions from "../views/mobile-card-instructions.vue";
import MobileLoginRegister from "../views/mobile-login-register.vue";
import MobileLogin from "../components/mobile-login.vue";
import MobileRegister from "../components/mobile-register.vue";

const routes = [
    {
        path: '/',
        component: Home
    },
    {
        path: "/login-register",
        component: LoginRegister
    },
    {
        path: '/mobile',
        component: MobileHome,
        redirect: "mobile/home",
        children: [
            {
                path: "home",
                component: MobileDiscovery,
                name: "MobileHome",
            },
            {
                path: "classes",
                component: MobileClasses,
                name: "MobileClasses",
            },
            {
                path: "card",
                component: MobileCard,
                name: "MobileCard",
            },
        ]
    },
    {
        path: "/mobile-card-instructions",
        component: MobileCardInstructions,
        name: "MobileCardInstructions",
    },
    {
        path: "/mobile-login-register",
        component: MobileLoginRegister,
        name: "MobileLoginRegister",
        children: [
            {
                path: "login",
                component: MobileLogin,
                name: "MobileLogin",
            },
            {
                path: "register",
                component: MobileRegister,
                name: "MobileRegister"
            }
        ]
    },
]

const router = createRouter({
    history: createWebHashHistory(),
    routes,
})

const loginRequiredPages = [
    "/mobile/classes",
    "/mobile/card"
]

router.beforeEach((to, from, next) => {

    const token = localStorage.getItem("token")
    const id = localStorage.getItem("id")

    if (loginRequiredPages.includes(to.path) && !token && !id) {
        next({path: "/login-register", query: {destination: to.path}})
    } else {
        next()
    }
})

export default router
