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
        { lang: 'HTML', ability: 80 },
        { lang: 'CSS', ability: 70},
        { lang: 'JavaScript', ability: 70 },
        { lang: 'Java', ability: 80},
        { lang: 'Vue', ability: 80},
        { lang: 'Node.js', ability: 70},
        { lang: 'Next.js', ability: 30},
        { lang: 'SpringBoot', ability: 80},
        { lang: 'Bootstrap', ability: 70},
        { lang: 'JPA', ability: 70},
        { lang: 'Figma', ability: 70},
        { lang: 'MySQL', ability: 70},
        { lang: 'Github', ability: 80},
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

</style>
