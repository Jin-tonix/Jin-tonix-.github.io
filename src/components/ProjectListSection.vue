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

