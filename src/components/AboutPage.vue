<!-- AboutPage.vue -->

<template>
  <section id="about">
    <div id="introduction" class="about-inner">
      <div class="typeit">
        <span ref="typeitElement"></span>
      </div>
      <p>저는 법학을 전공하고, 사람들과 직접 소통하고 가르치는 일에 대한 열정에 영어 강사로서 활동하였습니다.</p>
      <p>법학을 통해 체득한 분석력과 영어교육에서의 소통 능력은 복잡한 개발 문제를 해결하고, 클라이언트와의 원활한 협업을 하는데 도움이 될 것이라고 생각합니다.</p>
      <br>
      <p>백엔드 개발자는 단순한 코딩을 넘어 문제를 구조적으로 해결하고, 시스템의 효율성을 높이는 역할을 맡습니다. 저의 법학적 사고와 교육 경험은 백엔드 개발자로서 더 나은 성과를 낼 수 있는 바탕이 될 것입니다.</p>
      <p>개발자로서 새로운 가치를 창출하고 싶습니다.</p>
    </div>

    <div id="profile" class="about-inner">
      <h2>ABOUT</h2>
      <div class="profile-inner">
        <div class="profile-img"></div> <!-- 이미지 경로는 CSS에서 설정 -->
        <div class="profile-list">
          <ul>
            <li><font-awesome-icon :icon="['fas', 'user']" /><span>목진희</span></li>
            <li><font-awesome-icon :icon="['fas', 'birthday-cake']" /><span>1999. 08. 15</span></li>
            <li><font-awesome-icon :icon="['fas', 'home']" /><span>서울특별시 용산구</span></li>
            <li><font-awesome-icon :icon="['fas', 'envelope']" /><span>jinheemok815@gmail.com</span></li>
            <li><font-awesome-icon :icon="['fas', 'graduation-cap']" /><span>청주대학교 (법학과), 학점은행제 (경영학)</span></li>
          </ul>
          <ul>
            <li>
              <a href="https://github.com/Jin-tonix"><font-awesome-icon :icon="['fab', 'github']" /><span>Git "https://github.com/Jin-tonix/Jin-tonix-.github.io.git"</span></a>
            </li>
            <li><a href="https://velog.io/@Jin-tonix"><font-awesome-icon :icon="['fab', 'blogger']" /><span>BLOG</span></a></li>
          </ul>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import TypeIt from 'typeit'; // TypeIt 사용
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';

export default {
  name: 'AboutPage',
  components: {
    FontAwesomeIcon,
  },
  mounted() {
    new TypeIt(this.$refs.typeitElement, {
      strings: ['안녕하세요 : ) 주니어 Backend 개발자 목진희입니다.'],
      speed: 100,
      loop: true,
      loopDelay: [2500],
      waitUntilVisible: true,
    }).go();
  },
};
</script>

<style scoped lang="scss">
.about-inner {
  margin: 20px;
}

#about {
  padding-top: 40px; /* 섹션 전체적으로 글씨를 위로 올리기 위해 상단 패딩을 줄임 */
}

.profile-inner {
  display: flex;
  align-items: center;
  margin-top: 40px; /* 프로필 정보와 텍스트 사이에 더 많은 간격을 추가 */
}

.profile-img {
  width: 100px;
  height: 100px;
  background-image: url('~@/assets/images/profileImg.webp'); /* 경로 수정 */
  background-size: cover;
  background-position: center;
  border-radius: 50%;
  margin-right: 20px;
}

.profile-list {
  list-style: none;
  padding: 0;
}

.profile-list ul {
  margin: 0;
  padding: 0;
  list-style: none;
}

.profile-list li {
  margin-bottom: 10px;
}

.profile-list a {
  color: #333;
  text-decoration: none;
}

.profile-list a:hover {
  text-decoration: underline;
}
</style>
