<template>
  <div class="project">
      <nuxt-content :document="doc"></nuxt-content>
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
  async asyncData({$content, params}){
    const doc = await $content(params.slug || 'index').fetch();
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