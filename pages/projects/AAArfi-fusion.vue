<template>
    <div class="project wrapper">
      <projects-banner :brand="projects[1].brand" :project="projects[1].project" :description="projects[1].description" />
  </div>
</template>

<script>
import { projects } from '~/mixins/utils'

export default {
  layout: 'project',
  mixins: [projects],
  data() {
    return {
      projects: projects,
    }
  },
}
</script>

</style>