<template>
  <div class="project">
    <div class="wrapper">
      <ProjectsBanner
        :brand="projects[0].brand"
        :project="projects[0].project"
      />
      {{ doc }}
      <nuxt-content :document="doc"></nuxt-content>
      <!-- <ProjectsIntro
        :brand="projects[0].brand"
        :skills="projects[0].skills"
        :description="projects[0].description"
        :approach="projects[0].approach"
        :challenges="projects[0].challenges"
        :features="projects[0].features"
      /> -->
    </div>
    <div>
      <ProjectsMobileGrid :mobileImages="projects[0].images.mobile" />
    </div>
    <div class="wrapper">
      <ProjectsLongDescription :approach="projects[0].approach" :challenges="projects[0].challenges" :features="projects[0].features" />
    </div>
    <div>
      <ProjectsHeroDesktop :desktopImage="projects[0].images.desktop[0]" />
    </div>
  </div>
  
</template>

<script>
import { projects } from '~/mixins/utils';
import ProjectsBanner from '../../components/projects/Banner.vue';
import ProjectsIntro from '../../components/projects/Intro.vue';
import ProjectsMobileGrid from '../../components/projects/MobileGrid.vue';
import ProjectsLongDescription from '../../components/projects/LongDescription.vue';
import ProjectsHeroDesktop from '../../components/projects/HeroDesktop.vue';

export default {
  components: { ProjectsBanner, ProjectsIntro, ProjectsMobileGrid, ProjectsLongDescription, ProjectsHeroDesktop },
  async asyncData({$content}){
    const doc = await $content('new-forests').fetch();
    return { doc };
  },
  layout: 'project',
  mixins: [projects],
  data() {
    return {
      projects: projects,
    }
  },
}
// }
</script>

<style>
</style>