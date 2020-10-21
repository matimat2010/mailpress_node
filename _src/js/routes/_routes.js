Vue.use(VueRouter);


const routes = [{
        path: '/',
        component: homepage
    },
    {
        path: '/register',
        component: register
    },
    {
        path: '/login',
        component: login
    },
    {
        path: '/dashboard',
        component: dashboard
    },
    {
        path: '/newsletter/*',
        component: newsletter
    },
    {
        path: '/subscribe',
        component: subscribe
    },
    {
        path: '/about',
        component: about
    }
];

const router = new VueRouter({
    // base: '/',
    routes,
});