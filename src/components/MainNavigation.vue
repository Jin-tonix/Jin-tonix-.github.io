<template>
  <header>
    <div class="custom-shape-divider-top-1656519075">
      <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
        <path
          d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"
          style="fill: #b3ecff;" />
      </svg>
      <div class="header-inner">
        <div class="container">
          <div id="logo">
            <a href="#about">Mok Jinhee</a>
          </div>
          <nav>
            <a href="#about">&lt; About &gt;</a>
            <a href="#skills">&lt; Skills &gt;</a>
            <a href="#projects">&lt; Projects &gt;</a>
            <a href="#contact">&lt; Contact &gt;</a>
          </nav>
        </div>
      </div>
    </div>
  </header>
</template>

<script>
export default {
  name: 'MainNavigation'
};
</script>


<style scoped>
/* 네비게이션바와 SVG를 같은 밝고 경쾌한 하늘색으로 채움 */
.custom-shape-divider-top-1656519075 {
  position: relative; /* SVG를 네비게이션과 겹치게 */
  top: 0;
  left: 0;
  width: 100%;
  height: 180px; /* SVG가 네비게이션바와 겹치도록 높이 조정 */
  overflow: hidden;
  z-index: 1; /* SVG가 네비게이션 뒤에 오도록 설정 */
  background-color: transparent; /* 배경 투명 처리 */
}

.custom-shape-divider-top-1656519075 svg {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
}

/* 네비게이션 메뉴 */
.header-inner {
  position: absolute; /* 네비게이션을 SVG와 겹치도록 설정 */
  top: 0;
  left: 0;
  z-index: 2; /* 네비게이션이 SVG 위로 올라오도록 설정 */
  width: 100%;
  height: 80px; /* 네비게이션바의 세로 길이 */
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: transparent; /* 배경 투명 처리 */
}

.container {
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  padding: 10px 20px; /* 패딩을 줄임 */
}

#logo a {
  font-size: 2.5rem;
  font-weight: bold;
  color: #050000;
  text-decoration: none;
}

nav {
  display: flex;
  gap: 20px;
}

nav a {
  color: #010000;
  text-decoration: none;
  font-size: 1.2rem;
  transition: color 0.3s ease;
}

nav a:hover {
  color: #12eff3;
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
