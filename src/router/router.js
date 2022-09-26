import {createRouter, createWebHashHistory} from "vue-router";
import Home from "../views/home.vue";
import MobileHome from "../views/mobile-home.vue";
import MobileClasses from "../views/mobile-classes.vue";
import MobileDiscovery from "../views/mobile-discovery.vue";
import MobileCard from "../views/mobile-card.vue";
import MobileCardInstructions from "../views/mobile-card-instructions.vue";

const routes = [
    {
        path: '/', component: Home
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
                name: "Classes",
            },
            {
                path: "card",
                component: MobileCard,
                name: "Card",
            },
            {
                path: "card-instructions",
                component: MobileCardInstructions,
                name: "CardInstructions",
            },
        ]
    },
]

const router = createRouter({
    history: createWebHashHistory(),
    routes,
})

export default router
