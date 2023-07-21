import { createRouter, createWebHistory} from 'vue-router';

import AppHome from './pages/AppHome.vue';
import AppAbout from './pages/AppAbout.vue';
import ProjectList from './pages/ProjectList.vue';
import Error from './pages/Error.vue'

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
            path: "/error/:code",
            name: "error",
            component: Error
        }
    ]
});

export { router };