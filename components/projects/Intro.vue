<template>
  <section class="project__intro">
    <div class="flex flex-wrap -mx-5 overflow-hidden">
      <div class="project__skills">
        <h4>Skills</h4>
        <p v-for="skill of skills" :key="skill.id">
          {{ skill.title }}
        </p>
        <div class="mt-6">
          <h4>Status</h4>
          <div class="flex items-center">
            <p>Complete/production</p>
          </div>
        </div>
      </div>
      <div class="project__description">
        <div v-html="description"></div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  props: {
    brand: {
      required: true,
      type: String,
    },
    skills: {
      required: true,
      type: Array,
    },
    description: {
      required: true,
      type: String,
    },
    approach: {
      required: true,
      type: String,
    },
    challenges: {
      required: true,
      type: String,
    },
    features: {
      required: true,
      type: String,
    },
  },
  data() {
    return {}
  },
}
</script>

<style>
</style>