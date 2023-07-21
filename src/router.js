import { createRouter, createWebHistory} from 'vue-router';

import AppHome from './pages/AppHome.vue';
import AppAbout from './pages/AppAbout.vue';
import ProjectList from './pages/ProjectList.vue';
import ErrorNotFound from './pages/ErrorNotFound.vue'

const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: "/",
            name: "home",
            component: AppHome
        },
        {
            path: "/about-me",
            name: "about",
            component: AppAbout
        },
        {
            path: "/projects",
            name: "projects",
            component: ProjectList
        },
        {
            path: "/not-found",
            name: "not-found",
            component: ErrorNotFound
        }
    ]
});

export { router };