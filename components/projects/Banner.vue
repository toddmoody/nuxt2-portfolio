<template>
  <header class="project__banner">
    <div class="flex flex-wrap -mx-5 overflow-hidden">
      <div class="mt-5 px-5 w-full overflow-hidden lg:w-1/3">
        <div class="pt-8">
          <h1>
            {{ brand }}
          </h1>
        </div>
        <div>
          <h3>
            {{ project }}
          </h3>
        </div>
      </div>
    </div>
  </header>
</template>

<script>
export default {
  props: {
    brand: {
      required: true,
      type: String,
    },
    project: {
      required: true,
      type: String,
    },
  },
}
</script>

<style>
</style>