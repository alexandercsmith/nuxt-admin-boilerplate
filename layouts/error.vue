<template>
  <section>
    <h1 v-text="error.statusCode"></h1>
    <h2 v-if="error.statusCode === 404">Page Not Found</h2>
    <h2 v-else>An Error Occurred</h2>
    <n-link to="/">Back to Home</n-link>
  </section>
</template>

<script>
export default {
  props: {
    error: {
      type: Object,
      required: true
    }
  }
}
</script>

<style lang="scss" scoped></style>
