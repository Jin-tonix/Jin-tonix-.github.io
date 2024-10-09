<template>
  <section id="projects">
    <h2>PROJECTS</h2>
    <div class="flipBtn">
      <button class="flip-all" @click="toggleFlipAll">
        <span v-if="!flipAll">Flip All &gt;</span>
        <span v-else>Reset &gt;</span>
      </button>
    </div>
    <div class="projects-grid">
      <div
        v-for="(proj, idx) in projects"
        :key="`proj-${idx}`"
        :class="(flip === idx || flipAll) ? 'flip active' : 'flip'"
        @click="cardFlip(idx)"
      >
        <ProjectItemCard :proj="proj" />
      </div>
    </div>
  </section>
</template>

<script>
import { ref } from 'vue';
import ProjectItemCard from './ProjectCard.vue';

export default {
  name: 'ProjectListSection',
  components: {
    ProjectItemCard
  },
  setup() {
    const flipAll = ref(false);
    const flip = ref(-1);
    const projects = ref([
      {
        title: "Coupang-Discovery",
        image: "Coupang-Discovery.png",
        detail: "쿠팡 웹페이지의 <오늘의 발견> 영역을 마크업한 결과물입니다.",
        start: "2022.05.12",
        end: "2022.05.14",
        tech: ["HTML5", "CSS3"],
        work: ["HTML 마크업", "CSS 스타일링"],
        demo: "https://savinpark.github.io/coupang-discovery/",
        source: "https://github.com/SavinPark/coupang-discovery"
      },
      // 추가 프로젝트들...
    ]);

    const cardFlip = (n) => {
      flip.value = flip.value === n ? -1 : n;
    };

    const toggleFlipAll = () => {
      flipAll.value = !flipAll.value;
    };

    return {
      flipAll,
      flip,
      projects,
      cardFlip,
      toggleFlipAll
    };
  }
};
</script>

<style scoped>
/* 페이지 전체 배경을 투명하게 설정 */
body {
  background-color: transparent; /* 기본 배경을 투명하게 설정 */
  margin: 0;
  padding: 0;
}

#projects {
  padding: 40px;
  background-color: transparent; /* 프로젝트 섹션의 배경을 투명하게 설정 */
  min-height: 100vh; /* 세로 길이를 페이지 전체에 맞춤 */
}

.projects-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr)); /* 카드가 여러 열로 자동 배치되도록 설정 */
  gap: 20px; /* 카드 사이 간격 설정 */
  padding: 20px;
}

.projects-grid > div {
  transition: transform 0.3s ease;
}

.projects-grid > div.flip {
  transform: rotateY(0deg);
}

.projects-grid > div.active {
  transform: rotateY(180deg);
}

.flipBtn {
  text-align: center;
  margin-bottom: 20px;
}

.flip-all {
  background-color: #007bff;
  color: white;
  border: none;
  padding: 10px 20px;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s ease;
}

.flip-all:hover {
  background-color: #0056b3;
}

/* 카드가 세로로 더 길어지도록 설정 */
.project-item-card {
  width: 100%;
  max-width: 500px;
  height: 600px; /* 세로 길이를 더 길게 설정 */
}
</style>
