<template>
  <div class="project">
    <div class="wrapper">
      <ProjectsBanner
        :brand="projects[3].brand"
        :project="projects[3].project"
      />
      <ProjectsIntro
        :brand="projects[3].brand"
        :skills="projects[3].skills"
        :description="projects[3].description"
        :approach="projects[3].approach"
        :challenges="projects[3].challenges"
        :features="projects[3].features"
      />
    </div>
    <div>
      <ProjectsMobileGrid :mobileImages="projects[3].images.mobile" />
    </div>
    <div class="wrapper">
      <ProjectsLongDescription :approach="projects[3].approach" :features="projects[3].features" />
    </div>
    <div>
      <ProjectsHeroDesktop :desktopImage="projects[3].images.desktop[0]" />
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