<template>
  <footer>
    <div class="custom-shape-divider-bottom-1656519457">
      <svg
        data-name="Layer 1"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 1200 120"
        preserveAspectRatio="none"
      >
        <path
          d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"
          class="shape-fill"
        ></path>
      </svg>
    </div>
    <div class="footer-inner">
      <div class="container">
        Copyright 2024. Web developer portfolio-- by Jinhee Mok 💗
      </div>
    </div>
  </footer>
</template>

<script>
export default {
  name: 'AppFooter',
};
</script>

<style scoped>
.custom-shape-divider-bottom-1656519457 {
  position: relative;
  height: 150px;
  overflow: hidden;
}

.custom-shape-divider-bottom-1656519457 svg {
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 100%;
}

.shape-fill {
  fill: #b0e5f8;
}

.footer-inner {
  background-color: #f8f9fa;
  padding: 20px 0;
  text-align: center;
}

.container {
  max-width: 1200px;
  margin: 0 auto;
}
</style>
