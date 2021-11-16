<template>
  <section id="long-description" class="project__long__description">
    <div class="flex flex-wrap -mx-5 overflow-hidden">
      <div class="project__long__description__title">
        <h3>Stack & approach</h3>
      </div>
      <div class="project__long__description__content" v-html="approach"></div>
    </div>
    <div v-if="challenges" class="flex flex-wrap -mx-5 overflow-hidden">
      <div class="project__long__description__title">
        <h3>A challenge to overcome</h3>
      </div>
      <div
        class="project__long__description__content"
        v-html="challenges"
      ></div>
    </div>
    <div class="flex flex-wrap -mx-5 overflow-hidden">
      <div class="project__long__description__title">
        <h3>Key features</h3>
      </div>
      <div class="project__long__description__content" v-html="features"></div>
    </div>
  </section>
</template>

<script>
export default {
  props: {
    approach: {
      required: true,
      type: String,
    },
    challenges: {
      required: false,
      type: String,
    },
    features: {
      required: true,
      type: String,
    },
  },
}
</script>

<style>
</style>