<template>
  <div class="projects-item" @click="flipCard">
    <div class="project-front" :class="{ flipped: isFlipped }" :style="cardStyle">
      <div class="info">
        <h3 class="title">{{ proj.title }}</h3>
        <p class="click-msg">click</p>
      </div>
    </div>
    <div class="project-back" :class="{ flipped: isFlipped }">
      <h3>{{ proj.title }}</h3>
      <div class="back-inner detail">
        <p>{{ proj.detail }}</p>
      </div>
      <div class="back-inner time">
        <h4># Period</h4>
        <p>{{ proj.start }} ~ {{ proj.end }}</p>
      </div>
      <div class="back-inner tech">
        <h4># Tech</h4>
        <ul class="lang">
          <li v-for="ele in proj.tech" :key="`${proj.title}-${ele}`">{{ ele }}</li>
        </ul>
      </div>
      <div class="back-inner work">
        <h4># My Work</h4>
        <ul class="lang">
          <li v-for="ele in proj.work" :key="`${proj.title}-${ele}`">
            <font-awesome-icon :icon="['fas', 'circle']" class="dot" /> {{ ele }}
          </li>
        </ul>
      </div>
      <div class="btn-group">
        <a :href="proj.source" target="_blank"><button>Source Code</button></a>
        <a :href="proj.demo" target="_blank"><button>Demo</button></a>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ProjectCard',
  props: {
    proj: Object
  },
  data() {
    return {
      isFlipped: false,
    };
  },
  computed: {
    cardStyle() {
      return {
        backgroundImage: `url(${process.env.VUE_APP_PUBLIC_URL}/images/${this.proj.image})`,
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
      };
    }
  },
  methods: {
    flipCard() {
      this.isFlipped = !this.isFlipped;
    }
  }
};
</script>

<style scoped>
.projects-item {
  perspective: 1000px;
  width: 300px;
  height: 400px;
  position: relative;
  cursor: pointer;
}

.project-front,
.project-back {
  width: 100%;
  height: 100%;
  position: absolute;
  backface-visibility: hidden;
  transition: transform 0.6s ease-in-out;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  padding: 20px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  border-radius: 10px;
}

.project-front {
  background-color: #f5f5f5;
}

.project-back {
  background-color: #fff;
  transform: rotateY(180deg);
}

.flipped {
  transform: rotateY(180deg);
}

.info {
  text-align: center;
}

.click-msg {
  margin-top: 10px;
  font-size: 0.9rem;
  color: #b0e5f8;
}

.back-inner {
  margin-bottom: 10px;
}

.btn-group {
  margin-top: 20px;
}

button {
  background-color: #b0e5f8;
  color: white;
  border: none;
  padding: 10px 20px;
  border-radius: 5px;
  cursor: pointer;
  margin: 0 5px;
  transition: background-color 0.3s ease;
}

button:hover {
  background-color: #b0e5f8;
}
</style>
