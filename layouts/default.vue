<template>
  <div>
    <Nav />
    <div class="main">
      <Sidenav />
      <nuxt />
      <Footer />
    </div>
  </div>
</template>

<script>
import Nav from '~/components/app/Nav'
import Sidenav from '~/components/app/Sidenav'
import Footer from '~/components/app/Footer'

export default {
  components: {
    Nav,
    Sidenav,
    Footer
  }
}
</script>

<style scoped></style>
