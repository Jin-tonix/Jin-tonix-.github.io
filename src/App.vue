<template>
  <div class="App">
    <!-- MainNavigation 컴포넌트 사용 -->
    <MainNavigation />

    <main>
      <div class="container">
        <AboutPage />
        <!-- SkillsList, ProjectListSection, ContactSection 컴포넌트 사용 -->
        <SkillsList />
        <ProjectListSection />
        <ContactSection />
      </div>
    </main>

    <!-- Footer와 BubblesEffect 컴포넌트 사용 -->
    <AppFooter />
    <BubblesEffect />
  </div>
</template>

<script>
import MainNavigation from './components/MainNavigation.vue';
import AboutPage from './components/AboutPage.vue';
import ProjectListSection from './components/ProjectListSection.vue';
import ContactSection from './components/ContactSection.vue';
import AppFooter from './components/AppFooter.vue';
import BubblesEffect from './components/BubblesEffect.vue';
import SkillsList from './components/SkillsList.vue';

export default {
  components: {
    MainNavigation,
    AboutPage,
    SkillsList,
    ProjectListSection,
    ContactSection,
    AppFooter,
    BubblesEffect,
  },
};
</script>

<style scoped>
.App {
  font-family: Arial, sans-serif;
}


</style>
