<template>
  <div class="home">
    <Navbar />
  </div>
</template>

<script>
// @ is an alias to /src
import Navbar from "@/components/layouts/Navbar.vue";
export default {
  name: "index",
  components: {
    Navbar
  }
};
</script>
