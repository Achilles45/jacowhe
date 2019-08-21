<template>
  <div class="index__wrapper">
    <Topnav />
    <Navbar />
    <Carousel />
  </div>
</template>

<script>
// @ is an alias to /src
import Navbar from "@/components/layouts/Navbar.vue";
import Topnav from "@/components/Topnav.vue";
import Carousel from "@/components/Carousel.vue";
export default {
  name: "index",
  components: {
    Navbar,
    Topnav,
    Carousel
  }
};
</script>
<style scoped lang="scss">
</style>