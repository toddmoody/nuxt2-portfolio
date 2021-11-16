<template>
  <section class="project__hero__desktop">
    <div class="wrapper">
      <img :src="require(`@/assets/images/${desktopImage.path}`)" alt="" />
    </div>
  </section>
</template>

<script>
export default {
  props: {
    desktopImage: {
      required: true,
      type: Object,
    },
  },
}
</script>

<style>
</style>