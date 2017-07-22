import signup from '../page/signUp.vue';
import login from '../page/login.vue';
import publish from '../page/publish.vue';
import home from '../page/home.vue';
import profile from '../page/profile.vue';
import update from '../page/update.vue';

export default [{
    path: '/sign-up',
    component: signup
}, {
    path:'/login',
    component:login
},{
    path:'/publish',
    component:publish
},{
    path:'/profile',
    component:profile
},{
    path:'/home',
    component:home
},{
    path:'/update',
    component:update
}]
