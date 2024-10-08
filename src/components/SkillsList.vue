<template>
  <section id="skills">
    <h2>Main Skills</h2>
    <ul>
      <li v-for="skill in mainSkills" :key="`${skill.lang}-${skill.ability}`">
        <div class="skill-name">{{ skill.lang }}</div>
        <div class="ability-bar">
          <div class="ability" :style="abilityStyle(skill.ability, skill.color)">
            <div class="ability-percent">
              <span class="percent">{{ skill.ability }} %</span>
            </div>
          </div>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae soluta fugiat nam maxime sit laudantium aspernatur expedita sunt saepe, nobis labore doloribus similique quae! Quas doloribus molestiae rem repellendus reiciendis!
          </p>
        </div>
      </li>
    </ul>
  </section>
</template>

<script>
export default {
  name: 'SkillsList',
  data() {
    return {
      mainSkills: [
        { lang: 'HTML5', ability: 80, color: '#e34c26' },
        { lang: 'CSS3', ability: 80, color: '#264de4' },
        { lang: 'JavaScript', ability: 70, color: '#f7df1e' },
        { lang: 'jQuery', ability: 50, color: '#0769ad' },
        { lang: 'React', ability: 70, color: '#61dafb' },
        { lang: 'TypeScript', ability: 30, color: '#007acc' },
        { lang: 'Next.js', ability: 30, color: '#000000' },
        { lang: 'SCSS', ability: 60, color: '#c6538c' },
        { lang: 'Bootstrap', ability: 70, color: '#563d7c' },
        { lang: 'Semantic UI', ability: 70, color: '#35bdb2' },
        { lang: 'Figma', ability: 70, color: '#f24e1e' },
        { lang: 'MySQL', ability: 30, color: '#00758f' },
        { lang: 'Github', ability: 40, color: '#181717' },
      ]
    };
  },
  methods: {
    abilityStyle(ability, color) {
      return {
        width: ability + '%',
        backgroundColor: color
      };
    }
  }
};
</script>

<style lang="scss" scoped>
.ability {
  height: 20px;
  border-radius: 10px;
  transition: width 0.3s ease-in-out;
}

.ability-percent {
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
}

.ability-bar {
  background-color: #e0e0e0;
  border-radius: 10px;
  padding: 5px;
  margin-bottom: 10px;
  overflow: hidden;
}

.skill-name {
  font-weight: bold;
  margin-bottom: 5px;
}

.percent {
  font-size: 12px;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  margin-bottom: 20px;
}

// SCSS 믹스인, 변수, 중첩을 이용한 스타일링 예시
$bar-color: #e0e0e0;

.ability-bar {
  background-color: $bar-color;
  padding: 5px;
  .ability {
    border-radius: 10px;
    transition: width 0.3s ease-in-out;
  }
}

@media (max-width: 600px) {
  .ability-bar {
    width: 100%;
  }
}
</style>
