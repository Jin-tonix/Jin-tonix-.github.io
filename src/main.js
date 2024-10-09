import { createApp } from 'vue';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faCircle } from '@fortawesome/free-solid-svg-icons';
import './assets/scss/style.scss';  // 스타일 파일 경로 확인

import App from './App.vue';

// 아이콘을 FontAwesome 라이브러리에 추가
library.add(faCircle);

const app = createApp(App);

// FontAwesomeIcon 컴포넌트를 전역으로 등록
app.component('font-awesome-icon', FontAwesomeIcon);

// Vue 앱을 #app에 마운트
app.mount('#app');
