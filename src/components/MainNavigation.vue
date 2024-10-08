<template>
  <header>
    <div class="header-inner">
      <div class="container">
        <div id="logo">
          <router-link to="/">Mok Jinhee</router-link>
        </div>
        <nav>
          <router-link to="/AboutPage">&lt; About /&gt;</router-link>
          <router-link to="/SkillsList">&lt; Skills /&gt;</router-link>
          <router-link to="/ProjectCard">&lt; Projects /&gt;</router-link>
          <router-link to="/ContactSection">&lt; Contact /&gt;</router-link>
        </nav>
      </div>
    </div>
    <div class="custom-shape-divider-top-1656519075">
      <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
        <path
          d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"
          class="shape-fill" />
      </svg>
    </div>
  </header>
</template>

<script>
export default {
  name: 'MainNavigation'
};
</script>

<style scoped>
/* 기본 레이아웃 스타일 */
.header-inner {
  background-color: #b0e5f8;
  padding: 20px 0;
}

.container {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

#logo a {
  font-size: 1.5rem;
  font-weight: bold;
  color: #fff;
  text-decoration: none;
}

nav {
  display: flex;
  gap: 20px;
}

nav a {
  color: #fff;
  text-decoration: none;
  font-size: 1.2rem;
  transition: color 0.3s ease;
}

nav a:hover {
  color: #f39c12;
}

/* SVG 모양 스타일 */
.custom-shape-divider-top-1656519075 {
  position: relative;
  height: 100px;
  overflow: hidden;
}

.custom-shape-divider-top-1656519075 svg {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100px;
}

.shape-fill {
  fill: #333;
}

/* 반응형 스타일 */
@media (max-width: 768px) {
  nav {
    flex-direction: column;
    align-items: center;
    gap: 10px;
  }

  #logo {
    text-align: center;
    margin-bottom: 10px;
  }
}
</style>
