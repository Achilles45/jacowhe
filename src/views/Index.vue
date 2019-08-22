<template>
  <div class="index__wrapper">
    <Topnav />
    <Navbar />
    <Carousel />
    <!--Why us section
    ======================-->
    <Whyus />
    <!--End of why section
    =========================-->
    <!--How it works section
    =========================-->
    <Process />
    <!--End of How it work section
    ==========================-->
    <!--Investments section
    =========================-->
    <Investments />
    <!--End of Investments section
    ==========================-->
    <Footer />
  </div>
</template>

<script>
// @ is an alias to /src
import Navbar from "@/components/layouts/Navbar.vue";
import Topnav from "@/components/Topnav.vue";
import Carousel from "@/components/Carousel.vue";
import Process from "@/components/Process.vue";
import Whyus from "@/components/Whyus.vue";
import Investments from "@/components/Investments.vue";
import Footer from "@/components/layouts/Footer.vue";
export default {
  name: "index",
  components: {
    Navbar,
    Topnav,
    Carousel,
    Process,
    Whyus,
    Investments,
    Footer
  }
};
</script>
<style scoped lang="scss">
</style>