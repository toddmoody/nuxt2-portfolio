<template>
  <section class="project__mobile__grid">
    <div class="wrapper">
      <div class="grid gap-20 md:grid-cols-3">
        <div v-for="image in mobileImages" :key="image.id" class="col-span-1 flex justify-center">
            <img :src="require(`@/assets/images/${image.path}`)" alt="" />
        </div>
        <div class="col-span-1 flex justify-center">

        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  props: {
    mobileImages: {
      required: true,
      type: Array,
    },
  },
}
</script>

<style>
</style>