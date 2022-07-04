// import VueRouter from "vue-router";
// import Vue from "vue";
// Vue.use(VueRouter);

import Login from '@/pages/Login/index'
import Home from '@/pages/Home/index'
import Reg from '@/pages/Reg/index'
import Help from '@/pages/Help/Introduce/index'
import Feedback from '@/pages/Help/Feedback/index'
import Perpon from '@/pages/Person/His/index'
import Set from "@/pages/Person/Set/index"
import Col from "@/pages/Person/Col/index"
import Ful from "@/pages/Person/Ful/index"
import Study from "@/pages/Content/Study/index"
import Xdetail from "@/pages/Content/Study/Xdetail/index"

export default [
    {
        path: '/xdetail',
        component: Xdetail,
        name:Xdetail,
        meta: { show: false }
    },
    {
        path: '/study',
        component: Study,
        meta: { show: false }
    },
    {
        path: '/feedback',
        component: Feedback,
        meta: { show: false }
    },
    {
        path: '/ful',
        component: Ful,
        meta: { show: false }
    },
    {
        path: '/col',
        component: Col,
        meta: { show: false }
    },
    {
        path: '/set',
        component: Set,
        meta: { show: false }
    },
    {
        path: '/his',
        component: Perpon,
        meta: { show: false }
    },
    {
        path: '/introduce',
        component: Help,
        meta: { show: false }
    },
    {
        path: '/',
        component: Home,
        meta: { show: false }
    },
    {
        path: '/home',
        component: Home,
        meta: { show: false }
    },
    {
        path: '/login',
        component: Login
    },
    {
        path: '/reg',
        component: Reg
    }
]
