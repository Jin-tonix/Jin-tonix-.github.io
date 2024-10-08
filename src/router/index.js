// src/router/index.js
import { createRouter, createWebHistory } from 'vue-router';
import AboutPage from '../components/AboutPage.vue';
import SkillsList from '../components/SkillsList.vue';
import ProjectListSection from '../components/ProjectListSection.vue';
import ContactSection from '../components/ContactSection.vue';

const routes = [
  { path: '/', component: AboutPage }, // 기본 경로를 AboutPage로 설정
  { path: '/about', component: AboutPage },
  { path: '/skills', component: SkillsList },
  { path: '/projects', component: ProjectListSection },
  { path: '/contact', component: ContactSection }
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
